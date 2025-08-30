"use client";
import { motion } from "framer-motion";

const systems = [
    {
        name: "KP Astrology",
        description: "Krishnamurti Paddhati - The most precise predictive system using stellar positions and sub-lord theory.",
        icon: "🌟",
        color: "border-gold/30 bg-gold/5"
    },
    {
        name: "Hora Shastra",
        description: "Ancient Scientific Astrology system revealing timing of events through planetary periods and transits.",
        icon: "⏰",
        color: "border-olive/30 bg-olive/5"
    },
    {
        name: "Nadi Astrology",
        description: "Palm leaf predictions written by ancient sages, revealing your soul's destiny with incredible accuracy.",
        icon: "🍃",
        color: "border-gold/30 bg-gold/5"
    }
];

export default function AstrologyIntro() {
    return (
        <section className="py-24 bg-gradient-to-b from-olive/5 to-offwhite relative overflow-hidden">
            {/* Background floating orbs */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl float" />
            <div className="absolute bottom-20 right-10 w-60 h-60 bg-olive/10 rounded-full blur-3xl drift" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-ink mb-6">
                        Ancient <span className="text-olive">Systems</span>, Modern <span className="text-gold">Precision</span>
                    </h2>
                    <p className="text-ink/70 text-lg max-w-3xl mx-auto leading-relaxed">
                        We combine the wisdom of three powerful astrological systems to provide you with
                        the most accurate and comprehensive guidance for your life's journey.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {systems.map((system, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative p-8 rounded-2xl border-2 ${system.color} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4 float" style={{ animationDelay: `${index * 0.5}s` }}>
                                {system.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-semibold text-ink mb-4">
                                {system.name}
                            </h3>
                            <p className="text-ink/70 leading-relaxed">
                                {system.description}
                            </p>

                            {/* Decorative corner orb */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold/40 rounded-full blur-sm drift" />
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-ink/60 text-lg">
                        Experience the power of combined ancient wisdom
                    </p>
                </motion.div>
            </div>
        </section>
    );
}