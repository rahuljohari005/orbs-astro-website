"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Users, TrendingUp, Award } from "lucide-react";

const counters = [
    { label: "AI readings delivered", value: 500, icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { label: "Satisfied seekers", value: 100, icon: Users, color: "from-green-500 to-emerald-500" },
    { label: "Consultations booked", value: 80, icon: Award, color: "from-purple-500 to-pink-500" },
];

const testimonials = [
    { 
        name: "Amit, India", 
        text: "Orbs Astro helped me understand my Saturn period like never before. The AI insights were incredibly accurate and the human consultation provided the perfect balance. Highly recommended!", 
        rating: 5,
        avatar: "A",
        location: "Mumbai, India"
    },
    { 
        name: "Sophia, USA", 
        text: "The AI reading was so accurate, I felt like it was written just for me. The gemstone recommendations have transformed my energy levels. This is truly next-level astrology!", 
        rating: 5,
        avatar: "S",
        location: "New York, USA"
    },
    { 
        name: "Rajesh, UK", 
        text: "Great blend of Scientific Astrology wisdom and modern AI insights. The numerology correction helped me align with my true purpose. Truly eye-opening experience.", 
        rating: 5,
        avatar: "R",
        location: "London, UK"
    },
    { 
        name: "Leena, Canada", 
        text: "Consultation was smooth and personalized. The astrologer was incredibly knowledgeable and the follow-up support exceeded my expectations. Will book again for my family!", 
        rating: 5,
        avatar: "L",
        location: "Toronto, Canada"
    },
    { 
        name: "Kiran, Australia", 
        text: "Loved the detailed report and the chatbot guidance. The platform is intuitive and the insights are life-changing. Amazing platform that bridges ancient wisdom with modern technology!", 
        rating: 5,
        avatar: "K",
        location: "Sydney, Australia"
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating: number) => {
        return Array.from({ length: rating }, (_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ));
    };

    return (
        <section className="relative py-32 text-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-24 h-24 bg-gold/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
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
                        <Quote className="w-5 h-5 text-gold" />
                        <span className="text-gold font-medium">Testimonials</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-7xl font-bold text-gold mb-6">
                        What Our
                        <span className="block bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
                            Seekers Say
                        </span>
                    </h2>
                    
                    <p className="text-xl text-offwhite/80 max-w-3xl mx-auto">
                        Join thousands of satisfied clients who have discovered their cosmic path 
                        through our AI-powered astrology platform.
                    </p>
                </motion.div>

                {/* Enhanced Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {counters.map((counter, idx) => {
                        const Icon = counter.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="group relative p-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${counter.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                
                                <motion.div
                                    className="text-5xl font-bold text-gold mb-2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.5, duration: 0.5, type: "spring" }}
                                    viewport={{ once: true }}
                                >
                                    {counter.value}+
                                </motion.div>
                                
                                <p className="text-offwhite/80 font-medium">{counter.label}</p>
                                
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Enhanced Testimonials Carousel */}
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="relative p-12 rounded-3xl border border-gold/20 bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-xl shadow-2xl"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.9 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 left-8 text-gold/20">
                                <Quote className="w-16 h-16" />
                            </div>
                            
                            {/* Rating Stars */}
                            <div className="flex justify-center mb-6">
                                {renderStars(testimonials[current].rating)}
                            </div>
                            
                            {/* Testimonial Text */}
                            <blockquote className="text-xl md:text-2xl italic text-offwhite leading-relaxed mb-8">
                                "{testimonials[current].text}"
                            </blockquote>
                            
                            {/* Author Info */}
                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                                    {testimonials[current].avatar}
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-gold text-lg">
                                        {testimonials[current].name}
                                    </div>
                                    <div className="text-offwhite/70 text-sm">
                                        {testimonials[current].location}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Carousel Indicators */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {testimonials.map((_, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    idx === current 
                                        ? 'bg-gold scale-125' 
                                        : 'bg-gold/30 hover:bg-gold/60'
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-offwhite/60 mb-6">Trusted by seekers worldwide</p>
                    <div className="flex justify-center items-center space-x-8 text-gold/40">
                        <div className="text-2xl font-bold">🔮</div>
                        <div className="text-2xl font-bold">⭐</div>
                        <div className="text-2xl font-bold">✨</div>
                        <div className="text-2xl font-bold">🌟</div>
                        <div className="text-2xl font-bold">💫</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}