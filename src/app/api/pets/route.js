import { fetchUser } from "@/app/lib/fetchUser.js";
import { prisma } from "@/app/lib/prisma.js";
import { NextResponse } from "next/server.js";

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
    const { nickname, type, spriteUrl, name, pokedexId } = await req.json();
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
      },
    });

    return NextResponse.json({ success: true, pet });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
