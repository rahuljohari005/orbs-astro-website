import { Metadata } from 'next'
import { zodiacData } from '@/data/zodiacData'

export async function generateMetadata({ params }: { params: { sign: string } }): Promise<Metadata> {
    const signData = zodiacData[params.sign as keyof typeof zodiacData]

    if (!signData) {
        return {
            title: 'Zodiac Sign Not Found',
            description: 'The requested zodiac sign could not be found.'
        }
    }

    return {
        title: `${signData.name} Horoscope & Astrology | Cosmic Astrology`,
        description: `Discover your ${signData.name} horoscope (${signData.dates}). ${signData.description} Learn about ${signData.name} personality traits, compatibility, career guidance, and love life insights.`,
        keywords: [
            signData.name.toLowerCase(),
            'horoscope',
            'astrology',
            'zodiac',
            signData.element.toLowerCase(),
            'compatibility',
            'personality traits',
            'birth chart'
        ],
        openGraph: {
            title: `${signData.name} Horoscope & Astrology`,
            description: `${signData.description} Explore ${signData.name} traits, compatibility, and cosmic insights.`,
            type: 'article',
            images: [
                {
                    url: `/images/zodiac/${params.sign}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: `${signData.name} zodiac sign symbol and traits`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: `${signData.name} Horoscope & Astrology`,
            description: `${signData.description} Discover your cosmic blueprint.`,
            images: [`/images/zodiac/${params.sign}.jpg`]
        },
        alternates: {
            canonical: `/zodiac/${params.sign}`
        }
    }
}