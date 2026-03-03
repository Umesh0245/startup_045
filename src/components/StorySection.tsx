import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Cpu, Code2, ShieldCheck, Zap, Server, Award, Plus, Sparkles } from 'lucide-react';

export default function StorySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Animation variants
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    const principles = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
            title: "Absolute Security",
            desc: "Zero-trust architecture from day one. Military-grade encryption, automated pentesting, and immutable transaction logs protecting every layer."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Zero Latency",
            desc: "Global edge point distribution and V8 isolate execution. We eliminate wait times to guarantee software that reacts instantly to human intent."
        },
        {
            icon: <Cpu className="w-8 h-8 text-indigo-400" />,
            title: "Hardware Symbiosis",
            desc: "We don't just write code; we respect the silicon. Memory-safe languages and strict resource allocation mean your app flies even on older devices."
        },
        {
            icon: <Code2 className="w-8 h-8 text-pink-400" />,
            title: "Artisanal Logic",
            desc: "No bloated templates. No unnecessary abstractions. Every line of code is handwritten, rigidly tested, and mathematically optimized."
        }
    ];

    return (
        <div ref={containerRef} className="bg-white text-gray-900 selection:bg-indigo-500/30 font-sans relative overflow-hidden transition-colors duration-1000">
            {/* Ambient Backgrounds - Light Mode */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_20%,transparent_100%)]" />
            </div>

            {/* Stunning Hero Section */}
            <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-12 z-10 w-full">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">

                    <motion.div
                        custom={0} initial="hidden" animate="visible" variants={fadeUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 backdrop-blur-md text-gray-600 tracking-widest text-[10px] font-bold uppercase shadow-sm mb-10"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> SynVoke Studio Origins
                    </motion.div>

                    <motion.h1
                        initial="hidden" animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
                        }}
                        className="text-6xl md:text-[8rem] lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.9] text-gray-900 mb-8"
                    >
                        <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="inline-block mr-3 md:mr-6">The</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="inline-block mr-3 md:mr-6">Art</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="inline-block">of</motion.span>
                        <br />
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 italic block mt-2 pb-6 pr-6 drop-shadow-sm"
                        >
                            Engineering.
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        custom={2} initial="hidden" animate="visible" variants={fadeUp}
                        className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mb-20"
                    >
                        We reject the ordinary. We build highly performant, mathematically precise, incredibly beautiful software architectures that define the future.
                    </motion.p>

                    {/* Profound Abstract Animation: Telemetry Topology */}
                    <motion.div
                        custom={3} initial="hidden" animate="visible" variants={fadeUp}
                        className="w-full aspect-[21/9] md:aspect-[2.5/1] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(79,70,229,0.1)] bg-[#050505] group"
                    >
                        {/* Architectural Static Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

                        {/* Topographic Data Flow */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                            {/* Horizontal Backbone */}
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
                            <motion.div animate={{ left: ["-10%", "110%"] }} transition={{ duration: 3, ease: "linear", repeat: Infinity }} className="absolute top-[calc(50%-1.5px)] w-24 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_10px_#818cf8]" />
                            <motion.div animate={{ left: ["110%", "-10%"] }} transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 1 }} className="absolute top-[calc(50%-1.5px)] w-32 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_10px_#c084fc]" />

                            {/* Hexagonal/Square Master Node */}
                            <div className="relative z-10">
                                {/* Outer bounding box */}
                                <div className="absolute inset-[-40px] border border-white/5 rounded-2xl group-hover:border-indigo-500/20 transition-colors duration-700 bg-[#080808]/50 backdrop-blur-md" />

                                {/* Core Processing Unit Wrapper */}
                                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gray-950 border border-white/10 rounded-xl flex items-center justify-center shadow-2xl overflow-hidden group-hover:border-indigo-500/50 transition-colors duration-500">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl group-hover:opacity-100 transition-opacity duration-500 opacity-0" />

                                    <div className="w-12 h-12 border border-indigo-500/30 rounded flex items-center justify-center relative bg-[#050505]">
                                        <div className="absolute inset-0 bg-indigo-500/10 animate-pulse" />
                                        <Code2 className="w-5 h-5 text-indigo-400 relative z-10" />
                                    </div>

                                    {/* Abstract read/write indicators */}
                                    <div className="absolute bottom-3 left-3 flex gap-1">
                                        <div className="w-1 h-3 bg-indigo-500/30 rounded-sm overflow-hidden"><motion.div animate={{ y: ["100%", "0%", "100%"] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} className="w-full h-full bg-indigo-400" /></div>
                                        <div className="w-1 h-3 bg-indigo-500/30 rounded-sm overflow-hidden"><motion.div animate={{ y: ["100%", "0%", "100%"] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: 0.2 }} className="w-full h-full bg-indigo-400" /></div>
                                        <div className="w-1 h-3 bg-indigo-500/30 rounded-sm overflow-hidden"><motion.div animate={{ y: ["100%", "0%", "100%"] }} transition={{ duration: 0.6, repeat: Infinity, ease: "linear", delay: 0.1 }} className="w-full h-full bg-indigo-400" /></div>
                                    </div>
                                </div>

                                {/* Branching vertical routing paths */}
                                <div className="absolute top-full left-1/2 w-[1px] h-32 bg-white/5">
                                    <motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 2, ease: "linear", repeat: Infinity, delay: 0.5 }} className="absolute left-[-1px] w-[3px] h-8 bg-gradient-to-b from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#06b6d4]" />
                                </div>
                                <div className="absolute bottom-full left-1/2 w-[1px] h-32 bg-white/5">
                                    <motion.div animate={{ bottom: ["-10%", "110%"] }} transition={{ duration: 1.5, ease: "linear", repeat: Infinity, delay: 0.2 }} className="absolute left-[-1px] w-[3px] h-8 bg-gradient-to-t from-transparent via-pink-500 to-transparent shadow-[0_0_10px_#ec4899]" />
                                </div>
                            </div>

                            {/* Surrounding Edge Nodes */}
                            <div className="absolute top-1/2 left-[15%] w-8 h-8 rounded-lg border border-white/10 bg-gray-900 -translate-y-1/2 shadow-lg flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-[pulse_2s_infinite]" />
                            </div>
                            <div className="absolute top-1/2 right-[15%] w-8 h-8 rounded-lg border border-white/10 bg-gray-900 -translate-y-1/2 shadow-lg flex items-center justify-center group-hover:border-purple-500/30 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-[pulse_2.5s_infinite]" />
                            </div>
                            <div className="absolute top-[20%] left-1/2 w-8 h-8 rounded-lg border border-white/10 bg-gray-900 -translate-x-1/2 shadow-lg flex items-center justify-center group-hover:border-pink-500/30 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-[pulse_1.5s_infinite]" />
                            </div>
                            <div className="absolute bottom-[20%] left-1/2 w-8 h-8 rounded-lg border border-white/10 bg-gray-900 -translate-x-1/2 shadow-lg flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-[pulse_3s_infinite]" />
                            </div>
                        </div>

                        {/* Meaningful Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none group-hover:via-black/5 transition-all duration-700">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-xl backdrop-blur-md bg-white/[0.02] p-5 rounded-2xl border border-white/5 border-l-2 border-l-indigo-500 shadow-2xl"
                            >
                                <h3 className="text-xl md:text-2xl font-mono uppercase tracking-widest font-bold text-white mb-2">Systems Telemetry</h3>
                                <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed">
                                    We enforce strict node arbitration and instant state replication, guaranteeing zero packet delay and flawless synchronization across the distributed computing graph.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Editorial Manifesto Section - Dropping into Darkness */}
            <div id="manifesto" className="relative z-20 py-24 bg-[#030303] text-gray-100 shadow-[0_-40px_100px_rgba(0,0,0,0.8)]">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="sticky top-40"
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8">
                                    Where Masterpieces <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 block mt-2">Are Built.</span>
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-8 shadow-[0_0_20px_rgba(79,70,229,0.5)]" />
                                <p className="text-gray-400 font-light leading-relaxed max-w-sm hidden lg:block text-lg">
                                    SynVoke Studio is not a typical agency. It is a highly specialized engineering forge where visionary founders and enterprise leaders bring their most complex ideas to be materialized into flawless digital reality.
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-7 prose prose-lg prose-invert text-gray-400 font-light leading-relaxed">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <p className="text-2xl md:text-3xl text-gray-200 mb-10 leading-snug">
                                    We don't just write code; we orchestrate digital legacies. The most ambitious projects demand profound mastery over architecture, scale, and human psychology.
                                </p>
                                <p className="mb-8">
                                    While others assemble fragile, pre-packaged templates and prioritize deployment speed over architectural substance, we forge bespoke, high-performance systems from the absolute ground up. We believe that true, category-defining products aren't merely built—they are painstakingly crafted.
                                </p>
                                <p className="mb-12">
                                    <strong className="text-white">SynVoke Studio is the crucible where category leaders emerge.</strong> From zero-latency fintech exchanges to massive spatial computing interfaces, we combine military-grade backends with breathtakingly smooth frontends. This is where the impossible is shipped daily, and where your magnum opus comes to life.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 relative z-10">
                                    <div className="bg-white/5 border border-white/20 rounded-[2rem] p-8 backdrop-blur-md relative overflow-hidden group hover:border-indigo-400 hover:shadow-[0_0_40px_rgba(79,70,229,0.25)] transition-all duration-500">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] group-hover:bg-indigo-500/20 transition-all duration-500" />
                                        <Code2 className="w-8 h-8 text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                                        <h3 className="text-xl font-bold font-display text-white mb-3">Bespoke Engineering.</h3>
                                        <p className="text-sm text-gray-400 font-light m-0 leading-relaxed">
                                            Every architecture is handcrafted specifically for your scale, completely defying the limitations of generic frameworks and fragile templates.
                                        </p>
                                    </div>
                                    <div className="bg-white/5 border border-white/20 rounded-[2rem] p-8 backdrop-blur-md relative overflow-hidden group hover:border-pink-400 hover:shadow-[0_0_40px_rgba(219,39,119,0.25)] transition-all duration-500">
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[40px] group-hover:bg-pink-500/20 transition-all duration-500" />
                                        <Sparkles className="w-8 h-8 text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                                        <h3 className="text-xl font-bold font-display text-white mb-3">Market Dominance.</h3>
                                        <p className="text-sm text-gray-400 font-light m-0 leading-relaxed">
                                            We build products that are so undeniably fast, secure, and visually stunning that they immediately outclass entire industries of competitors.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Principles Premium Grid */}
            <div id="principles" className="py-24 relative border-t border-white/5 bg-[#030303]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-SM font-mono tracking-[0.3em] font-bold uppercase text-indigo-500 mb-4">The SynVoke Studio Standard</h2>
                        <h3 className="text-5xl md:text-7xl font-display font-bold text-white">Core Dictates.</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {principles.map((p, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                className="group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/30 via-white/5 to-transparent hover:from-indigo-400 hover:via-purple-500/50 hover:to-transparent transition-all duration-700 shadow-[0_0_30px_rgba(255,255,255,0.03)] hover:shadow-[0_0_50px_rgba(79,70,229,0.3)]"
                            >
                                <div className="bg-[#080808] w-full h-full rounded-[2.4rem] p-10 md:p-14 relative overflow-hidden border border-white/5 group-hover:border-transparent transition-colors duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-indigo-500/0 group-hover:from-indigo-500/20 transition-colors duration-700" />
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                            {p.icon}
                                        </div>
                                        <h4 className="text-3xl font-display font-bold text-white mb-4">{p.title}</h4>
                                        <p className="text-gray-400 text-lg font-light leading-relaxed">{p.desc}</p>
                                    </div>
                                    <Plus className="absolute top-10 right-10 w-6 h-6 text-white/10 group-hover:text-white/30 group-hover:rotate-90 transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Engineers Section -> The definitive team representation */}
            <div className="py-24 md:py-32 relative overflow-hidden bg-[#030303]">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=100&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 filter grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/90 to-[#030303]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-20"
                    >
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/30">
                            <Code2 className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                            Built by Engineers.
                        </h2>
                        <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                            No typical founders. No bloated management. SynVoke Studio is an elite collective of pure systems engineers, technical leads, and dedicated builders orchestrating the platform of the future.
                        </p>
                    </motion.div>

                    {/* Refined compact Navigation Link to Dedicated Team Page */}
                    <div className="max-w-3xl mx-auto mt-10">
                        <motion.a
                            href="/community"
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                            className="block relative p-[1px] rounded-[2rem] bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 group hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-700 shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:shadow-[0_0_50px_rgba(79,70,229,0.3)]"
                        >
                            <div className="bg-[#050505] rounded-[1.95rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                                {/* Ambient Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-700 pointer-events-none" />

                                <div className="text-left relative z-10 flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="flex h-2.5 w-2.5 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                        </span>
                                        <p className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-bold">5 Active Engineers</p>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-500">
                                        Meet The Collective.
                                    </h3>
                                    <p className="text-gray-400 font-light pl-1 border-l-2 border-indigo-500/30 text-sm md:text-base">
                                        Deep technical profiles and structural philosophies.
                                    </p>
                                </div>

                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white text-white group-hover:text-gray-900 transition-all duration-500 shadow-xl relative z-10">
                                    <ArrowUpRight className="w-6 h-6 group-hover:scale-125 transition-transform duration-500" />
                                </div>
                            </div>
                        </motion.a>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 flex justify-center"
                    >
                        <a href="/#contact" className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 border border-white/10 hover:bg-gray-200 px-10 py-5 rounded-full font-bold text-xs tracking-widest uppercase transition-colors">
                            Start a Project <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
