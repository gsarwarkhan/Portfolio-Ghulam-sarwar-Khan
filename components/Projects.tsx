"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
    const featuredProject = PROJECTS.find(p => p.featured);
    const otherProjects = PROJECTS.filter(p => !p.featured);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center mb-12 text-slate-900 dark:text-white relative">
                    Ongoing & Featured Projects
                    <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </h2>

                {/* Featured Project */}
                {featuredProject && (
                    <div className="mb-12 bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border-t-4 border-primary border border-transparent dark:border-slate-800 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">Featured</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">{featuredProject.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{featuredProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {featuredProject.tech.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {featuredProject.liveUrl && (
                                <Link
                                    href={featuredProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Live Demo
                                </Link>
                            )}
                            {featuredProject.githubUrl && (
                                <Link
                                    href={featuredProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </Link>
                            )}
                        </div>
                    </div>
                )}

                {/* Other Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project) => (
                        <div key={project.id} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.liveUrl && (
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                    Live Demo
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
