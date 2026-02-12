import React from 'react';

const AITechnology = () => {
    const skills = ["Generative AI", "Prompt Engineering", "Digital Governance", "Process Automation", "Python", "Full Stack Development"];

    return (
        <section id="ai-tech" className="bg-primary py-20 text-white">
            <div className="section-container">
                <div className="flex flex-col items-center lg:flex-row lg:space-x-16">
                    <div className="mb-12 lg:mb-0 lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-bold sm:text-4xl text-accent">
                            AI & Technology Focus
                        </h2>
                        <p className="mb-8 text-lg text-slate-300">
                            I am committed to staying at the forefront of the technological revolution. My current focus is
                            integrating Generative AI into administrative leadership to create more efficient,
                            data-driven, and responsive institutional structures.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span key={index} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                            <h3 className="mb-6 text-2xl font-bold text-white">GitHub & AI Projects</h3>
                            <div className="space-y-6">
                                <div className="group border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <a href="https://github.com/gsarwarkhan" target="_blank" rel="noopener noreferrer" className="block">
                                        <h4 className="text-lg font-bold text-accent transition-colors group-hover:text-amber-300">Generative AI Portfolio</h4>
                                        <p className="text-sm text-slate-400">Building custom AI agents and prompt-engineered solutions for executive tasks.</p>
                                    </a>
                                </div>
                                <div className="group border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <a href="#" className="block">
                                        <h4 className="text-lg font-bold text-accent transition-colors group-hover:text-amber-300">Digital Governance System</h4>
                                        <p className="text-sm text-slate-400">Conceptualizing AI-driven compliance and documentation frameworks.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AITechnology;
