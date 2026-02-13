"use client";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center mb-4 text-slate-900 relative">
                    Executive Profile
                    <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </h2>
                <p className="text-center text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
                    Secretary General with proven expertise in trade governance, compliance leadership, and AI-driven institutional transformation
                </p>

                <div className="space-y-8">
                    {/* Executive Summary */}
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border-l-4 border-primary">
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Executive Summary</h3>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            As <strong className="text-primary">Secretary General of the Pakistan Tea Association</strong>, I lead the national trade body representing Pakistan's tea industry, overseeing institutional standardization, membership compliance, and strategic policy development. My career trajectory uniquely positions me as a <strong className="text-primary">"Future-Ready Leader"</strong> — integrating 15+ years of proven executive administration with cutting-edge AI capabilities to drive organizational excellence and digital transformation.
                        </p>
                    </div>

                    {/* Core Competencies Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Governance & Compliance */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-display font-bold text-slate-900 mb-3">Governance & Compliance</h4>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Institutional documentation standardization</li>
                                <li>• Membership compliance oversight</li>
                                <li>• Executive Committee coordination</li>
                                <li>• Regulatory policy development</li>
                            </ul>
                        </div>

                        {/* Strategic Leadership */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-display font-bold text-slate-900 mb-3">Strategic Leadership</h4>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• High-level stakeholder engagement</li>
                                <li>• Trade policy advocacy</li>
                                <li>• International delegation management</li>
                                <li>• Chamber development programs</li>
                            </ul>
                        </div>

                        {/* AI & Innovation */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-display font-bold text-slate-900 mb-3">AI & Innovation</h4>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Generative AI & Agentic AI (95th percentile)</li>
                                <li>• AI-driven process optimization</li>
                                <li>• Digital transformation initiatives</li>
                                <li>• Technology integration leadership</li>
                            </ul>
                        </div>
                    </div>

                    {/* Professional Journey Highlights */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* Educational Foundation */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                            <h4 className="text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                Educational Foundation
                            </h4>
                            <p className="text-slate-600">
                                <strong>BBA Honors (Finance)</strong> from Dadabhai University of Higher Education, providing the analytical foundation for navigating complex corporate and trade environments.
                            </p>
                        </div>

                        {/* International Experience */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                            <h4 className="text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                International Exposure
                            </h4>
                            <p className="text-slate-600">
                                <strong>Pakistan Representative</strong> at ITC Trade Map training (Geneva, 2012) and <strong>Protocol Manager</strong> for ECO Delegation, coordinating international delegates from Turkey, Iran, Malaysia, and Indonesia.
                            </p>
                        </div>

                        {/* FPCCI Foundation */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                            <h4 className="text-xl font-display font-bold text-slate-900 mb-3">FPCCI Foundation (2010-2016)</h4>
                            <p className="text-slate-600 mb-3">
                                Established executive administration expertise at the Federation of Pakistan Chambers of Commerce and Industry (FPCCI), Pakistan's apex business body:
                            </p>
                            <ul className="space-y-1 text-slate-600 text-sm">
                                <li>• Executive correspondence and policy drafting</li>
                                <li>• Board administration for Office Bearers</li>
                                <li>• Electoral management for 100+ business councils</li>
                            </ul>
                        </div>

                        {/* Future-Ready Skills */}
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl shadow-md border border-primary/20">
                            <h4 className="text-xl font-display font-bold text-slate-900 mb-3">Future-Ready Transformation</h4>
                            <p className="text-slate-700">
                                Proactively future-proofed skill set through <strong>advanced AI training</strong> (Governor Sindh Initiative, 2023), achieving <strong>95th percentile</strong> in Generative AI and Agentic AI. Now pioneering AI integration in trade body operations.
                            </p>
                        </div>
                    </div>

                    {/* Value Proposition */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary mt-8">
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 text-center">What I Bring to Organizations</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h5 className="font-semibold text-primary mb-2">Traditional Excellence</h5>
                                <ul className="space-y-1 text-slate-600 text-sm">
                                    <li>✓ 15+ years executive administration</li>
                                    <li>✓ Proven governance & compliance leadership</li>
                                    <li>✓ International stakeholder management</li>
                                    <li>✓ Strategic policy development</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold text-accent mb-2">Future-Ready Innovation</h5>
                                <ul className="space-y-1 text-slate-600 text-sm">
                                    <li>✓ AI-driven process optimization</li>
                                    <li>✓ Digital transformation expertise</li>
                                    <li>✓ Technology integration leadership</li>
                                    <li>✓ Continuous learning mindset</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
