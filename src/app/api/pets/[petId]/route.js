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
