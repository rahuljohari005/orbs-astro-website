'use server';

import { cookies } from 'next/headers';

interface BirthDetails {
    name: string;
    date: string;
    time: string;
    tz: string;
    place: string;
}

export async function generateKundali(details: BirthDetails) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/proxy/kundali`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        });

        if (!response.ok) {
            throw new Error('Failed to generate kundali');
        }

        const data = await response.json();

        // Set session cookie
        if (data.sessionId) {
            cookies().set('astro_session', data.sessionId, {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                path: '/',
            });
        }

        return {
            charts: data.charts,
            planets: data.planets,
            dashas: data.dashas,
        };
    } catch (error) {
        throw new Error('Failed to generate kundali');
    }
}
