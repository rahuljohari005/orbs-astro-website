import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    // For now, just log to server. Later: Prisma + email.
    console.log("Booking submission:", body);
    return NextResponse.json({ ok: true });
}