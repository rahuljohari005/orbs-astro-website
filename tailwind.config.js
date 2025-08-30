/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gold: "#D4AF37",
                olive: "#556B2F",
                oliveLight: "#6B8E23",
                offwhite: "#F8F5EF",
                ink: "#0D0E0B",
            },
            boxShadow: {
                glowGold: "0 0 30px rgba(212,175,55,0.35)",
            },
        },
    },
    plugins: [],
}; 