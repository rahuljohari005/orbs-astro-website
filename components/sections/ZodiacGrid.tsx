"use client";
import { motion } from "framer-motion";

const zodiacs = [
    { name: "Aries", dates: "Mar 21 - Apr 19", img: "/images/zodiac/aries.png", note: "The pioneer, bold and fearless." },
    { name: "Taurus", dates: "Apr 20 - May 20", img: "/images/zodiac/taurus.png", note: "Grounded, stable, and indulgent." },
    { name: "Gemini", dates: "May 21 - Jun 20", img: "/images/zodiac/gemini.png", note: "The communicator, lively and curious." },
    { name: "Cancer", dates: "Jun 21 - Jul 22", img: "/images/zodiac/cancer.png", note: "The nurturer, deeply emotional." },
    { name: "Leo", dates: "Jul 23 - Aug 22", img: "/images/zodiac/leo.png", note: "The leader, radiant and creative." },
    { name: "Virgo", dates: "Aug 23 - Sep 22", img: "/images/zodiac/virgo.png", note: "The perfectionist, analytical and wise." },
    { name: "Libra", dates: "Sep 23 - Oct 22", img: "/images/zodiac/libra.png", note: "The diplomat, balanced and fair." },
    { name: "Scorpio", dates: "Oct 23 - Nov 21", img: "/images/zodiac/scorpio.png", note: "The mystic, intense and transformative." },
    { name: "Sagittarius", dates: "Nov 22 - Dec 21", img: "/images/zodiac/sagittarius.png", note: "The explorer, adventurous and wise." },
    { name: "Capricorn", dates: "Dec 22 - Jan 19", img: "/images/zodiac/capricorn.png", note: "The builder, disciplined and ambitious." },
    { name: "Aquarius", dates: "Jan 20 - Feb 18", img: "/images/zodiac/aquarius.png", note: "The visionary, innovative and free-spirited." },
    { name: "Pisces", dates: "Feb 19 - Mar 20", img: "/images/zodiac/pisces.png", note: "The dreamer, intuitive and empathetic." },
];

export default function ZodiacGrid() {
    return (
        <section id="zodiac" className="relative py-32 text-center">
            <h2 className="text-5xl font-bold text-gold mb-12">Zodiac Insights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {zodiacs.map((sign, idx) => (
                    <motion.div
                        key={idx}
                        className="p-6 rounded-xl border border-gold bg-black/30 backdrop-blur-lg shadow-lg hover:scale-105 transition cursor-pointer"
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,215,0,0.6)" }}
                    >
                        <img src={sign.img} alt={sign.name} className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gold">{sign.name}</h3>
                        <p className="text-sm text-offwhite">{sign.dates}</p>
                        <p className="mt-2 text-olive italic">{sign.note}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}