"use client";

import Image from "next/image";

export default function DigitalArk() {
    return (
        <section id="digital-ark" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200">
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/logo-ark.png"
                            alt="The Digital Ark Logo"
                            width={200}
                            height={200}
                            className="w-32 h-32 md:w-48 md:h-48"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">
                            The Digital Ark
                        </h2>
                        <h3 className="text-xl md:text-2xl text-primary font-semibold mb-4">
                            AI Services & Innovation Hub
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Pioneering the future of business operations through intelligent automation and strategic
                            AI integration. The Digital Ark is my dedicated platform for delivering cutting-edge AI
                            solutions.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                                Custom AI Agents
                            </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700">
                                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                Business Automation
                            </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                Intelligent Workflows
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
