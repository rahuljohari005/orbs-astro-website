"use client";
import { useEffect, useRef } from "react";

const planets = [
    { name: "Sun", symbol: "☉", color: "text-yellow-400" },
    { name: "Moon", symbol: "☽", color: "text-blue-400" },
    { name: "Mars", symbol: "♂", color: "text-red-500" },
    { name: "Jupiter", symbol: "♃", color: "text-orange-400" },
    { name: "Saturn", symbol: "♄", color: "text-gray-400" },
    { name: "Venus", symbol: "♀", color: "text-pink-400" },
    { name: "Mercury", symbol: "☿", color: "text-green-400" },
    { name: "Rahu", symbol: "☊", color: "text-purple-400" },
    { name: "Ketu", symbol: "☋", color: "text-indigo-400" },
];

export default function PlanetaryCarousel() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroll = () => {
            if (ref.current) {
                ref.current.scrollLeft += 0.5;
                if (ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
                    ref.current.scrollLeft = 0;
                }
            }
        };
        const interval = setInterval(scroll, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden w-full py-8 bg-gradient-to-b from-black via-transparent to-black">
            <div ref={ref} className="flex gap-16 min-w-max">
                {[...planets, ...planets].map((planet, i) => (
                    <div key={i} className="relative flex-shrink-0 w-40 h-40 opacity-80 hover:opacity-100 transition">
                        <div className="w-40 h-40 rounded-full bg-black/50 border-2 border-gold/30 flex items-center justify-center hover:border-gold/60 transition-all duration-300">
                            <span className={`text-6xl ${planet.color} drop-shadow-lg`}>
                                {planet.symbol}
                            </span>
                        </div>
                        <p className="text-center text-gold mt-2 font-semibold">{planet.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}