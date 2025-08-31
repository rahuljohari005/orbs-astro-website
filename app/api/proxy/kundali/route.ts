import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const response = await fetch(`${process.env.AI_BASE_URL}/kundali/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-service-key': process.env.AI_SERVICE_KEY || '',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
            cache: 'no-store'
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
