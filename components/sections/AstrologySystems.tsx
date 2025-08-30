"use client";
import { motion } from "framer-motion";

const systems = [
    {
        title: "KP Astrology",
        desc: "Quick & predictive timing for events. Unlock Krishnamurti Paddhati insights with precision.",
    },
    {
        title: "Hora Astrology",
        desc: "Discover the planetary hours (Hora) to align your actions with cosmic energy for success.",
    },
    {
        title: "Nadi Astrology",
        desc: "Ancient palm-leaf wisdom decoded through AI. Dive deep into karmic paths & destiny readings.",
    },
];

export default function AstrologySystems() {
    return (
        <section className="relative py-32 text-center">
            <h2 className="text-5xl font-bold text-gold mb-12">Ancient Wisdom Meets AI</h2>
            <div className="flex flex-col items-center gap-16 max-w-4xl mx-auto">
                {systems.map((sys, idx) => (
                    <motion.div
                        key={idx}
                        className="p-10 rounded-xl border border-gold bg-black/30 backdrop-blur-lg shadow-lg"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-gold mb-4">{sys.title}</h3>
                        <p className="text-lg text-offwhite">{sys.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}