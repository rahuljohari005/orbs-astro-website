export default function ClientsSection() {
    return (
        <section
            className="relative py-24 text-center"
            style={{
                backgroundImage: "url('/images/PEACOCK FETHER.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-black/60 absolute inset-0"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-offwhite">
                <h2 className="text-4xl font-bold text-gold">What Seekers Say</h2>
                <p className="mt-4 text-lg">
                    Trusted by seekers across the globe. 1200+ consultations, 5k+ AI readings.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-offwhite/10 rounded shadow">"Life-changing insights!" – Ananya S.</div>
                    <div className="p-6 bg-offwhite/10 rounded shadow">"Clarity in my toughest times." – Kiran D.</div>
                    <div className="p-6 bg-offwhite/10 rounded shadow">"Accurate and uplifting." – Maya R.</div>
                </div>
            </div>
        </section>
    );
}