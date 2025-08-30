"use client";
import { useState } from "react";

export default function BookingForm() {
    const [ok, setOk] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const form = new FormData(e.currentTarget);
        const payload = Object.fromEntries(form.entries());
        const res = await fetch("/api/booking", { method: "POST", body: JSON.stringify(payload) });
        setLoading(false);
        if (res.ok) setOk("Thanks! We’ll email you soon (placeholder).");
        else setOk("Something went wrong. Try again.");
        e.currentTarget.reset();
    }

    return (
        <section className="py-20 bg-offwhite">
            <div className="container mx-auto max-w-3xl px-6">
                <h3 className="text-2xl md:text-4xl font-semibold text-ink text-center">Book a Consultation</h3>
                <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-olive/30 bg-white/70 p-4 shadow-glowGold">
                    <input name="name" placeholder="Name" className="rounded-lg border border-olive/30 px-3 py-2 bg-offwhite" required />
                    <input name="email" placeholder="Email" type="email" className="rounded-lg border border-olive/30 px-3 py-2 bg-offwhite" required />
                    <input name="birth" placeholder="Birth Details (date, time, place)" className="rounded-lg border border-olive/30 px-3 py-2 bg-offwhite" />
                    <select name="service" className="rounded-lg border border-olive/30 px-3 py-2 bg-offwhite">
                        <option>Birth Chart Reading</option>
                        <option>Dasha Analysis</option>
                        <option>Relationship Compatibility</option>
                        <option>Remedies Consultation</option>
                    </select>
                    <button disabled={loading} className="rounded-lg px-4 py-2 bg-olive text-offwhite font-medium hover:bg-oliveLight transition">
                        {loading ? "Booking..." : "Submit"}
                    </button>
                    {ok && <p className="text-center text-ink/80">{ok}</p>}
                </form>
            </div>
        </section>
    );
} 