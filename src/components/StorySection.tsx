import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse } from 'lucide-react';

const team = [
    {
        name: 'Umesh Reddy',
        role: 'Co-Founder & Chief Technology Officer',
        desc: 'Spearheading the technological vision and architectural strategy. Specializes in designing highly scalable, resilient cloud infrastructure and sophisticated core algorithms that drive enterprise-level digital ecosystems.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop',
        styles: {
            bgGlow: 'bg-indigo-50',
            textLabel: 'text-indigo-600',
            bgLabel: 'bg-indigo-50'
        }
    },
    {
        name: 'Manoj Kumar',
        role: 'Co-Founder & Chief Growth Officer',
        desc: 'Driving global business strategy, forging high-value strategic partnerships, and accelerating market expansion. Focused on aligning technological solutions with critical business objectives to deliver measurable client success.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        styles: {
            bgGlow: 'bg-emerald-50',
            textLabel: 'text-emerald-600',
            bgLabel: 'bg-emerald-50'
        }
    },
    {
        name: 'Vamshi Krishna',
        role: 'Engineering Lead & System Architect',
        desc: 'Orchestrating the engineering lifecycle and leading high-performance development teams. Committed to establishing rigorous engineering standards, optimizing system performance, and ensuring seamless agile delivery.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
        styles: {
            bgGlow: 'bg-sky-50',
            textLabel: 'text-sky-600',
            bgLabel: 'bg-sky-50'
        }
    },
    {
        name: 'Viswagna Brahma',
        role: 'Lead UX/UI Architect & Product Designer',
        desc: 'Pioneering human-centered design strategies and crafting immersive digital experiences. Translates complex operational challenges into intuitive, pixel-perfect interfaces with sophisticated interactive experiences.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
        styles: {
            bgGlow: 'bg-pink-50',
            textLabel: 'text-pink-600',
            bgLabel: 'bg-pink-50'
        }
    }
];

export default function StorySection() {
    return (
        <React.Fragment>
            {/* Context Header */}
            <section className="relative px-4 py-20 lg:py-32 flex flex-col items-center text-center bg-white">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-8 relative z-10"
                >
                    <HeartPulse className="w-4 h-4 text-pink-500 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-600">
                        Passion Driven Engineering
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8 max-w-4xl relative z-10 leading-tight"
                >
                    We are engineers fueled by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">passion & logic.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed relative z-10"
                >
                    Syntax Studio was founded by a collective of elite software engineers united by a profound passion for technological innovation. We find our purpose in architecting performant digital ecosystems that resolve complex business challenges while delivering unparalleled value to our partners.
                </motion.p>
            </section>

            {/* The Core Team */}
            <section className="container mx-auto px-4 lg:px-6 relative z-10 my-16 bg-white py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                        Meet the Core Team
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        The elite specialists steering the vision and executing perfection across every phase of the digital lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Accent Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${member.styles.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-8 border-4 border-gray-50 bg-white shadow-sm mx-auto">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="text-center relative z-10">
                                <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <div className={`inline-block px-4 py-1.5 ${member.styles.bgLabel} ${member.styles.textLabel} rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm`}>
                                    {member.role}
                                </div>
                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                    {member.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quick CTA to work with us */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 mt-20 mb-20 text-center"
            >
                <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2098&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                            Let's build something beautiful.
                        </h2>
                        <a href="/#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform text-lg shadow-xl shadow-white/10">
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </motion.section>
        </React.Fragment>
    );
}
