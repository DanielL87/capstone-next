import { fetchUser } from "@/app/lib/fetchUser.js";
import { prisma } from "@/app/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function POST(req, res) {
  try {
    const { name, pet, category, worth, isBonus, dueDate } = await req.json();

    const user = await fetchUser();

    let task = null;

    const _pet = await prisma.pet.findFirst({
      where: { id: pet.id },
      include: { task: true },
    });

    if (isBonus) {
      if (_pet) {
        const filteredBonusTasks = await _pet.task.filter(
          (task) => task.isBonus && !task.isCompleted
        );

        if (filteredBonusTasks.length < 3) {
          task = await prisma.task.create({
            data: {
              name,
              userId: user.id,
              petId: pet.id,
              category: category,
              worth: worth,
              isBonus,
              dueDate,
            },
          });
        }
      }
    } else {
      task = await prisma.task.create({
        data: {
          name,
          userId: user.id,
          petId: pet.id,
          category: category,
          worth: worth,
          isBonus,
          dueDate,
        },
      });
    }

    return NextResponse.json({ success: true, task });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function PUT(req, res) {
  const { petId, isCompleted, worth, taskId } = await req.json();
  const user = await fetchUser();

  const _task = await prisma.task.findFirst({ where: { id: taskId } });

  if (_task.userId !== user.id) {
    return NextResponse.json({
      success: false,
      message: "You must be the owner of this task to Update!",
    });
  }

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: { isCompleted },
  });

  if (updatedTask) {
    const wallet = await prisma.wallet.update({
      where: { userId: user.id },
      data: {
        coin: {
          increment: worth,
        },
      },
    });

    const pet = await prisma.pet.update({
      where: {
        id: petId,
      },
      data: {
        hearts: {
          increment: 1,
        },
      },
    });
  }

  return NextResponse.json({ success: true, updatedTask });
}
