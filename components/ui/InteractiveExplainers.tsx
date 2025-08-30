"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const explainers = [
    {
        id: "shani-sade-sati",
        title: "Shani Sade Sati",
        subtitle: "The 7.5 Year Saturn Transit",
        icon: "🪐",
        description: "Understanding Saturn's transformative journey through your life",
        content: {
            overview: "Sade Sati occurs when Saturn transits the 12th, 1st, and 2nd houses from your Moon sign, lasting approximately 7.5 years.",
            phases: [
                { name: "Rising Phase", description: "Saturn in 12th house - Preparation and challenges", duration: "2.5 years" },
                { name: "Peak Phase", description: "Saturn in 1st house - Maximum impact and transformation", duration: "2.5 years" },
                { name: "Setting Phase", description: "Saturn in 2nd house - Stabilization and rewards", duration: "2.5 years" }
            ],
            effects: "Career changes, health challenges, spiritual growth, relationship transformations"
        }
    },
    {
        id: "rahu-mahadasha",
        title: "Rahu Mahadasha",
        subtitle: "The 18-Year North Node Period",
        icon: "🐉",
        description: "Navigating the intense Rahu major period",
        content: {
            overview: "Rahu Mahadasha is an 18-year period that brings material success, foreign connections, and karmic lessons.",
            phases: [
                { name: "Early Phase", description: "Initial confusion and new opportunities", duration: "6 years" },
                { name: "Middle Phase", description: "Peak material success and achievements", duration: "6 years" },
                { name: "Final Phase", description: "Spiritual awakening and karmic completion", duration: "6 years" }
            ],
            effects: "Foreign travel, technology success, unconventional paths, sudden changes"
        }
    },
    {
        id: "lunar-eclipse",
        title: "Lunar Eclipse",
        subtitle: "Full Moon Transformation",
        icon: "🌕",
        description: "Harnessing the power of lunar eclipses",
        content: {
            overview: "Lunar eclipses occur during Full Moons when Earth's shadow falls on the Moon, amplifying emotional and spiritual transformation.",
            phases: [
                { name: "Pre-Eclipse", description: "Building energy and preparation", duration: "2 weeks before" },
                { name: "Eclipse Event", description: "Peak transformation and revelation", duration: "During eclipse" },
                { name: "Post-Eclipse", description: "Integration and manifestation", duration: "6 months after" }
            ],
            effects: "Emotional releases, relationship changes, intuitive insights, karmic completions"
        }
    }
];

export default function InteractiveExplainers() {
    const [activeExplainer, setActiveExplainer] = useState<string | null>(null);

    return (
        <section className="py-24 bg-gradient-to-b from-offwhite to-ink/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-10 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl float" />
            <div className="absolute bottom-10 right-20 w-48 h-48 bg-olive/10 rounded-full blur-2xl drift" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-ink mb-6">
                        Interactive <span className="text-gold">Cosmic</span> Explainers
                    </h2>
                    <p className="text-ink/70 text-lg max-w-3xl mx-auto">
                        Dive deep into the most significant astrological phenomena that shape your destiny
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {explainers.map((explainer, index) => (
                        <motion.div
                            key={explainer.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div
                                className={`p-8 rounded-3xl border-2 backdrop-blur-sm cursor-pointer transition-all duration-500 ${activeExplainer === explainer.id
                                    ? 'border-gold/50 bg-white/80 shadow-glowGold'
                                    : 'border-gold/20 bg-white/50 hover:border-gold/30'
                                    }`}
                                onClick={() => setActiveExplainer(activeExplainer === explainer.id ? null : explainer.id)}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-6">
                                        <div className="text-5xl float" style={{ animationDelay: `${index * 0.5}s` }}>
                                            {explainer.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-2">
                                                {explainer.title}
                                            </h3>
                                            <p className="text-olive font-medium mb-3">
                                                {explainer.subtitle}
                                            </p>
                                            <p className="text-ink/70 text-lg">
                                                {explainer.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`text-2xl transition-transform duration-300 ${activeExplainer === explainer.id ? 'rotate-180' : ''
                                        }`}>
                                        ⌄
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: activeExplainer === explainer.id ? 'auto' : 0,
                                        opacity: activeExplainer === explainer.id ? 1 : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-8 border-t border-gold/20 mt-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-xl font-semibold text-ink mb-4">Overview</h4>
                                                <p className="text-ink/70 leading-relaxed mb-6">
                                                    {explainer.content.overview}
                                                </p>

                                                <h4 className="text-xl font-semibold text-ink mb-4">Key Effects</h4>
                                                <p className="text-ink/70 leading-relaxed">
                                                    {explainer.content.effects}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-xl font-semibold text-ink mb-4">Phases</h4>
                                                <div className="space-y-4">
                                                    {explainer.content.phases.map((phase, phaseIndex) => (
                                                        <div key={phaseIndex} className="p-4 bg-gold/10 rounded-xl">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h5 className="font-semibold text-ink">{phase.name}</h5>
                                                                <span className="text-sm text-gold font-medium">{phase.duration}</span>
                                                            </div>
                                                            <p className="text-ink/70 text-sm">{phase.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Decorative elements */}
                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gold/30 rounded-full blur-sm drift" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating decorative elements */}
                <div className="absolute left-10 top-1/2 w-20 h-20 bg-olive/20 rounded-full blur-xl float" />
                <div className="absolute right-16 bottom-1/4 w-16 h-16 bg-gold/20 rounded-full blur-lg drift" />
            </div>
        </section>
    );
}