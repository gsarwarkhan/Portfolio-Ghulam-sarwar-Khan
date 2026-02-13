"use client";

import { useState } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xpzgwqjq', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center mb-16 text-slate-900 dark:text-white relative">
                    Get In Touch
                    <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-transparent dark:border-slate-800">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h4>
                                <p className="text-slate-600 dark:text-slate-400">{CONTACT_INFO.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-transparent dark:border-slate-800">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h4>
                                <p className="text-slate-600 dark:text-slate-400">{CONTACT_INFO.email}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-transparent dark:border-slate-800">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h4>
                                <p className="text-slate-600 dark:text-slate-400">{CONTACT_INFO.location}</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">Connect With Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, color: 'from-blue-600 to-blue-700' },
                                    { name: 'Facebook', href: SOCIAL_LINKS.facebook, color: 'from-blue-500 to-blue-600' },
                                    { name: 'YouTube', href: SOCIAL_LINKS.youtube, color: 'from-red-600 to-red-700' },
                                    { name: 'GitHub', href: SOCIAL_LINKS.github, color: 'from-gray-700 to-gray-800' },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${social.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md border border-transparent dark:border-slate-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none dark:text-white"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                                    Failed to send message. Please try again or contact me directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
