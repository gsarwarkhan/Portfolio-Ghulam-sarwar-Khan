import React from 'react';

const LeadershipHighlights = () => {
    const highlights = [
        {
            title: "Governance & Trade Policy",
            description: "Leading strategic policy correspondence and regulatory compliance at the national level for the tea industry.",
            icon: "⚖️"
        },
        {
            title: "Institutional Process Improvement",
            description: "Standardizing documentation and streamlining membership compliance to enhance organizational efficiency.",
            icon: "📊"
        },
        {
            title: "Compliance & Documentation",
            description: "Creating robust frameworks for trade governance and stakeholder reporting accuracy.",
            icon: "📝"
        },
        {
            title: "AI & Digital Systems Adoption",
            description: "Driving the integration of Generative AI and modern digital tools into traditional executive workflows.",
            icon: "🤖"
        }
    ];

    return (
        <section id="highlights" className="bg-white py-20 dark:bg-slate-900">
            <div className="section-container">
                <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl text-primary dark:text-white">
                    Leadership Highlights
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item, index) => (
                        <div key={index} className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:-translate-y-2 hover:bg-white hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/50 dark:hover:bg-slate-800">
                            <div className="mb-6 text-4xl">{item.icon}</div>
                            <h3 className="mb-4 text-xl font-bold text-primary dark:text-white group-hover:text-accent">
                                {item.title}
                            </h3>
                            <p className="text-secondary dark:text-slate-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipHighlights;
