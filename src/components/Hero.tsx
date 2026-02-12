import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
            <div className="section-container relative z-10">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Ghulam Sarwar Khan
                    </h1>
                    <p className="mb-8 text-xl font-medium text-accent sm:text-2xl uppercase tracking-widest">
                        Secretary General, Pakistan Tea Association
                    </p>
                    <div className="max-w-3xl">
                        <p className="mb-10 text-lg leading-relaxed text-slate-300 sm:text-xl">
                            Experienced executive leader specializing in trade governance, institutional structuring, and compliance.
                            Currently driving modernization through Generative AI integration and digital systems to enhance
                            stakeholder coordination and policy excellence in the trade sector.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                        <a
                            href="/resume.pdf"
                            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-amber-400 hover:scale-105"
                        >
                            Download CV
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ghulam-sarwar-khan-b989b48a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-400 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
                        >
                            Connect on LinkedIn
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-400 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            {/* Subtle abstract background element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl"></div>
        </section>
    );
};

export default Hero;
