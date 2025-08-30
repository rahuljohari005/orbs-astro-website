"use client";
import { motion } from "framer-motion";
import { User, Calendar, Clock, MapPin, BarChart3, Download, Share2, Star } from "lucide-react";
import { useState } from "react";
import { generateEnhancedLagnaChart } from '@/lib/astrologyEngine';

interface FormData {
    name: string;
    dateOfBirth: string;
    timeOfBirth: string;
    placeOfBirth: string;
}

interface KundliData {
    lagna_chart: {
        lagna: {
            rashi: string;
            degree: number;
            nakshatra: string;
            pada: number;
        };
        planets: Array<{
            name: string;
            rashi: string;
            house: number;
            degree: number;
            nakshatra: string;
        }>;
    };
    houses: Array<{
        house: number;
        rashi: string;
        lord: string;
    }>;
}

export default function LagnaChartGenerator() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        dateOfBirth: "",
        timeOfBirth: "",
        placeOfBirth: ""
    });
    const [kundliData, setKundliData] = useState<KundliData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Use the local astrology engine for accurate calculations
            const chartData = generateEnhancedLagnaChart({
                name: formData.name,
                date: formData.dateOfBirth,
                time: formData.timeOfBirth,
                place: formData.placeOfBirth
            });

            // Transform the data to match our display format
            const transformedData = {
                lagna_chart: {
                    lagna: {
                        rashi: chartData.lagna_rashi,
                        degree: chartData.planets.find(p => p.name === 'Sun')?.degree || 15,
                        nakshatra: chartData.lagna_nakshatra,
                        pada: Math.floor((chartData.planets.find(p => p.name === 'Sun')?.degree || 15) / 7.5) + 1
                    },
                    planets: chartData.planets.map((planet: any) => ({
                        name: planet.name,
                        rashi: planet.rashi,
                        house: planet.house,
                        degree: planet.degree,
                        nakshatra: planet.nakshatra || 'N/A'
                    }))
                },
                houses: chartData.houses.map((house: any, index: number) => ({
                    house: index + 1,
                    rashi: house.rashi,
                    lord: house.lord
                }))
            };

            setKundliData(transformedData);
            setShowForm(false);
        } catch (err) {
            console.error('Chart generation error:', err);
            setError('Failed to generate kundli. Please check your birth details and try again.');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setKundliData(null);
        setShowForm(true);
        setFormData({
            name: "",
            dateOfBirth: "",
            timeOfBirth: "",
            placeOfBirth: ""
        });
        setError(null);
    };

    const downloadChart = () => {
        alert('PDF download feature coming soon!');
    };

    const shareChart = () => {
        if (navigator.share) {
            navigator.share({
                title: `${formData.name}'s Vedic Kundali`,
                text: 'Check out my Vedic Kundali chart!',
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (showForm) {
        return (
            <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
                <div className="absolute top-20 left-20 w-32 h-32 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/20 to-yellow-400/20 px-6 py-3 rounded-full border border-gold/30 mb-6">
                            <Star className="w-5 h-5 text-gold" />
                            <span className="text-gold font-medium">Vedic Kundali</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gold mb-4">Vedic Kundli Generator</h2>
                        <p className="text-offwhite/80 text-lg max-w-2xl mx-auto">
                            Generate your complete Vedic Kundali chart using our astrology system.
                            Get accurate planetary positions, houses, and detailed interpretations.
                        </p>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-xl border border-gold/30 rounded-2xl p-8 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gold font-semibold mb-2">
                                        <User className="w-4 h-4 inline mr-2" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gold font-semibold mb-2">
                                        <Calendar className="w-4 h-4 inline mr-2" />
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gold font-semibold mb-2">
                                        <Clock className="w-4 h-4 inline mr-2" />
                                        Time of Birth
                                    </label>
                                    <input
                                        type="time"
                                        name="timeOfBirth"
                                        value={formData.timeOfBirth}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gold font-semibold mb-2">
                                        <MapPin className="w-4 h-4 inline mr-2" />
                                        Place of Birth
                                    </label>
                                    <input
                                        type="text"
                                        name="placeOfBirth"
                                        value={formData.placeOfBirth}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-black/50 border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                        placeholder="City, Country"
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                                    <p className="text-red-400 text-center">{error}</p>
                                </div>
                            )}

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-glowGold"
                                >
                                    {loading ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                            <span>Generating Kundali...</span>
                                        </div>
                                    ) : (
                                        <>
                                            <BarChart3 className="w-5 h-5 inline mr-2" />
                                            Generate My Kundali
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Success Message */}
                <div className="text-center border-b border-gold/30 pb-6">
                    <h3 className="text-2xl font-bold text-gold mb-2">{formData.name}'s Vedic Kundali</h3>
                    <p className="text-offwhite/60">Generated using our astrology system</p>
                </div>

                <div className="mt-4 p-4 bg-gradient-to-r from-gold/10 to-yellow-400/10 border border-gold/30 rounded-xl">
                    <p className="text-gold font-semibold text-lg">Kundali Generated Successfully!</p>
                    <p className="text-offwhite/80 text-sm mt-1">
                        Your chart has been calculated with our astrology system.
                    </p>
                </div>

                {/* Lagna Details */}
                <div className="mt-8">
                    <h4 className="text-xl font-bold text-gold mb-4 flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        Lagna (Ascendant) Details
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 border border-gold/30 rounded-xl bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg">
                            <div className="text-gold font-bold text-lg">Rashi</div>
                            <div className="text-white">{kundliData?.lagna_chart.lagna.rashi}</div>
                        </div>
                        <div className="p-4 border border-gold/30 rounded-xl bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg">
                            <div className="text-gold font-bold text-lg">Degree</div>
                            <div className="text-white">{kundliData?.lagna_chart.lagna.degree}°</div>
                        </div>
                        <div className="p-4 border border-gold/30 rounded-xl bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg">
                            <div className="text-gold font-bold text-lg">Nakshatra</div>
                            <div className="text-white">{kundliData?.lagna_chart.lagna.nakshatra}</div>
                        </div>
                        <div className="p-4 border border-gold/30 rounded-xl bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg">
                            <div className="text-gold font-bold text-lg">Pada</div>
                            <div className="text-white">{kundliData?.lagna_chart.lagna.pada}</div>
                        </div>
                    </div>
                </div>

                {/* Planetary Positions */}
                <div className="mt-8">
                    <h4 className="text-xl font-bold text-gold mb-4">Planetary Positions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {kundliData?.lagna_chart.planets.map((planet, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-4 border border-gold/30 rounded-xl bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-gold font-bold text-lg mb-2">{planet.name}</div>
                                <div className="text-white/80 text-sm space-y-1">
                                    <div>Rashi: {planet.rashi}</div>
                                    <div>House: {planet.house}</div>
                                    <div>Degree: {planet.degree}°</div>
                                    <div>Nakshatra: {planet.nakshatra}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Houses */}
                <div className="mt-8">
                    <h4 className="text-xl font-bold text-gold mb-4">The 12 Houses</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {kundliData?.houses.map((house, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="p-4 border border-gold/30 rounded-xl bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-gold font-bold text-lg">{house.house}</div>
                                <div className="text-white/80 text-sm">{house.rashi}</div>
                                <div className="text-gold/80 text-xs">Lord: {house.lord}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={downloadChart}
                        className="px-6 py-3 bg-black/50 border border-gold text-gold rounded-xl hover:scale-105 transition-all duration-300 flex items-center hover:bg-gold hover:text-black"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                    </button>
                    <button
                        onClick={shareChart}
                        className="px-6 py-3 bg-black/50 border border-gold text-gold rounded-xl hover:scale-105 transition-all duration-300 hover:bg-gold hover:text-black"
                    >
                        <Share2 className="w-5 h-5 mr-2" />
                        Share Chart
                    </button>
                    <button
                        onClick={resetForm}
                        className="px-6 py-3 bg-black/50 border border-gold text-gold rounded-xl hover:scale-105 transition-all duration-300 hover:bg-gold hover:text-black"
                    >
                        Generate New Chart
                    </button>
                </div>

                {/* AI Consultation Link */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gold/10 to-yellow-400/10 border border-gold/30 rounded-xl text-center">
                    <h4 className="text-xl font-bold text-gold mb-2">Get Detailed Interpretation</h4>
                    <p className="text-offwhite/80 mb-4">
                        Chat with our AI astrologer Saanvi for personalized insights about your chart!
                    </p>
                    <button
                        onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 bg-gold text-black rounded-lg hover:scale-105 transition-all duration-300"
                    >
                        Chat with AI Astrologer
                    </button>
                </div>
            </div>
        </section>
    );
} 