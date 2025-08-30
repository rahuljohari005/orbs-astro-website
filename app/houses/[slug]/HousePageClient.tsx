"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Star } from "lucide-react";

interface House {
    number: number;
    title: string;
    overview: string;
    attributes: string[];
    planets: string;
    insights: string;
    slug: string;
}

interface HousePageClientProps {
    house: House;
}

export default function HousePageClient({ house }: HousePageClientProps) {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = ["Overview", "Detailed Analysis", "Planetary Influences", "Life Areas", "Remedies"];

    const renderDetailedContent = () => {
        switch (activeTab) {
            case "Overview":
                return (
                    <div className="space-y-6">
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">House Overview</h3>
                            <p className="text-offwhite text-lg leading-relaxed">{house.overview}</p>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Key Characteristics</h3>
                            <ul className="list-disc list-inside text-offwhite space-y-2">
                                {house.attributes.map((attr: string, idx: number) => (
                                    <li key={idx} className="text-lg leading-relaxed">{attr}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            case "Detailed Analysis":
                return (
                    <div className="space-y-6">
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Deep Dive Analysis</h3>
                            <p className="text-offwhite text-lg leading-relaxed">
                                The {house.title} represents one of the most fundamental aspects of your life journey.
                                This house governs {house.attributes.join(", ").toLowerCase()}, making it crucial for understanding
                                your personal development and life experiences.
                            </p>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Psychological Impact</h3>
                            <p className="text-offwhite text-lg leading-relaxed">
                                This house influences your psychological makeup and how you approach the specific life areas it governs.
                                Understanding its placement and planetary influences can provide deep insights into your behavioral patterns
                                and life choices.
                            </p>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Karmic Significance</h3>
                            <p className="text-offwhite text-lg leading-relaxed">
                                {house.insights}
                            </p>
                        </div>
                    </div>
                );
            case "Planetary Influences":
                return (
                    <div className="space-y-6">
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Ruling Planets</h3>
                            <p className="text-offwhite text-lg leading-relaxed">{house.planets}</p>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Benefic & Malefic Influences</h3>
                            <p className="text-offwhite text-lg leading-relaxed">
                                Understanding which planets are beneficial or challenging in this house is crucial for accurate predictions.
                                Benefic planets here bring positive outcomes, while malefic planets may indicate areas requiring attention
                                and remedial measures.
                            </p>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Transit Effects</h3>
                            <p className="text-offwhite text-lg leading-relaxed">
                                When planets transit through this house, they activate the life areas it governs. These transits can bring
                                significant changes, opportunities, or challenges depending on the nature of the transiting planet and its
                                relationship with the house lord.
                            </p>
                        </div>
                    </div>
                );
            case "Life Areas":
                return (
                    <div className="space-y-6">
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Governed Life Areas</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {house.attributes.map((attr: string, idx: number) => (
                                    <div key={idx} className="bg-black/20 p-4 rounded-lg border border-gold/20">
                                        <h4 className="text-gold font-semibold mb-2">{attr}</h4>
                                        <p className="text-offwhite text-sm">
                                            This area of your life is directly influenced by the {house.title.toLowerCase()}.
                                            The strength and placement of planets here determine the quality of experiences in this domain.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Timing & Periods</h3>
                            <p className="text-offwhite text-lg leading-relaxed">
                                The {house.title.toLowerCase()} becomes particularly active during specific planetary periods (dashas)
                                and transits. Understanding these timing factors helps predict when significant events related to this
                                house's matters will occur.
                            </p>
                        </div>
                    </div>
                );
            case "Remedies":
                return (
                    <div className="space-y-6">
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Astrological Remedies</h3>
                            <p className="text-offwhite text-lg leading-relaxed">
                                If this house is afflicted or weak, various remedial measures can be undertaken to strengthen its influence
                                and mitigate negative effects. These include gemstone therapy, mantra chanting, and charitable acts.
                            </p>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Strengthening Methods</h3>
                            <ul className="list-disc list-inside text-offwhite space-y-2">
                                <li className="text-lg">Wearing appropriate gemstones for the house lord</li>
                                <li className="text-lg">Chanting mantras for beneficial planets</li>
                                <li className="text-lg">Performing charitable acts on auspicious days</li>
                                <li className="text-lg">Following dietary and lifestyle recommendations</li>
                                <li className="text-lg">Meditation and spiritual practices</li>
                            </ul>
                        </div>
                        <div className="bg-black/30 p-6 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Consultation Benefits</h3>
                            <p className="text-offwhite text-lg leading-relaxed">
                                For personalized remedies and detailed analysis of this house in your birth chart, consult with our expert
                                astrologers who can provide specific guidance based on your unique planetary combinations and life circumstances.
                            </p>
                        </div>
                    </div>
                );
        }
    };

    const shareHouse = () => {
        const shareUrl = `${window.location.origin}/houses/${house.slug}`;
        navigator.clipboard.writeText(shareUrl);
        alert("Link copied! Share it with your friends.");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 p-6"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-lg hover:scale-105 transition"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button
                            onClick={shareHouse}
                            className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-gold text-gold rounded-lg hover:scale-105 transition"
                        >
                            <Share2 className="w-4 h-4" /> Share
                        </button>
                    </div>

                    {/* House Title */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border border-gold mb-4">
                            <span className="text-3xl font-bold text-gold">{house.number}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">{house.title}</h1>
                        <p className="text-xl text-offwhite max-w-3xl mx-auto">{house.overview}</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 md:px-6 py-2 rounded-lg transition hover:scale-105 ${activeTab === tab
                                    ? "bg-gold text-black shadow-lg"
                                    : "bg-black/50 text-gold border border-gold/30 hover:border-gold/60 hover:bg-gold/10"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        {renderDetailedContent()}
                    </motion.div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <div className="bg-black/30 p-8 rounded-lg border border-gold/30">
                            <h3 className="text-2xl font-bold text-gold mb-4">Get Your Personalized Reading</h3>
                            <p className="text-offwhite text-lg mb-6">
                                Discover how this house influences your life with our expert astrological analysis
                            </p>
                            <button className="px-8 py-4 bg-gold text-black rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50">
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}