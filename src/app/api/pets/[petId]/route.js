import { NextResponse } from "next/server.js";

export async function GET(req) {
  return NextResponse.json({
    success: true,
    message: "Pet Router",
  });
}
