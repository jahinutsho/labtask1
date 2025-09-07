import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  await new Promise(resolve => setTimeout(resolve, 500));
  return NextResponse.json(
    { success: true, message: 'Registration successful' },
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}