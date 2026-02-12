import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "Secretary General",
            company: "Pakistan Tea Association",
            period: "2026 – Present",
            achievements: [
                "Led institutional documentation standardization across all regional offices",
                "Streamlined membership compliance processes and regulatory reporting",
                "Coordinated Executive Committee (EC) meetings and policy implementations",
                "Managed high-level policy correspondence with government stakeholders",
                "Enhanced stakeholder engagement through digital communication channels",
                "Initiated AI-driven systems for internal process optimization"
            ]
        },
        // Placeholders for previous roles can be added here
    ];

    return (
        <section id="experience" className="bg-slate-50 py-20 dark:bg-slate-800/50">
            <div className="section-container">
                <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Professional Experience</h2>
                <div className="mx-auto max-w-4xl space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative border-l-4 border-accent bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-slate-800">
                            <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary dark:text-white">{exp.role}</h3>
                                    <p className="text-lg font-semibold text-secondary dark:text-slate-400">{exp.company}</p>
                                </div>
                                <span className="mt-2 text-sm font-bold uppercase tracking-wider text-accent sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="mt-6 space-y-3">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="mr-3 text-accent">•</span>
                                        <span className="text-secondary dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
