"use client";
import { motion } from "framer-motion";
import {
    Star,
    Sparkles,
    Brain,
    Zap,
    Shield,
    Users,
    Award,
    Globe,
    CheckCircle,
    ArrowRight
} from "lucide-react";

export default function About() {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Insights",
            description: "Advanced artificial intelligence analyzes your birth chart with precision and provides personalized cosmic guidance.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Shield,
            title: "Scientific Approach",
            description: "Based on centuries of astrological wisdom combined with modern astronomical calculations and research.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Zap,
            title: "Instant Results",
            description: "Get your personalized reading in seconds, with detailed analysis and actionable recommendations.",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: Users,
            title: "Expert Validation",
            description: "All AI insights are validated by certified astrologers with decades of experience.",
            color: "from-purple-500 to-pink-500"
        }
    ];

    const stats = [
        { number: "15+", label: "Years Experience", icon: Award },
        { number: "50K+", label: "Happy Clients", icon: Users },
        { number: "99%", label: "Accuracy Rate", icon: CheckCircle },
        { number: "24/7", label: "AI Support", icon: Globe }
    ];

    const values = [
        "Authentic Vedic Astrology",
        "Modern AI Technology",
        "Privacy & Security",
        "Continuous Learning",
        "Client Satisfaction",
        "Ethical Practices"
    ];

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/20 to-yellow-400/20 px-6 py-3 rounded-full border border-gold/30 mb-6"
                    >
                        <Star className="w-5 h-5 text-gold" />
                        <span className="text-gold font-medium">About Us</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-gold mb-6">
                        Bridging Ancient
                        <span className="block bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
                            Wisdom & Modern Tech
                        </span>
                    </h2>

                    <p className="text-xl text-offwhite/80 max-w-4xl mx-auto leading-relaxed">
                        Orbs Astro represents the perfect fusion of time-honored Vedic astrology principles
                        with cutting-edge artificial intelligence. We're on a mission to make cosmic wisdom
                        accessible to everyone, everywhere.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-gold mb-6">
                            Your Journey to Cosmic Enlightenment
                        </h3>

                        <p className="text-offwhite/80 text-lg leading-relaxed mb-8">
                            Founded by a team of passionate astrologers and AI researchers, Orbs Astro
                            has revolutionized how people access and understand their astrological insights.
                            We believe that everyone deserves to know their cosmic blueprint.
                        </p>

                        <div className="space-y-4 mb-8">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center space-x-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                                    <span className="text-offwhite/80">{value}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 group"
                        >
                            <span>Learn More</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </motion.div>

                    {/* Right Column - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-gradient-to-br from-gold/20 to-yellow-400/20 border border-gold/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Sparkles className="w-12 h-12 text-black" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gold mb-4">Cosmic Intelligence</h4>
                                    <p className="text-offwhite/80">
                                        Our AI analyzes thousands of astrological patterns to provide you with
                                        the most accurate and personalized insights.
                                    </p>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                            >
                                <Brain className="w-8 h-8 text-blue-400" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                            >
                                <Shield className="w-8 h-8 text-purple-400" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="group text-center p-6 rounded-2xl border border-gold/20 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <h4 className="text-xl font-bold text-gold mb-3">{feature.title}</h4>
                                <p className="text-offwhite/70 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gold/10 to-yellow-400/10 border border-gold/20 rounded-3xl p-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className="text-center group"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-gold" />
                                    </div>

                                    <motion.div
                                        className="text-4xl font-bold text-gold mb-2"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: idx * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                                        viewport={{ once: true }}
                                    >
                                        {stat.number}
                                    </motion.div>

                                    <p className="text-offwhite/80 font-medium">{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 