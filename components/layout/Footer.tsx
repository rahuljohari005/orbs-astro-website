"use client";
import { motion } from "framer-motion";
import {
    Sparkles,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Heart,
    ArrowUp
} from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerSections = [
        {
            title: "Services",
            links: [
                { name: "AI Astrology Reading", href: "#services" },
                { name: "Human Consultation", href: "#consultation" },
                { name: "Gemstone Guidance", href: "#services" },
                { name: "Numerology Analysis", href: "#services" },
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "#about" },
                { name: "Our Mission", href: "#about" },
                { name: "Privacy Policy", href: "#privacy" },
                { name: "Terms of Service", href: "#terms" },
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "#help" },
                { name: "Contact Us", href: "#contact" },
                { name: "FAQ", href: "#faq" },
                { name: "Live Chat", href: "#chat" },
            ]
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ];

    const contactInfo = [
        { icon: Mail, text: "hello@orbsastro.com", href: "mailto:hello@orbsastro.com" },
        { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { icon: MapPin, text: "Cosmic Street, Universe", href: "#" },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-gold/20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
                                    Orbs Astro
                                </h3>
                            </div>

                            <p className="text-offwhite/80 text-lg leading-relaxed mb-6 max-w-md">
                                Your gateway to cosmic wisdom, combining ancient astrology with cutting-edge AI technology.
                                Discover your true potential through the stars.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                {contactInfo.map((contact, idx) => {
                                    const Icon = contact.icon;
                                    return (
                                        <motion.a
                                            key={idx}
                                            href={contact.href}
                                            className="flex items-center space-x-3 text-offwhite/70 hover:text-gold transition-colors duration-300 group"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                            <span>{contact.text}</span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, sectionIdx) => (
                        <motion.div
                            key={sectionIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: sectionIdx * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-gold font-semibold text-lg mb-6">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIdx) => (
                                    <motion.li
                                        key={linkIdx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: sectionIdx * 0.1 + linkIdx * 0.05, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <a
                                            href={link.href}
                                            className="text-offwhite/70 hover:text-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gold/10 to-yellow-400/10 border border-gold/20 rounded-2xl p-8 mb-16"
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gold mb-4">
                            Stay Connected to the Cosmos
                        </h3>
                        <p className="text-offwhite/80 mb-6">
                            Get weekly cosmic insights, planetary updates, and exclusive offers delivered to your inbox.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-offwhite placeholder-offwhite/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-gold to-yellow-400 text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/25">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <div className="border-t border-gold/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-offwhite/60 text-sm flex items-center space-x-2"
                        >
                            <span>© 2024 Orbs Astro. All rights reserved.</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:inline">Made with</span>
                            <Heart className="w-4 h-4 text-red-500 inline sm:hidden" />
                            <span className="hidden sm:inline">❤️ in the Universe</span>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-4"
                        >
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-gradient-to-br from-gold/20 to-yellow-400/20 border border-gold/30 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 hover:scale-110"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-gold/50 transition-all duration-300 hover:scale-110 z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <ArrowUp className="w-6 h-6" />
            </motion.button>
        </footer>
    );
}