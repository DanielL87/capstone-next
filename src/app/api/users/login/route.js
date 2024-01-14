import { prisma } from '@/app/lib/prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server.js';

export async function POST(request, response) {
  try {
    const cookieStore = cookies();
    const { username, password } = await request.json();
    if (!username || !password) {
      return NextResponse.json({
        success: false,
        error: 'You must provide a username and password to login.',
      });
    }

    const user = await prisma.user.findFirst({ where: { username } });

    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'User not found. Please register',
      });
    }

    const isPasswordVerified = await bcrypt.compare(password, user.password);

    if (!isPasswordVerified) {
      return NextResponse.json({
        success: false,
        error: 'Username and/or password is not valid.',
      });
    }

    delete user.password;
    console.log(user);
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET
    );
    console.log(token);
    cookieStore.set('token', token);
    return NextResponse.json({ success: true, user, token });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
