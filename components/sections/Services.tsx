"use client";
import { motion } from "framer-motion";
import { Star, Sparkles, Gem, Users, Brain, Zap } from "lucide-react";
import LagnaChartGenerator from "@/components/forms/LagnaChartGenerator";

const services = [
    { 
        title: "Premium Human Consultation", 
        desc: "One-on-one session with our expert astrologers for deep insights and personalized guidance.",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
        features: ["Personalized Reading", "Follow-up Support", "Priority Booking"]
    },
    { 
        title: "Gemstone Recommendation", 
        desc: "Personalized gemstone suggestions to balance your planetary influences and enhance your energy.",
        icon: Gem,
        color: "from-purple-500 to-pink-500",
        features: ["Custom Selection", "Quality Assurance", "Wearing Guide"]
    },
    { 
        title: "Numerology Correction", 
        desc: "Name and number analysis to align your vibrations with your destiny and life purpose.",
        icon: Brain,
        color: "from-green-500 to-emerald-500",
        features: ["Name Analysis", "Number Correction", "Life Path Guidance"]
    },
];

const features = [
    { icon: Star, text: "AI-Powered Insights", color: "text-gold" },
    { icon: Sparkles, text: "Scientific Approach", color: "text-blue-400" },
    { icon: Zap, text: "Instant Results", color: "text-yellow-400" },
    { icon: Brain, text: "Expert Validation", color: "text-purple-400" },
];

export default function Services() {
    return (
        <section id="services" className="relative py-32 text-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
            
            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/20 to-yellow-400/20 px-6 py-3 rounded-full border border-gold/30 mb-6"
                    >
                        <Star className="w-5 h-5 text-gold" />
                        <span className="text-gold font-medium">Our Services</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-7xl font-bold text-gold mb-6">
                        Discover Your
                        <span className="block bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
                            Cosmic Path
                        </span>
                    </h2>
                    
                    <p className="text-xl text-offwhite/80 max-w-3xl mx-auto">
                        Experience the perfect blend of ancient wisdom and modern technology. 
                        Our services are designed to guide you through life's cosmic journey.
                    </p>
                </motion.div>

                {/* Lagna Chart Generator - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-gold/20 p-8 shadow-2xl">
                        <h3 className="text-3xl font-bold text-gold mb-6">Free Lagna Chart Generator</h3>
                        <LagnaChartGenerator />
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="group relative p-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Service Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-gold mb-4">{service.title}</h3>
                                <p className="text-offwhite/80 mb-6 leading-relaxed">{service.desc}</p>
                                
                                {/* Features List */}
                                <ul className="space-y-2 text-left">
                                    {service.features.map((feature, featureIdx) => (
                                        <li key={featureIdx} className="flex items-center space-x-2 text-sm text-offwhite/70">
                                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-gold/20 p-12"
                >
                    <h3 className="text-3xl font-bold text-gold mb-12">Why Choose Orbs Astro?</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className="text-center group"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className={`w-8 h-8 ${feature.color}`} />
                                    </div>
                                    <p className="text-offwhite font-medium">{feature.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}