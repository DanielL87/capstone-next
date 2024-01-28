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
    const { nickname, type, spriteUrl, name, pokedexId, isShiny, isRare } =
      await req.json();
    const user = await fetchUser();

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Please login to create a pet!",
      });
    }

    // const existingId = await prisma.user.findFirst({
    //   where: {
    //     id: user.id,
    //     collectedPets: {
    //       some: {
    //         equals: pokedexId,
    //       },
    //     },
    //   },
    // });

    // console.log(existingId);

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

    // if (!existingId) {
    // _user = await prisma.user.update({
    //   where: { id: user.id },
    //   data: {
    //     collectedPets: {
    //       push: pokedexId,
    //     },
    //   },
    // });
    // }

    return NextResponse.json({ success: true, pet });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
