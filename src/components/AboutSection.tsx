import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-4 bg-gray-50 border-b border-gray-100 overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-50"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="flex-1 w-full text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold tracking-wider text-xs uppercase mb-6 shadow-sm"
                        >
                            About Syntax Studio
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 leading-[1.1]"
                        >
                            We build <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">digital ecosystems</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
                        >
                            Syntax Studio began with a simple mission: to bridge the gap between complex technology and beautiful design. We don't just build websites; we engineer scalable products that thrive.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                <span className="font-medium text-gray-700">100% In-house Team</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                <span className="font-medium text-gray-700">Global Clientele</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <a href="/our-story" className="btn btn-primary inline-flex items-center gap-2">
                                Read Our Story <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Stats and Visuals */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none mx-auto mt-16 md:mt-24 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Main Image Container */}
                            <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white group">
                                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                                    alt="Syntax Studio Team"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Stat Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-indigo-50 w-40 md:w-48 z-20"
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-indigo-600 mb-1">150+</div>
                                <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wide">Projects Delivered</div>
                            </motion.div>

                            {/* Floating Stat Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-pink-50 w-40 md:w-48 z-20"
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold text-pink-500 mb-1">99%</div>
                                <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wide">Client Retention</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
