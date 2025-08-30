"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StoryScroll() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.6]);

    return (
        <section ref={ref} className="relative py-24 md:py-36 bg-offwhite">
            <motion.div style={{ y, opacity }} className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-ink">
                    Your <span className="text-gold">Scientific</span> Journey
                </h2>
                <p className="mt-4 text-ink/80">
                    Scientific astrology illuminates your karmic path through planetary cycles (dashas). As you scroll,
                    let the cosmos guide you from awareness to action.
                </p>
            </motion.div>
        </section>
    );
} 