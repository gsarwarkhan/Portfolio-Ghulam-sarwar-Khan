"use client";

import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export default function FloatingHireButton() {
    const handleClick = () => {
        const message = encodeURIComponent(
            "Hello Ghulam Sarwar Khan,\n\nI'm interested in your services as a Secretary General & AI Developer.\n\nPlease provide me with more information about your availability and services.\n\nBest regards,"
        );
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-2xl hover:shadow-glow hover:scale-105 transition-all animate-float-button"
            aria-label="Hire Me"
        >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span className="font-semibold">Hire Me</span>
        </button>
    );
}
