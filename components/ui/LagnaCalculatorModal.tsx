"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LagnaCalculatorModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [lagna, setLagna] = useState<string | null>(null);

    const calculateLagna = () => {
        setLagna("Leo (Simha Lagna) – The royal soul, confident & creative.");
    };

    const scrollToConsultation = () => {
        setIsOpen(false);
        const element = document.getElementById("consultation");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-transparent border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition"
            >
                Find My Lagna
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50">
                        <motion.div
                            className="bg-white/10 backdrop-blur-md p-8 rounded-xl w-96 relative border border-gold"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-gold hover:text-gold/80 text-xl font-bold"
                            >
                                ×
                            </button>
                            <h2 className="text-2xl text-gold mb-4 font-bold">Find Your Lagna</h2>
                            {!lagna ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <input
                                        type="date"
                                        className="w-full p-3 mb-3 bg-black/50 text-white rounded border border-gold/30 focus:border-gold"
                                    />
                                    <input
                                        type="time"
                                        className="w-full p-3 mb-3 bg-black/50 text-white rounded border border-gold/30 focus:border-gold"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Place of Birth"
                                        className="w-full p-3 mb-4 bg-black/50 text-white rounded border border-gold/30 focus:border-gold placeholder-gray-400"
                                    />
                                    <button
                                        onClick={calculateLagna}
                                        className="w-full bg-gold text-black p-3 rounded hover:opacity-80 transition font-semibold"
                                    >
                                        Reveal My Lagna
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-lg text-gold mb-4 font-semibold">{lagna}</p>
                                    <button
                                        onClick={scrollToConsultation}
                                        className="bg-gold text-black px-6 py-3 rounded-lg hover:opacity-80 transition font-semibold"
                                    >
                                        Book a Consultation
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}