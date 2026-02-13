"use client";

import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center mb-16 text-slate-900 relative">
                    Professional Journey
                    <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {EXPERIENCE.map((exp, index) => (
                            <div key={exp.id} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10" />

                                {/* Content */}
                                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-3">
                                        {exp.period}
                                    </span>
                                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
                                        <h3 className="text-xl font-display font-bold text-slate-900 mb-1">{exp.title}</h3>
                                        <h4 className="text-lg text-primary font-semibold mb-3">{exp.company}</h4>
                                        <p className="text-slate-600 mb-4">{exp.description}</p>
                                        <ul className={`space-y-2 text-sm text-slate-600 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
