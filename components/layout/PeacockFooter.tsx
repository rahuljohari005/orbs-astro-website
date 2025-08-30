export default function PeacockFooter() {
    return (
        <footer className="relative overflow-hidden bg-offwhite py-16 mt-8">
            {/* subtle feather SVG background */}
            <svg
                className="absolute -right-24 -top-10 opacity-20"
                width="420" height="420" viewBox="0 0 420 420" aria-hidden
            >
                <defs>
                    <linearGradient id="feath" x1="0" x2="1">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#556B2F" />
                    </linearGradient>
                </defs>
                <path d="M210 10 C80 120, 80 260, 210 410 C340 260, 340 120, 210 10Z" fill="none" stroke="url(#feath)" strokeWidth="6" />
                <circle cx="210" cy="210" r="26" fill="#556B2F" />
                <circle cx="210" cy="210" r="12" fill="#D4AF37" />
            </svg>

            <div className="mx-auto max-w-5xl px-6 text-center relative">
                <div className="text-ink/70">© {new Date().getFullYear()} Orbs Astro ∞ — Ancient insight, futuristic craft.</div>
            </div>
        </footer>
    );
}