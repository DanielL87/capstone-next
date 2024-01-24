import { fetchUser } from '@/app/lib/fetchUser.js';
import { prisma } from '@/app/lib/prisma.js';
import { NextResponse } from 'next/server.js';

export async function POST(req, res) {
  try {
    
      const { name } = await req.json();

      const user = await fetchUser();

      const task = await prisma.task.create({
        data: {
           name,
          userId: user.id,
          petId: pet.id,
          category: category,
        },
      });
    
    return NextResponse.json({ success: true, subreddit});
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
