"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, ArrowDown, Play, Calendar } from "lucide-react";
import LagnaCalculatorModal from "@/components/ui/LagnaCalculatorModal";

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6;
            videoRef.current.addEventListener('loadeddata', () => setIsVideoLoaded(true));
        }
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    const floatingElements = [
        { icon: Star, delay: 0, duration: 6, x: 20, y: -30 },
        { icon: Sparkles, delay: 2, duration: 8, x: -25, y: 20 },
        { icon: Star, delay: 4, duration: 7, x: 30, y: 25 },
        { icon: Sparkles, delay: 1, duration: 9, x: -20, y: -25 },
    ];

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <motion.video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/SOLAR SYSTEM.mp4"
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: isVideoLoaded ? 1 : 0, scale: 1 }}
                transition={{ duration: 2 }}
            />

            {/* Enhanced Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

            {/* Floating Elements */}
            {floatingElements.map((element, index) => {
                const Icon = element.icon;
                return (
                    <motion.div
                        key={index}
                        className="absolute text-gold/60"
                        style={{
                            left: `${50 + element.x}%`,
                            top: `${50 + element.y}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -20, 0],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            delay: element.delay,
                            duration: element.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Icon className="w-6 h-6" />
                    </motion.div>
                );
            })}

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                {/* Main Title with enhanced animations */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-6xl md:text-9xl font-bold text-gold drop-shadow-2xl mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                    >
                        Orbs Astro
                    </motion.h1>
                    <motion.div
                        className="text-8xl md:text-9xl mb-4"
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                    >
                        ∞
                    </motion.div>
                    <motion.p
                        className="text-xl md:text-3xl text-offwhite drop-shadow-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 1 }}
                    >
                        Unlock Your Celestial Destiny with AI-Powered Scientific Astrology
                    </motion.p>
                </motion.div>

                {/* Enhanced Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 mt-16"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <motion.button
                        onClick={() => scrollToSection("consultation")}
                        className="group relative px-10 py-5 bg-gradient-to-r from-gold to-yellow-400 text-black rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold/50 overflow-hidden"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center space-x-2">
                            <Play className="w-5 h-5" />
                            <span>Get My Reading</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <LagnaCalculatorModal />
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center text-gold/70 hover:text-gold cursor-pointer"
                        onClick={() => scrollToSection("services")}
                    >
                        <span className="text-sm mb-2">Explore More</span>
                        <ArrowDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3.5, duration: 1 }}
                >
                    <div className="space-y-6">
                        {[
                            { number: "500+", label: "AI Readings" },
                            { number: "100+", label: "Happy Clients" },
                            { number: "12", label: "Zodiac Signs" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-right"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 4 + index * 0.2, duration: 0.8 }}
                            >
                                <div className="text-2xl font-bold text-gold">{stat.number}</div>
                                <div className="text-sm text-offwhite/70">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}