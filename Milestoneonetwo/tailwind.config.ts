import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4f46e5',
                    dark: '#3730a3',
                    light: '#818cf8',
                },
                accent: {
                    DEFAULT: '#d97706',
                    dark: '#b45309',
                    light: '#fbbf24',
                },
                neutral: {
                    gray: '#64748b',
                    'gray-light': '#94a3b8',
                    'gray-dark': '#1e293b',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'float-button': 'float-button 3s ease-in-out infinite',
                'rotate': 'rotate 10s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '33%': { transform: 'translateY(-30px) rotate(120deg)' },
                    '66%': { transform: 'translateY(20px) rotate(240deg)' },
                },
                'float-button': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                rotate: {
                    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                },
            },
            boxShadow: {
                'glow': '0 0 20px rgba(79, 70, 229, 0.3)',
                'glow-accent': '0 0 20px rgba(217, 119, 6, 0.3)',
            },
        },
    },
    plugins: [],
};

export default config;
