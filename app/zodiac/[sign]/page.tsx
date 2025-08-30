'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft, Star, Heart, Target, Shield, Eye, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { zodiacData } from '@/data/zodiacData'


const ZodiacSignPage = () => {
    const params = useParams()
    const signName = params.sign as string

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const signData = zodiacData[signName as keyof typeof zodiacData]

    if (!signData) {
        return (
            <div className="min-h-screen bg-dark-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-playfair font-bold text-white mb-4">Zodiac Sign Not Found</h1>
                    <Link href="/" className="text-primary-400 hover:text-primary-300">
                        Return to Home
                    </Link>
                </div>
            </div>
        )
    }

    const icons = {
        strengths: Star,
        weaknesses: Shield,
        love: Heart,
        career: Target,
        personality: Eye,
        compatibility: Sparkles
    }

    return (
        <div className="min-h-screen bg-dark-950">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-dark-900/50 backdrop-blur-sm border-b border-primary-400/20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link href="/" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotate: -10 }}
                            animate={inView ? { scale: 1, rotate: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                            className={`w-32 h-32 bg-gradient-to-r ${signData.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl`}
                        >
                            <motion.span
                                className="text-6xl text-white font-bold"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                {signData.symbol}
                            </motion.span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6"
                        >
                            {signData.name}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        >
                            {signData.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap justify-center gap-4 text-sm"
                        >
                            <span className="px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 border border-primary-400/30">
                                {signData.dates}
                            </span>
                            <span className="px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 border border-primary-400/30">
                                {signData.element} Element
                            </span>
                            <span className="px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 border border-primary-400/30">
                                Ruled by {signData.rulingPlanet}
                            </span>
                            <span className="px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 border border-primary-400/30">
                                {signData.quality} Quality
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Personality */}
                            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-400/20">
                                <div className="flex items-center space-x-3 mb-6">
                                    <icons.personality className="w-6 h-6 text-primary-400" />
                                    <h3 className="text-2xl font-playfair font-bold text-white">Personality</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {signData.personality}
                                </p>
                            </div>

                            {/* Strengths & Weaknesses */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-400/20">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <icons.strengths className="w-5 h-5 text-green-400" />
                                        <h4 className="text-lg font-semibold text-white">Strengths</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {signData.strengths.map((strength, index) => (
                                            <motion.li
                                                key={strength}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                                className="text-gray-300 text-sm flex items-center"
                                            >
                                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                                {strength}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-400/20">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <icons.weaknesses className="w-5 h-5 text-red-400" />
                                        <h4 className="text-lg font-semibold text-white">Weaknesses</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {signData.weaknesses.map((weakness, index) => (
                                            <motion.li
                                                key={weakness}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                                className="text-gray-300 text-sm flex items-center"
                                            >
                                                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                                {weakness}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Love & Relationships */}
                            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-400/20">
                                <div className="flex items-center space-x-3 mb-6">
                                    <icons.love className="w-6 h-6 text-primary-400" />
                                    <h3 className="text-2xl font-playfair font-bold text-white">Love & Relationships</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {signData.loveLife}
                                </p>

                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-4">Compatibility</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-green-400 text-sm font-medium">Compatible Signs:</span>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {signData.compatibility.map((match) => (
                                                    <motion.span
                                                        key={match}
                                                        className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm border border-green-400/30"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {match}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Career */}
                            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-primary-400/20">
                                <div className="flex items-center space-x-3 mb-6">
                                    <icons.career className="w-6 h-6 text-primary-400" />
                                    <h3 className="text-2xl font-playfair font-bold text-white">Career & Work</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Ideal career paths for {signData.name}:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {signData.career.map((careerPath, index) => (
                                        <motion.span
                                            key={careerPath}
                                            className="px-3 py-1 bg-primary-500/20 rounded-full text-primary-400 text-sm border border-primary-400/30"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {careerPath}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-dark-900/50"
            >
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
                        Uncover Your Celestial Destiny
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Ready to explore your {signData.name} energy more deeply? Book a personalized reading with Orbs Astro to unlock your cosmic potential.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Schedule Your Reading
                    </motion.button>
                </div>
            </motion.section>
        </div>
    )
}

export default ZodiacSignPage 