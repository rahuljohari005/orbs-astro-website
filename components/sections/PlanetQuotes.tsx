"use client";
import { motion } from "framer-motion";

const PLANET_QUOTES = [
    { p: "Sun (Surya)", q: "Steady your light; destiny follows radiance." },
    { p: "Moon (Chandra)", q: "What you water within becomes your world without." },
    { p: "Mars (Mangala)", q: "Courage is the chisel that shapes fate." },
    { p: "Mercury (Budha)", q: "Speak with clarity; time will echo your words." },
    { p: "Jupiter (Guru)", q: "Expand the good, and grace expands with you." },
    { p: "Venus (Shukra)", q: "Beauty is the discipline of the heart." },
    { p: "Saturn (Shani)", q: "What you master daily becomes your miracle." },
    { p: "Rahu", q: "Desire is a compass—point it wisely." },
    { p: "Ketu", q: "Let go, and the hidden path appears." },
];

export default function PlanetQuotes() {
    return (
        <section className="bg-offwhite py-20">
            <div className="mx-auto max-w-5xl px-6">
                <h3 className="text-2xl md:text-4xl font-semibold text-ink text-center">Whispers of the Grahas</h3>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PLANET_QUOTES.map((it, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="rounded-xl border border-olive/30 bg-white/80 p-4 hover:shadow-glowGold"
                        >
                            <div className="text-ink font-semibold">{it.p}</div>
                            <div className="mt-2 text-ink/80 italic">"{it.q}"</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}