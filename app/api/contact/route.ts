import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
        }
        // Save contact form submission to database
        await prisma.contact.create({ data: { name, email, message } })

        // Contact form submitted successfully (email functionality removed)
        console.log(`New contact form submission from ${name} (${email}): ${message}`)

        return NextResponse.json({
            success: true,
            message: 'Contact form submitted successfully!'
        })
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}