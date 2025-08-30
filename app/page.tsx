"use client";
import { useState, useEffect } from "react";
import CosmicIntro from "@/components/layout/CosmicIntro";
import HeroVideo from "@/components/sections/HeroVideo";
import StarfieldWrapper from "@/components/layout/StarfieldWrapper";
import About from "@/components/sections/About";
import AstrologySystems from "@/components/sections/AstrologySystems";
import PlanetaryCarousel from "@/components/sections/PlanetaryCarousel";
import PlanetsCarousel from "@/components/sections/PlanetsCarousel";
import HousesGrid from "@/components/sections/HousesGrid";
import Testimonials from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";
import ChatbotAndConsultation from "@/components/sections/ChatbotAndConsultation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
    const [showIntro, setShowIntro] = useState(true);

    // Ensure page starts at top
    useEffect(() => {
        if (!showIntro) {
            // Force scroll to top and clear any hash
            window.scrollTo(0, 0);
            if (window.location.hash) {
                window.history.replaceState(null, '', window.location.pathname);
            }
        }
    }, [showIntro]);

    return (
        <main className="overflow-x-hidden">
            {showIntro && <CosmicIntro onFinish={() => setShowIntro(false)} />}
            {!showIntro && (
                <>
                    <HeroVideo />
                    <About />
                    <StarfieldWrapper>
                        <AstrologySystems />
                        <PlanetaryCarousel />
                        <PlanetsCarousel />
                        <HousesGrid />
                        <Testimonials />
                        <Services />
                        <ChatbotAndConsultation />
                    </StarfieldWrapper>
                    <Contact />
                    <Footer />
                </>
            )}
        </main>
    );
} 