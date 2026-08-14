import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await request.json();
  } catch {
    // ignore malformed body — still no-op
  }

  return NextResponse.json({ ok: true });
}
