"use client";

import { useState, useEffect } from "react";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById("skills");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center mb-16 text-slate-900 dark:text-white relative">
                    Skills & Expertise
                    <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Technical Skills</h3>
                        <div className="space-y-6">
                            {SKILLS.technical.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                                        <span className="text-primary dark:text-primary-light font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Professional Skills</h3>
                        <div className="space-y-6">
                            {SKILLS.professional.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                                        <span className="text-accent dark:text-accent-light font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-accent to-accent-dark rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
