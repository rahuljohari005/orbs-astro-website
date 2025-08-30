"use client";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-8"
            >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/20 border border-gold flex items-center justify-center">
                    <FaHome className="text-3xl text-gold" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">
                    House Not Found
                </h1>

                <p className="text-xl text-offwhite mb-8 max-w-md mx-auto">
                    The house you're looking for doesn't exist in our cosmic database.
                    Perhaps it's in a different dimension?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gold text-black rounded-lg hover:scale-105 transition"
                    >
                        <FaArrowLeft /> Go Back
                    </button>

                    <button
                        onClick={() => router.push('/')}
                        className="px-6 py-3 bg-black/50 border border-gold text-gold rounded-lg hover:scale-105 transition"
                    >
                        Return Home
                    </button>
                </div>
            </motion.div>
        </div>
    );
}