"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { houses } from "@/data/housesData";
import HouseModal from "@/components/ui/HouseModal";

export default function HousesGrid() {
    const [selectedHouse, setSelectedHouse] = useState<any>(null);

    return (
        <section className="relative py-32 text-center">
            <h2 className="text-5xl font-bold text-gold mb-12">The 12 Scientific Astrology Houses</h2>
            <p className="text-xl text-offwhite mb-16 max-w-3xl mx-auto">
                Explore the cosmic blueprint of your life through the 12 houses. Each house governs specific life areas and reveals deep insights about your destiny.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {houses.map((house, idx) => (
                    <motion.div
                        key={house.number}
                        className="p-6 rounded-xl border border-gold bg-black/30 backdrop-blur-lg shadow-lg hover:scale-105 transition cursor-pointer"
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,215,0,0.6)" }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedHouse(house)}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center border border-gold">
                            <span className="text-2xl font-bold text-gold">{house.number}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gold mb-2">
                            {house.title.split("–")[0]}
                        </h3>
                        <p className="text-sm text-offwhite">
                            {house.overview.split(".")[0]}.
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedHouse && (
                    <HouseModal
                        house={selectedHouse}
                        onClose={() => setSelectedHouse(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}