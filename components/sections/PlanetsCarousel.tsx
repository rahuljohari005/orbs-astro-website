"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const planets = [
    { name: "Sun (Surya)", video: "/SUN.mp4", desc: "Vitality, soul, leadership.", quote: "Steady your light; destiny follows radiance." },
    { name: "Moon (Chandra)", video: "/MOON.mp4", desc: "Mind, emotions, intuition.", quote: "What you water within becomes your world without." },
    { name: "Mercury (Budha)", video: "/MERCURY.mp4", desc: "Speech, intellect, trade.", quote: "Speak with clarity; time will echo your words." },
    { name: "Venus (Shukra)", video: "/VENUS.mp4", desc: "Love, harmony, arts.", quote: "Beauty is the discipline of the heart." },
    { name: "Mars (Mangala)", video: "/mars.mp4", desc: "Courage, drive, action.", quote: "Courage is the chisel that shapes fate." },
    { name: "Jupiter (Guru)", video: "/JUPITER.mp4", desc: "Wisdom, growth, grace.", quote: "Expand the good, and grace expands with you." },
    { name: "Saturn (Shani)", video: "/SATURN.mp4", desc: "Discipline, karma, time.", quote: "What you master daily becomes your miracle." },
    { name: "Rahu", video: "/RAHU.mp4", desc: "Ambition, innovation, obsession.", quote: "Desire is a compass—point it wisely." },
    { name: "Ketu", video: "/KETU.mp4", desc: "Detachment, moksha, mysticism.", quote: "Let go, and the hidden path appears." },
];

export default function PlanetsCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCurrent((c) => (c + 1) % planets.length), 5000);
        return () => clearInterval(interval);
    }, []);

    const next = () => setCurrent((current + 1) % planets.length);
    const prev = () => setCurrent((current - 1 + planets.length) % planets.length);

    return (
        <section className="relative py-32 text-center">
            <h2 className="text-5xl font-bold text-gold mb-12">Celestial Beings</h2>
            <div className="max-w-5xl mx-auto">
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.video
                            key={planets[current].name}
                            className="w-full max-h-[500px] object-contain mx-auto rounded-lg shadow-lg border border-gold/40"
                            src={planets[current].video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                            }}
                        />
                    </AnimatePresence>
                </div>
                <motion.h3
                    className="mt-6 text-4xl font-bold text-gold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {planets[current].name}
                </motion.h3>
                <p className="mt-2 text-lg text-offwhite">{planets[current].desc}</p>
                <blockquote className="mt-4 italic text-olive">{planets[current].quote}</blockquote>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <button onClick={prev} className="px-5 py-2 bg-gold text-black rounded hover:scale-105 transition">Prev</button>
                    <button onClick={next} className="px-5 py-2 bg-gold text-black rounded hover:scale-105 transition">Next</button>
                </div>
            </div>
        </section>
    );
}