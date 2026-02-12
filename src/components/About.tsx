import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-white py-20 dark:bg-slate-900">
            <div className="section-container">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold sm:text-4xl text-primary dark:text-white">
                            Professional Summary
                        </h2>
                        <div className="space-y-4 text-lg text-secondary dark:text-slate-300">
                            <p>
                                Highly accomplished administrative leader with a robust background in trade governance,
                                institutional compliance, and stakeholder coordination at the national level.
                            </p>
                            <p>
                                As the Secretary General of the Pakistan Tea Association, I am dedicated to structuring
                                resilient institutional frameworks that ensure regulatory compliance while fostering
                                harmonious trade environments. My approach is rooted in calm, structured leadership
                                and a commitment to excellence.
                            </p>
                            <p>
                                I am actively bridging the gap between traditional governance and modern technology
                                by specializing in Generative AI and Prompt Engineering. My focus is on leveraging
                                digital systems to optimize documentation, policy correspondence, and decision-making
                                processes in executive environments.
                            </p>
                        </div>
                    </div>
                    <div className="relative rounded-2xl bg-slate-100 p-8 dark:bg-slate-800">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-700">
                                    <h3 className="font-bold text-accent">Leadership</h3>
                                    <p className="text-sm">Institutional Structuring</p>
                                </div>
                                <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-700">
                                    <h3 className="font-bold text-accent">Policy</h3>
                                    <p className="text-sm">Trade Governance</p>
                                </div>
                            </div>
                            <div className="mt-8 space-y-4">
                                <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-700">
                                    <h3 className="font-bold text-accent">Compliance</h3>
                                    <p className="text-sm">Regulatory Standards</p>
                                </div>
                                <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-700">
                                    <h3 className="font-bold text-accent">Tech-Forward</h3>
                                    <p className="text-sm">AI Implementation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
