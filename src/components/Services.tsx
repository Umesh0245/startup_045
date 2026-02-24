import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Terminal, ShieldCheck, ArrowRight, Activity, Cpu } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative z-20 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-6xl">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-white text-[10px] font-bold tracking-widest uppercase mb-6 shadow-md"
                        >
                            <Cpu className="w-3.5 h-3.5 text-pink-400" /> Core Capabilities
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 tracking-tight leading-none mb-6"
                        >
                            Engineering the <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Exceptional.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-gray-500 leading-relaxed max-w-2xl"
                        >
                            We don't just build websites. We architect profound, deeply integrated enterprise platforms that completely redefine user expectations and scale limitlessly.
                        </motion.p>
                    </div>
                </div>

                {/* Asymmetrical Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 auto-rows-fr">

                    {/* Card 1: Enterprise Architecture (Wide Dark Card) */}
                    <motion.a
                        href="/services/architecture"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-1 md:col-span-2 group p-6 lg:p-8 rounded-[1.5rem] bg-gray-950 border border-gray-900 hover:border-gray-800 transition-all duration-500 relative overflow-hidden flex flex-col justify-between shadow-xl cursor-pointer"
                    >
                        {/* Internal Neon Glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700 -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-500">
                                <Server className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">High-Performance Architecture</h3>
                            <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                                We engineer immensely scalable cloud ecosystems utilizing distributed edge infrastructure. Our backends smoothly process millions of concurrent transactions with absolute zero latency and military test resilience.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 flex items-center text-emerald-400 font-bold text-xs tracking-widest uppercase gap-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                            Explore Systems <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </div>
                    </motion.a>

                    {/* Card 2: UI/UX Engineering (Square Glass Card with Real-time Component Animation) */}
                    <motion.a
                        href="/services/ui-ux"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 md:col-span-1 group p-6 lg:p-8 rounded-[1.5rem] bg-indigo-50/50 border border-indigo-100/50 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-600/10 flex flex-col justify-between relative overflow-hidden cursor-pointer"
                    >
                        {/* Real-time Cinematic UI Mockup Component */}
                        <div className="absolute -bottom-16 -right-16 md:-bottom-12 md:-right-12 w-[130%] sm:w-[110%] h-[220px] bg-[#0A0A0B] rounded-tl-2xl border-t border-l border-white/10 shadow-[0_-20px_60px_rgba(0,0,0,0.15)] flex p-5 gap-4 transform rotate-6 scale-[0.80] opacity-40 group-hover:opacity-100 group-hover:rotate-[-2deg] group-hover:scale-[0.9] group-hover:-translate-y-8 group-hover:-translate-x-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-0">

                            {/* Futuristic Sidebar */}
                            <div className="w-12 h-full bg-gray-900/80 rounded-xl border border-white/5 flex flex-col items-center py-5 gap-5 shadow-inner">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 mb-2 shadow-lg shadow-indigo-500/20"></div>
                                <div className="w-4 h-4 rounded-md bg-gray-800 transition-colors"></div>
                                <div className="w-4 h-4 rounded-md bg-gray-800 transition-colors"></div>
                                <div className="w-4 h-4 rounded-md bg-pink-500/20 border border-pink-500/50 transition-colors block"></div>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 flex flex-col gap-5 pt-2">
                                {/* Top Nav Activity */}
                                <div className="w-full flex justify-between items-center px-1">
                                    <div className="w-32 h-4 bg-gray-800/80 rounded-full"></div>
                                    <div className="flex gap-3">
                                        <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                                        <div className="w-10 h-4 rounded-full bg-indigo-500/20 border border-indigo-500/30"></div>
                                    </div>
                                </div>

                                {/* Complex Grid Area */}
                                <div className="flex gap-5 h-full">
                                    {/* Main Chart Card */}
                                    <div className="flex-[2] bg-gray-900/80 rounded-xl border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative shadow-md">
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-500/10 to-transparent"></div>
                                        <div className="w-20 h-2 bg-gray-800/80 rounded-full mb-2 z-10"></div>

                                        {/* Animated Sine Graph / Line Chart */}
                                        <div className="flex items-end gap-[4px] h-20 w-full z-10 mt-auto">
                                            {[30, 45, 35, 60, 40, 70, 50, 85, 65, 90, 75, 100].map((h, i) => (
                                                <div
                                                    key={i}
                                                    style={{ height: `${h}%` }}
                                                    className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm shadow-[0_0_10px_rgba(79,70,229,0.3)] origin-bottom transform scale-y-50 group-hover:scale-y-100 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Side Info Cards */}
                                    <div className="flex-1 flex flex-col gap-4">
                                        <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 shadow-lg shadow-indigo-500/20 relative overflow-hidden group/card flex flex-col justify-between">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-xl mix-blend-overlay transform group-hover/card:scale-150 transition-transform duration-700"></div>
                                            <div className="w-12 h-2.5 bg-white/40 rounded-full mb-2"></div>
                                            <div className="w-full flex gap-1">
                                                <div className="w-1/3 h-5 bg-white/90 rounded-md mt-auto shadow-sm"></div>
                                                <div className="w-1/3 h-3 bg-white/40 rounded-md mt-auto shadow-sm"></div>
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-gray-900/80 rounded-xl border border-white/5 p-2 flex items-center justify-center relative overflow-hidden">
                                            {/* Circular Progress Mock */}
                                            <svg viewBox="0 0 36 36" className="w-12 h-12 transform -rotate-90">
                                                <path
                                                    className="text-gray-800"
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none" stroke="currentColor" strokeWidth="3"
                                                />
                                                <path
                                                    className="text-pink-500"
                                                    strokeDasharray="0,100"
                                                    style={{ transition: 'stroke-dasharray 1000ms cubic-bezier(0.16, 1, 0.3, 1) 300ms' }}
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none" stroke="currentColor" strokeWidth="3"
                                                />
                                                <style>{`.group:hover path { stroke-dasharray: 75, 100; }`}</style>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Relative z-10 for Text over Mockup */}
                        <div className="relative z-10 bg-white/40 backdrop-blur-sm rounded-2xl p-4 -m-4 group-hover:bg-transparent group-hover:backdrop-blur-none transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-indigo-600 transition-all duration-500 shadow-sm">
                                <Layout className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4 mix-blend-multiply group-hover:mix-blend-normal z-20 relative">UI/UX Engineering</h3>
                            <p className="text-gray-700 text-base leading-relaxed font-medium mix-blend-multiply flex-1 drop-shadow-sm group-hover:text-gray-500 mb-1 z-20 relative transition-colors duration-500">
                                Translating extreme business complexity into stunning, human-centered interfaces with uncompromising pixel-perfect implementation.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 flex items-center text-indigo-700 font-bold text-xs tracking-widest uppercase gap-2 group-hover:gap-3 transition-all duration-300">
                            View Designs <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </motion.a>

                    {/* Card 3: DevOps (Square Accent Card) */}
                    <motion.a
                        href="/services/devops"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 md:col-span-1 group p-6 lg:p-8 rounded-[1.5rem] bg-indigo-600 border border-indigo-500 transition-all duration-500 shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 flex flex-col justify-between relative overflow-hidden cursor-pointer"
                    >
                        {/* Deep accent glow */}
                        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-500 rounded-full blur-[50px] pointer-events-none group-hover:bg-indigo-400 transition-colors duration-700" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/50 border border-indigo-400 flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-105 transition-transform duration-500">
                                <Terminal className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">DevOps & CI/CD</h3>
                            <p className="text-indigo-100 text-base leading-relaxed">
                                Extreme automated pipelines ensuring frictionless, infinitely repeatable, and highly secure deployment cycles globally.
                            </p>
                        </div>
                    </motion.a>

                    {/* Card 4: Security (Wide Light Card) */}
                    <motion.a
                        href="/services/security"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1 md:col-span-2 group p-6 lg:p-8 rounded-[1.5rem] bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-500 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
                    >
                        {/* Watermark Icon */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 p-8 opacity-[0.03] group-hover:opacity-[0.06] group-hover:-translate-x-3 transition-all duration-700 pointer-events-none">
                            <ShieldCheck className="w-64 h-64 text-gray-900" />
                        </div>

                        <div className="relative z-10 w-full md:w-3/4">
                            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 group-hover:border-pink-200 transition-transform duration-500">
                                <Activity className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">Enterprise Core Security</h3>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Multi-layered vulnerability testing, AES-256 end-to-end encryption, and rigorous OAuth2/JWT protocol integrations explicitly designed to protect your most critical business and user data against massive threat vectors.
                            </p>
                        </div>
                    </motion.a>

                </div>
            </div>
        </section>
    );
}
