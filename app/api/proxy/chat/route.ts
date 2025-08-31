import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const sessionId = body.sessionId || request.cookies.get('astro_session')?.value;

        if (!sessionId) {
            return NextResponse.json(
                { error: 'No session found' },
                { status: 400 }
            );
        }

        const response = await fetch(`${process.env.AI_BASE_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-service-key': process.env.AI_SERVICE_KEY || '',
            },
            body: JSON.stringify({ ...body, sessionId }),
        });

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
