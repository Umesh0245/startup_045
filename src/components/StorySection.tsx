import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Cpu, Code2, ShieldCheck, Zap, Server, Award } from 'lucide-react';

export default function StorySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="bg-slate-50 min-h-[250vh] text-gray-900 selection:bg-indigo-200 font-sans relative overflow-hidden">
            {/* Elegant Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-white/70 backdrop-blur-xl border-b border-gray-200/50 transition-all">
                <a href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors text-xs font-bold tracking-widest uppercase">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Studio
                </a>
                <div className="flex gap-6 items-center">
                    <a href="#manifesto" className="text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600 transition-colors hidden md:block">Manifesto</a>
                    <a href="#principles" className="text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-indigo-600 transition-colors hidden md:block">Principles</a>
                    <a href="/community" className="text-xs font-bold tracking-widest text-white bg-gray-900 px-4 py-2 rounded-full uppercase hover:bg-indigo-600 transition-colors">The Team</a>
                </div>
            </nav>

            {/* Immersive Surprise Hero: Multi-Layered Tech Grid */}
            <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden z-10 pt-32 pb-20 px-4 mt-20 md:mt-0">

                {/* Core animated background grid */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 2 }}
                        className="w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]"
                    />
                </div>

                <div className="text-center max-w-6xl mx-auto relative z-10 w-full">
                    {/* Floating Tech Badges */}
                    <div className="flex justify-center gap-4 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-900 tracking-widest text-[10px] font-bold uppercase shadow-sm"
                        >
                            <Award className="w-3.5 h-3.5 text-indigo-600" /> The Original
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600 border border-indigo-500 text-white tracking-widest text-[10px] font-bold uppercase shadow-lg shadow-indigo-600/30"
                        >
                            <Server className="w-3.5 h-3.5" /> High-Performance Systems
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter leading-[0.85] text-gray-950 mb-12"
                    >
                        Absolute <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 italic">
                            Architecture.
                        </span>
                    </motion.h1>

                    {/* Massive Interlocking Bento Hero Graphic */}
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[400px] w-full mt-10">
                        {/* Large Image Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: -30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/50"
                        >
                            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=100&w=2000&auto=format&fit=crop" alt="Servers" className="w-full h-full object-cover filter contrast-125" />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent text-left">
                                <span className="text-white text-xs font-mono tracking-widest uppercase">Sys_Core_01</span>
                            </div>
                        </motion.div>

                        {/* Top Right Code Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="md:col-span-2 md:row-span-1 rounded-[2rem] bg-gray-950 border border-gray-800 p-6 text-left shadow-2xl overflow-hidden relative flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[40px] pointer-events-none" />
                            <p className="text-indigo-400 font-mono text-sm mb-2 opacity-80">export interface DistributedCore {'{'}</p>
                            <p className="pl-6 text-pink-400 font-mono text-xs opacity-90 mb-1">latency: '0ms';</p>
                            <p className="pl-6 text-emerald-400 font-mono text-xs opacity-90 mb-1">scaling: 'infinite';</p>
                            <p className="pl-6 text-purple-400 font-mono text-xs opacity-90">fault_tolerance: true;</p>
                            <p className="text-indigo-400 font-mono text-sm mt-2 opacity-80">{'}'}</p>
                        </motion.div>

                        {/* Bottom Metric Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-white border border-gray-200 p-6 shadow-xl flex flex-col items-center justify-center text-center group"
                        >
                            <ShieldCheck className="w-8 h-8 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-3xl font-display font-bold text-gray-900">100%</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Uptime SLA</p>
                        </motion.div>

                        {/* Bottom Image Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="md:col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden relative shadow-xl"
                        >
                            <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=100&w=1000&auto=format&fit=crop" alt="Design" className="w-full h-full object-cover filter brightness-[1.1]" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Extensive Narrative Scrolling Content */}
            <div className="relative z-20 bg-white border-t border-gray-100 shadow-[0_-30px_60px_rgba(0,0,0,0.03)] pb-40">
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-40">

                    {/* Massive Graphic Break */}
                    <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-32 shadow-2xl bg-gray-900 -mt-40 z-30 border-8 border-white group">
                        <motion.img
                            style={{ y: yParallax }}
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                            alt="Motherboard High Res"
                            className="absolute inset-0 w-full h-[150%] object-cover opacity-60 mix-blend-screen scale-110 group-hover:opacity-100 transition-opacity duration-1000"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-gray-950 to-transparent">
                            <span className="text-white font-mono text-sm tracking-widest uppercase">sys_core_architecture_v4</span>
                        </div>
                    </div>

                    {/* Manifesto / Extensive Deep Explanation Section */}
                    <div id="manifesto" className="max-w-5xl mx-auto mb-32 md:mb-48">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] tracking-tight mb-16 text-center"
                        >
                            We build software like <span className="text-indigo-600 italic">physical architecture.</span>
                        </motion.h2>

                        {/* Multi-column complex content read */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="md:col-span-5"
                            >
                                <h3 className="text-3xl font-bold font-display mb-6 border-b border-gray-200 pb-6">The Flaw in the Modern Web</h3>
                                <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                                    The internet has been overrun by fragile, pre-packaged templates. Agencies assemble components without understanding the underlying math. They prioritize deployment speed over architectural substance.
                                </p>
                                <p className="text-xl text-gray-600 font-light leading-relaxed">
                                    This results in platforms that inevitably fracture when subjected to actual global scale. We fundamentally reject this entire approach. We are purists.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="md:col-span-7 bg-slate-50 p-10 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm"
                            >
                                <h3 className="text-3xl font-bold font-display mb-8">The SynForge Solution</h3>

                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center"><Server className="w-6 h-6" /></div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Deep Systems Design</h4>
                                            <p className="text-gray-500 leading-relaxed font-light">We originate at the database layer. Schema design, edge-computed routing, and immensely scalable microservices form the absolute bedrock of what we deliver.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center"><Code2 className="w-6 h-6" /></div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Artisanal Code Tying</h4>
                                            <p className="text-gray-500 leading-relaxed font-light">Every single line of code is handwritten, rigorously peer-reviewed, strictly type-checked, and immensely optimized for performance metrics.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Principles Bento Grid */}
                    <div id="principles" className="mb-32 md:mb-48">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Our Core Dictates</h2>
                            <p className="text-gray-500 mt-4 text-xl">The unbending rules by which we engineer.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

                            <motion.div
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                                className="md:col-span-2 bg-gray-900 border border-gray-800 rounded-[2rem] p-10 text-white relative overflow-hidden group shadow-xl"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] group-hover:bg-emerald-500/30 transition-colors" />
                                <ShieldCheck className="w-10 h-10 text-emerald-400 mb-6" />
                                <h3 className="text-3xl font-display font-bold mb-4">Unbreachable Security</h3>
                                <p className="text-gray-400 text-lg font-light max-w-lg">Military-grade encryption, automated penetration testing, and absolute data integrity validation built into every data transaction we process.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                                className="bg-white border border-gray-200 rounded-[2rem] p-10 shadow-lg hover:shadow-xl transition-shadow group"
                            >
                                <Zap className="w-10 h-10 text-yellow-500 mb-6" />
                                <h3 className="text-2xl font-display font-bold mb-4">Zero Latency</h3>
                                <p className="text-gray-500 font-light">Global edge distribution guarantees software that reacts instantaneously.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                                className="bg-indigo-600 border border-indigo-500 rounded-[2rem] p-10 text-white shadow-xl hover:bg-indigo-700 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-[50px] mix-blend-overlay" />
                                <Cpu className="w-10 h-10 text-indigo-100 mb-6" />
                                <h3 className="text-2xl font-display font-bold mb-4">Hardware Symbiosis</h3>
                                <p className="text-indigo-100 font-light max-w-sm">We code explicitly respecting the exact hardware limits of the end-user device.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                                className="md:col-span-2 bg-slate-50 border border-gray-200 rounded-[2rem] p-10 relative overflow-hidden group shadow-lg"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Mathematical UI</h3>
                                        <p className="text-gray-600 text-lg font-light leading-relaxed">Design is not just visual; it is structural. We enforce strict geometric harmony, ensuring flawless responsiveness from gigantic 4k displays down to the simplest mobile viewports.</p>
                                    </div>
                                    <div className="w-48 h-48 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform">
                                        <svg viewBox="0 0 100 100" className="w-24 h-24 fill-current">
                                            <rect x="10" y="10" width="80" height="80" rx="10" fill="none" stroke="currentColor" strokeWidth="4" />
                                            <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                                            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Final CTA / Manifesto Closing linking to Community */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-900 p-10 md:p-16 rounded-[3rem] shadow-2xl max-w-5xl w-full text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
                            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight relative z-10">
                                Meet the Architects.
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light relative z-10">
                                Discover the world-class systems engineers, award-winning designers, and operational experts who power SynForge.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <a href="/community" className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-indigo-50 hover:scale-105 transition-transform px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase shadow-xl">
                                    View Our Team
                                </a>
                                <a href="/#contact" className="inline-flex items-center justify-center gap-3 bg-transparent border border-gray-700 text-white hover:border-gray-500 px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-colors">
                                    Start a Project <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
