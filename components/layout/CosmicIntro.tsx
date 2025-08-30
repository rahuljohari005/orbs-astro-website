"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CosmicIntro({ onFinish }: { onFinish: () => void }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onFinish();
        }, 2500); // 2.5s intro
        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden">
            {/* Gold particles */}
            <div className="absolute inset-0">
                <canvas id="particlesCanvas" className="w-full h-full" />
            </div>
            {/* Logo & tagline */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-8xl font-bold text-gold drop-shadow-xl relative z-10"
            >
                Orbs Astro ∞
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-6 text-xl md:text-2xl text-offwhite relative z-10"
            >
                AI meets Astrology: Your Celestial Guide
            </motion.p>
        </div>
    );
}