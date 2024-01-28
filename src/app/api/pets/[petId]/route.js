import { fetchUser } from "@/app/lib/fetchUser.js";
import { prisma } from "@/app/lib/prisma.js";
import { NextResponse } from "next/server.js";

//Get Pet by ID

export async function GET(req, res) {
  try {
    const { petId } = res.params;

    const pet = await prisma.pet.findFirst({
      where: { id: petId },
    });

    return NextResponse.json({ success: true, pet });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function PUT(req, res) {
  try {
    const { petId } = res.params;
    const { name, pokedexId, spriteUrl, collectedNumber } = await req.json();

    const user = await fetchUser();
    const _pet = await prisma.pet.findFirst({
      where: {
        id: petId,
      },
    });

    if (_pet.userId !== user.id) {
      return NextResponse.json({
        success: false,
        message: "You must be the owner of this pet to Update!",
      });
    }

    const updatedPet = await prisma.pet.update({
      where: { id: petId },
      data: { name, pokedexId, spriteUrl },
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

    return NextResponse.json({
      success: true,
      updatedPet,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
