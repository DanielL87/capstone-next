import { NextResponse } from "next/server.js";

import { fetchUser } from "@/app/lib/fetchUser.js";
import { prisma } from "@/app/lib/prisma.js";

export async function GET() {
  try {
    const user = await fetchUser();

    if (!user.id) {
      return NextResponse.json({
        success: false,
        message: "Please login/register!",
      });
    }

    const pets = await prisma.pet.findMany({ where: { userId: user.id } });

    return NextResponse.json({
      success: true,
      pets,
      user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}

export async function POST(req) {
  try {
    const {
      nickname,
      type,
      spriteUrl,
      name,
      pokedexId,
      isShiny,
      isRare,
      collectedNumber,
    } = await req.json();
    const user = await fetchUser();

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Please login to create a pet!",
      });
    }

    const pet = await prisma.pet.create({
      data: {
        userId: user.id,
        name,
        nickname,
        type,
        spriteUrl,
        pokedexId,
        isShiny,
        isRare,
      },
    });

    let _user;

    if (collectedNumber) {
      _user = await prisma.user.update({
        where: { id: user.id },
        data: {
          collectedPets: {
            push: collectedNumber,
          },
        },
      });
    }

    return NextResponse.json({ success: true, pet });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function PUT(req) {
  const { petId } = await req.json();
  const user = await fetchUser();

  const _pet = await prisma.pet.findFirst({
    where: {
      id: petId,
    },
  });

  console.log(_pet);
  console.log(user);

  if (_pet.userId !== user.id) {
    return NextResponse.json({
      success: false,
      message: "You must be the owner of this pet to Update!",
    });
  }

  return NextResponse.json({ success: true, message: "Put Router", petId });
}
