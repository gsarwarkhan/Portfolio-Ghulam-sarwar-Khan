"use client";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center mb-12 text-slate-900 relative">
                    Career Journey & Professional Story
                    <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </h2>

                <div className="space-y-8">
                    {/* Introduction */}
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Ghulam Sarwar Khan's professional journey is a compelling narrative defined by
                            high-level executive administration, international diplomacy, pragmatic entrepreneurship, and a deep
                            commitment to continuous upskilling. This career trajectory uniquely positions him as a
                            <strong className="text-primary"> "Future-Ready Leader,"</strong> capable of integrating proven traditional administrative
                            competencies with cutting-edge Artificial Intelligence (AI) and process optimization.
                        </p>
                    </div>

                    {/* Journey Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        {/* Educational Foundations */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Educational Foundations</h3>
                                    <p className="text-slate-600">
                                        Mr. Khan commenced his 16 years of academic study with a BBA Honors degree, majoring in Finance
                                        from Dadabhai University of Higher Education. This strong academic base provided the crucial
                                        analytical skills required to navigate complex, high-pressure corporate environments.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FPCCI Era */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
                            <div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">The Cornerstone: FPCCI (2010–2016)</h3>
                                <p className="text-slate-600 mb-4">
                                    Starting at the Federation of Pakistan Chambers of Commerce and Industry (FPCCI), the apex
                                    body of Pakistan's business community, Mr. Khan established himself as a master of
                                    high-stakes coordination.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong>Executive Correspondence:</strong> Drafting high-level policy letters and memoranda</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong>Board Administration:</strong> Managing logistics for Office Bearers and Managing Committees</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong>Electoral Management:</strong> Organizing elections for over 100 bilateral business councils</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* International & Diplomatic */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200">
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-3">International Exposure & Diplomacy</h3>
                            <p className="text-slate-600">
                                Representative for Pakistan in the ITC Trade Map training (Geneva, 2012) and Protocol Manager
                                for the ECO Delegation, handling complex coordination for international delegates from
                                Turkey, Iran, Malaysia, and Indonesia.
                            </p>
                        </div>

                        {/* Future Proofing */}
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-primary/20">
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Future-Proofing: AI Integration</h3>
                            <p className="text-slate-700">
                                In 2023, Mr. Khan proactively future-proofed his skill set by completing advanced courses in
                                Generative AI and Agentic AI (Governor Sindh Initiative), achieving a 95th percentile. He now
                                seamlessly integrates modern technology with vast administrative experience to implement
                                AI-driven process optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
