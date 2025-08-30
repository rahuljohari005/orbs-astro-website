"use client";
import { useState } from "react";

export default function ConsultationSection() {
    const [ok, setOk] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const form = new FormData(e.currentTarget);
        const payload = Object.fromEntries(form.entries());
        const res = await fetch("/api/booking", { method: "POST", body: JSON.stringify(payload) });
        setLoading(false);
        if (res.ok) setOk("Thanks! We'll email you soon (placeholder).");
        else setOk("Something went wrong. Try again.");
        e.currentTarget.reset();
    }

    return (
        <section id="booking" className="relative">
            {/* Background image with cosmic fallback */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url(/images/universe.jpg), linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0f172a 100%)"
                }}
            />
            {/* Olive-to-offwhite wash to fit brand + improve contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-olive/30 to-offwhite/5" />

            <div className="relative py-24 md:py-32">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h3 className="text-2xl md:text-4xl font-semibold text-offwhite drop-shadow">
                        Book a Consultation
                    </h3>
                    <p className="mt-2 text-offwhite/90 drop-shadow">
                        Personalized guidance using KP, Hora, and Nadi techniques.
                    </p>

                    <div className="mt-8 mx-auto max-w-xl rounded-xl border border-offwhite/30 bg-white/80 backdrop-blur p-6 shadow-glowGold">
                        {/* Full booking form */}
                        <form onSubmit={submit} className="grid grid-cols-1 gap-4">
                            <input
                                name="name"
                                placeholder="Name"
                                className="rounded-lg border border-olive/30 px-3 py-2 bg-offwhite focus:border-gold outline-none"
                                required
                            />
                            <input
                                name="email"
                                placeholder="Email"
                                type="email"
                                className="rounded-lg border border-olive/30 px-3 py-2 bg-offwhite focus:border-gold outline-none"
                                required
                            />
                            <input
                                name="birth"
                                placeholder="Birth Details (date, time, place)"
                                className="rounded-lg border border-olive/30 px-3 py-2 bg-offwhite focus:border-gold outline-none"
                            />
                            <select
                                name="service"
                                className="rounded-lg border border-olive/30 px-3 py-2 bg-offwhite focus:border-gold outline-none"
                            >
                                <option>Birth Chart Reading</option>
                                <option>Dasha Analysis</option>
                                <option>Relationship Compatibility</option>
                                <option>Remedies Consultation</option>
                            </select>
                            <button
                                disabled={loading}
                                className="rounded-lg px-6 py-3 bg-gold text-ink font-medium hover:bg-gold/90 transition shadow-glowGold"
                            >
                                {loading ? "Booking..." : "Start Your Cosmic Journey"}
                            </button>
                            {ok && <p className="text-center text-ink/80 mt-2">{ok}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}