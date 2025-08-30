"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaShareAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function HouseModal({ house, onClose }: { house: any; onClose: () => void }) {
    const tabs = ["Overview", "Attributes", "Planets & Signs", "Insights"];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const router = useRouter();

    const shareHouse = () => {
        const shareUrl = `${window.location.origin}/houses/${house.slug}`;
        navigator.clipboard.writeText(shareUrl);
        alert("Link copied! Share it with your friends.");
    };

    const renderContent = () => {
        switch (activeTab) {
            case "Overview":
                return <p className="text-offwhite text-lg leading-relaxed">{house.overview}</p>;
            case "Attributes":
                return (
                    <ul className="list-disc list-inside text-offwhite space-y-2">
                        {house.attributes.map((attr: string, idx: number) => (
                            <li key={idx} className="text-lg leading-relaxed">{attr}</li>
                        ))}
                    </ul>
                );
            case "Planets & Signs":
                return <p className="text-offwhite text-lg leading-relaxed">{house.planets}</p>;
            case "Insights":
                return <p className="text-offwhite text-lg leading-relaxed italic">{house.insights}</p>;
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-black/50 border border-gold rounded-xl p-8 max-w-3xl w-full text-left overflow-y-auto max-h-[80vh]"
            >
                {/* Title */}
                <h2 className="text-3xl font-bold text-gold mb-4">{house.title}</h2>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 md:px-4 py-2 rounded-lg transition text-sm md:text-base hover:scale-105 ${activeTab === tab
                                ? "bg-gold text-black shadow-lg"
                                : "bg-black/50 text-gold border border-gold/30 hover:border-gold/60 hover:bg-gold/10"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[200px] p-4 rounded-lg bg-black/20 border border-gold/20"
                >
                    {renderContent()}
                </motion.div>

                {/* Buttons */}
                <div className="mt-8 flex justify-between">
                    <button
                        onClick={() => {
                            router.push(`/houses/${house.slug}`);
                            onClose(); // Close modal when navigating
                        }}
                        className="px-6 py-3 bg-gold text-black rounded-lg hover:scale-105 transition shadow-lg hover:shadow-gold/50"
                    >
                        Read Full Article
                    </button>
                    <button
                        onClick={shareHouse}
                        className="flex items-center gap-2 px-6 py-3 bg-black/50 border border-gold text-gold rounded-lg hover:scale-105 transition"
                    >
                        <FaShareAlt /> Share
                    </button>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="mt-6 px-6 py-3 bg-gold text-black rounded-lg hover:scale-105 transition w-full"
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
}