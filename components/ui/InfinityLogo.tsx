export default function InfinityLogo({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 100" className={className} aria-label="Orbs Astro Infinity">
            <defs>
                <linearGradient id="goldOlive" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#556B2F" />
                </linearGradient>
            </defs>
            <path
                d="M30,50c0-13.8,11.2-25,25-25c20,0,35,25,45,25s25-25,45-25c13.8,0,25,11.2,25,25s-11.2,25-25,25c-20,0-35-25-45-25
           s-25,25-45,25C41.2,75,30,63.8,30,50z"
                fill="none"
                stroke="url(#goldOlive)"
                strokeWidth="8"
                strokeLinecap="round"
            />
            <text x="100" y="92" textAnchor="middle" fontSize="16" fill="#556B2F" style={{ letterSpacing: 1 }}>
                ORBS ASTRO
            </text>
        </svg>
    );
} 