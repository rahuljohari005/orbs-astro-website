import "./globals.css";
import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";

export const metadata: Metadata = {
    title: "Orbs Astro – Personalized Scientific Astrology",
    description: "Explore your cosmic blueprint with AI + Scientific astrology insights. Get personalized readings, birth charts, and guidance from our advanced astrology system.",
    keywords: "astrology, vedic astrology, birth chart, kundali, horoscope, AI astrology, scientific astrology",
    authors: [{ name: "Orbs Astro Team" }],
    creator: "Orbs Astro",
    publisher: "Orbs Astro",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://orbsastro.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Orbs Astro – Personalized Scientific Astrology",
        description: "Explore your cosmic blueprint with AI + Scientific astrology insights.",
        url: "https://orbsastro.com",
        siteName: "Orbs Astro",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Orbs Astro - Scientific Astrology",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Orbs Astro – Personalized Scientific Astrology",
        description: "Explore your cosmic blueprint with AI + Scientific astrology insights.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-black text-white font-serif overflow-x-hidden">
                <Navigation />
                {children}
            </body>
        </html>
    );
} 