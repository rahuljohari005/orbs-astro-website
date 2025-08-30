"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Clock,
    Star,
    CheckCircle
} from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            details: "hello@orbsastro.com",
            description: "Get in touch via email for detailed inquiries",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Phone,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            description: "Speak directly with our cosmic advisors",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "Cosmic Street, Universe",
            description: "Experience our services in person",
            color: "from-purple-500 to-pink-500"
        }
    ];

    const businessHours = [
        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
        { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
        { day: "Sunday", hours: "By Appointment Only" }
    ];

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

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
                        <MessageCircle className="w-5 h-5 text-gold" />
                        <span className="text-gold font-medium">Get In Touch</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-gold mb-6">
                        Let's Connect
                        <span className="block bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
                            Through the Cosmos
                        </span>
                    </h2>

                    <p className="text-xl text-offwhite/80 max-w-3xl mx-auto">
                        Ready to discover your cosmic path? Reach out to us and let's begin
                        your journey of self-discovery and celestial guidance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Contact Cards */}
                        {contactInfo.map((info, idx) => {
                            const Icon = info.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className="group p-6 rounded-2xl border border-gold/20 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg hover:shadow-2xl transition-all duration-500"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gold mb-2">{info.title}</h3>
                                    <p className="text-offwhite font-medium mb-2">{info.details}</p>
                                    <p className="text-offwhite/70 text-sm">{info.description}</p>
                                </motion.div>
                            );
                        })}

                        {/* Business Hours */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl border border-gold/20 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <Clock className="w-6 h-6 text-gold" />
                                <h3 className="text-xl font-bold text-gold">Business Hours</h3>
                            </div>

                            <div className="space-y-3">
                                {businessHours.map((schedule, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-sm">
                                        <span className="text-offwhite/70">{schedule.day}</span>
                                        <span className="text-gold font-medium">{schedule.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-gold/20 p-8 shadow-2xl"
                        >
                            {!isSubmitted ? (
                                <>
                                    <h3 className="text-3xl font-bold text-gold mb-6">Send Us a Message</h3>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-offwhite font-medium mb-2">
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-offwhite placeholder-offwhite/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-offwhite font-medium mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-offwhite placeholder-offwhite/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-offwhite font-medium mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-offwhite placeholder-offwhite/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-offwhite font-medium mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-offwhite placeholder-offwhite/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
                                                placeholder="Tell us about your cosmic journey..."
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-gold to-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center space-x-2"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                                    <span>Sending Message...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gold mb-4">Message Sent Successfully!</h3>
                                    <p className="text-offwhite/80">
                                        Thank you for reaching out. We'll get back to you within 24 hours with cosmic insights and guidance.
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-offwhite/60 mb-6">Trusted by seekers worldwide</p>
                    <div className="flex justify-center items-center space-x-8 text-gold/40">
                        <div className="text-2xl font-bold">🔮</div>
                        <div className="text-2xl font-bold">⭐</div>
                        <div className="text-2xl font-bold">✨</div>
                        <div className="text-2xl font-bold">🌟</div>
                        <div className="text-2xl font-bold">💫</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 