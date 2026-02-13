"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-gray-dark to-slate-800 text-white relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto z-10 px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Side: Professional Summary */}
                    <div className="flex-1 text-center lg:text-left space-y-8" data-aos="fade-right">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-light text-sm font-bold tracking-wider uppercase rounded-full border border-primary/20">
                                Executive Profile
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black text-white leading-[1.1]">
                                GHULAM <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-accent-light to-primary-light">
                                    SARWAR KHAN
                                </span>
                            </h1>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white/90">
                                Secretary General
                            </h2>
                            <p className="text-xl sm:text-2xl text-accent-light font-medium tracking-wide">
                                Pakistan Tea Association
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto lg:mx-0 space-y-4 text-neutral-gray-light leading-relaxed">
                            <p className="text-lg">
                                Orchestrating national trade governance and institutional compliance while pioneering
                                <span className="text-white font-semibold"> AI-driven transformation</span> in trade body operations.
                            </p>
                        </div>

                        {/* Core Competencies - Slimmer Version */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {[
                                { label: "Trade Governance", icon: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" },
                                { label: "AI Innovation", icon: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" },
                                { label: "Policy Development", icon: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z" }
                            ].map((item) => (
                                <span key={item.label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                                    <svg className="w-4 h-4 text-accent-light" fill="currentColor" viewBox="0 0 20 20">
                                        <path d={item.icon} />
                                    </svg>
                                    {item.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Profile Image with Executive Framing */}
                    <div className="relative" data-aos="fade-left">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
                            {/* Animated Background Rings */}
                            <div className="absolute inset-0 rounded-full border-[10px] border-primary/20 scale-110 animate-pulse" />
                            <div className="absolute inset-0 rounded-full border-[1px] border-white/20 scale-125" />

                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-[0_0_50px_rgba(79,70,229,0.3)] z-10 transition-transform duration-500 hover:scale-105">
                                <Image
                                    src="/images/Profile.png"
                                    alt="Ghulam Sarwar Khan - Secretary General"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Tech/Executive Badges */}
                            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl z-20 border border-slate-100 hidden sm:block">
                                <div className="text-primary font-bold text-xl uppercase tracking-tighter">15+ Years</div>
                                <div className="text-slate-500 text-xs font-semibold">Executive Leadership</div>
                            </div>
                            <div className="absolute top-10 -right-8 bg-accent p-4 rounded-2xl shadow-2xl z-20 border border-white/20 hidden sm:block">
                                <div className="text-white font-bold text-xl uppercase tracking-tighter">95th %</div>
                                <div className="text-white/80 text-xs font-semibold">AI Integration</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTAs - Redesigned Row */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-16 pt-8 border-t border-white/10" data-aos="fade-up">
                    <Link
                        href="https://ai-agent-appgit-6rivk5mxhzbkanszvdshte.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
                    >
                        <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl" />
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        Experience My AI Agent
                    </Link>
                    <Link
                        href="/Resume-GSK.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download Executive CV
                    </Link>
                </div>

                {/* Contact Links */}
                <div className="mt-10 space-y-4" data-aos="fade-up">
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-lg font-medium border border-white/30 hover:bg-white/10 hover:border-white transition-all text-sm"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            {CONTACT_INFO.email}
                        </Link>
                        <Link
                            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-lg font-medium border border-white/30 hover:bg-white/10 hover:border-white transition-all text-sm"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            {CONTACT_INFO.phone}
                        </Link>
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                        {[
                            { href: SOCIAL_LINKS.linkedin, icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", label: "LinkedIn" },
                            { href: SOCIAL_LINKS.facebook, icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z", label: "Facebook" },
                            { href: SOCIAL_LINKS.youtube, icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z", label: "YouTube" },
                            { href: SOCIAL_LINKS.github, icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", label: "GitHub" },
                        ].map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all"
                                aria-label={social.label}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={social.icon} />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
