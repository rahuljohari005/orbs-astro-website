"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AstroChatbot from "@/components/forms/AstroChatbot";

export default function ChatbotAndConsultation() {
    const [formData, setFormData] = useState({ name: "", email: "", birth: "", message: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <section id="consultation" className="relative py-32 text-center">
            <h2 className="text-5xl font-bold text-gold mb-12">Consult & Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Chatbot Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gold/20"
                >
                    <h3 className="text-3xl font-bold text-gold mb-4">Saanvi - AI Astrologer</h3>
                    <p className="text-offwhite mb-4">Ask any question — from career advice to relationship insights. Our scientific astrology AI responds instantly!</p>
                    <AstroChatbot />
                </motion.div>

                {/* Consultation Form Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gold/20"
                >
                    <h3 className="text-3xl font-bold text-gold mb-4">Book a Consultation</h3>
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div>
                            <label className="block text-gold mb-2">Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-dark-700/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gold mb-2">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-dark-700/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gold mb-2">Birth Date</label>
                            <input
                                type="date"
                                value={formData.birth}
                                onChange={(e) => setFormData({ ...formData, birth: e.target.value })}
                                className="w-full bg-dark-700/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gold mb-2">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={3}
                                className="w-full bg-dark-700/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none"
                                placeholder="Tell us about your concerns..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-gold transition-all duration-300 transform hover:scale-105"
                        >
                            Book Consultation
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}