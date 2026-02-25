import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Fingerprint, Sparkles, Code2, ArrowRight } from 'lucide-react';

export default function AboutSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
            {/* Elegant light mode background glows */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-50 rounded-full blur-[100px] pointer-events-none" />

            {/* Subtle light grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-7xl">

                <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">

                    {/* Left Typography & Content */}
                    <div className="flex-1 w-full relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 tracking-widest text-[10px] font-bold uppercase mb-8 shadow-sm"
                        >
                            <Sparkles className="w-3.5 h-3.5" /> Inside SynVoke Studio
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.05] tracking-tight mb-8"
                        >
                            Beyond <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                                Ordinary Engineering.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-xl text-gray-600 leading-relaxed max-w-xl mb-12 font-light"
                        >
                            We are an elite collective of systems architects, creative developers, and product strategists. We reject generic templates to build high-performance, bespoke digital architectures.
                        </motion.p>

                        {/* Interactive Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {[
                                { icon: Cpu, title: "Deep Tech", desc: "Complex systems made simple.", color: "indigo" },
                                { icon: Fingerprint, title: "Bespoke Design", desc: "Unique identity engineering.", color: "pink" }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    onHoverStart={() => setHoveredCard(idx)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                    className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                                >
                                    <div className="relative z-10 flex flex-col gap-4">
                                        <div className={`w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-${feature.color}-50 group-hover:text-${feature.color}-500 transition-colors`}>
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mb-1">{feature.title}</h5>
                                            <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-${feature.color}-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <a href="/our-story" className="inline-flex items-center gap-3 bg-gray-900 border border-transparent hover:border-gray-900 hover:bg-white text-white hover:text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group">
                                Uncover Our Philosophy
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Immersive Premium Display */}
                    <div className="flex-1 w-full relative h-[600px] flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, rotateZ: 5, scale: 0.9, y: 40 }}
                            whileInView={{ opacity: 1, rotateZ: 2, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                            className="absolute w-full max-w-lg aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                className="w-full h-full object-cover filter brightness-[1.05] contrast-105 group-hover:scale-105 transition-all duration-1000"
                                alt="Premium Tech Studio"
                            />
                        </motion.div>

                        {/* Floating Metric Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            whileInView={{ opacity: 1, x: 20, y: 80 }}
                            whileHover={{ y: 70 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute right-0 bottom-1/4 z-20 bg-white/80 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-xl w-64"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-xl">1M+</p>
                                    <p className="text-gray-500 text-xs tracking-wider uppercase font-bold">Lines Deployed</p>
                                </div>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "85%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                                    className="h-full bg-indigo-500 rounded-full"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Status Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: -50 }}
                            whileInView={{ opacity: 1, x: -40, y: -60 }}
                            whileHover={{ y: -70 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="absolute left-0 top-1/4 z-20 bg-gray-900 border border-gray-800 p-4 rounded-xl shadow-2xl flex items-center gap-3"
                        >
                            <span className="flex relative h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-white text-xs font-mono uppercase tracking-widest font-bold">Systems Optimal</span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
