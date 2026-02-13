"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { formatDate, formatTime } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [currentTime, setCurrentTime] = useState(new Date());
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Handle Theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            // Update active section
            const sections = NAV_ITEMS.map(item => item.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-800"
                : "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("#home");
                        }}
                        className="flex items-center gap-2 text-xl sm:text-2xl font-display font-bold text-primary hover:text-primary-dark transition-all hover:scale-105"
                    >
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <span className="hidden sm:inline">Ghulam Sarwar Khan</span>
                        <span className="sm:hidden">GSK</span>
                    </Link>

                    {/* Time Display */}
                    <div className="hidden md:flex items-center gap-2 text-sm text-neutral-gray dark:text-slate-400 font-medium">
                        <span className="text-primary dark:text-primary-light font-semibold">{formatDate(currentTime)}</span>
                        <span className="text-neutral-gray-light dark:text-slate-700">|</span>
                        <span className="text-accent font-semibold">{formatTime(currentTime)}</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        className={`relative text-sm font-medium transition-colors pb-1 ${activeSection === item.href.substring(1)
                                            ? "text-primary dark:text-primary-light"
                                            : "text-neutral-gray dark:text-slate-400 hover:text-primary dark:hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                        {activeSection === item.href.substring(1) && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
                        >
                            {theme === "light" ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex flex-col gap-1.5 p-2"
                            aria-label="Toggle menu"
                        >
                            <span className={`w-6 h-0.5 bg-primary dark:bg-primary-light transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`w-6 h-0.5 bg-primary dark:bg-primary-light transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                            <span className={`w-6 h-0.5 bg-primary dark:bg-primary-light transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden pb-4">
                        <ul className="flex flex-col gap-2">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        className={`block py-2 px-4 rounded-lg transition-colors ${activeSection === item.href.substring(1)
                                            ? "bg-primary dark:bg-primary-dark text-white"
                                            : "text-neutral-gray dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 dark:hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
