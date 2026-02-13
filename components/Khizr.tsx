"use client";

export default function Khizr() {
    return (
        <section id="khizr" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6 group hover:shadow-2xl transition-all duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                            Meet <span className="text-primary italic">Khizr</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            My custom-built <strong className="text-primary dark:text-primary-light font-semibold">AI Companion</strong> designed to handle advanced automation,
                            strategic insights, and high-level project management. Bridging the gap between
                            executive leadership and technical innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
