import React from 'react';

interface TestimonialProps {
    quote: string;
    author: string;
    position: string;
}

const Testimonials = () => {
    const testimonials: TestimonialProps[] = [
        {
            quote: "Ghulam's leadership at the Pakistan Tea Association has been transformative, especially in standardizing our institutional documentation.",
            author: "Placeholder Name",
            position: "Executive Committee Member"
        },
        {
            quote: "His vision for integrating AI into trade governance is exactly what the industry needs for modern compliance.",
            author: "Placeholder Name",
            position: "Stakeholder Partner"
        }
    ];

    return (
        <section id="testimonials" className="bg-white py-20 dark:bg-slate-900">
            <div className="section-container">
                <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Testimonials</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {testimonials.map((t, index) => (
                        <div key={index} className="rounded-2xl bg-slate-50 p-8 shadow-sm dark:bg-slate-800">
                            <p className="mb-6 text-lg italic text-secondary dark:text-slate-300">
                                "{t.quote}"
                            </p>
                            <div>
                                <p className="font-bold text-primary dark:text-white">{t.author}</p>
                                <p className="text-sm font-medium text-accent">{t.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
