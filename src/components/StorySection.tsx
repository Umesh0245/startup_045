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

                    {/* Breathtaking Image Reveal with HUD Overlay */}
                    <motion.div
                        custom={3} initial="hidden" animate="visible" variants={fadeUp}
                        className="w-full aspect-[21/9] md:aspect-[3/1] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(79,70,229,0.15)] bg-gray-900 group"
                    >
                        {/* Base Image */}
                        <motion.img
                            style={{ scale: scaleImage }}
                            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=100&w=2670&auto=format&fit=crop"
                            className="w-full h-full object-cover filter contrast-125 saturate-[0.8] mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 origin-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-80" />

                        {/* Interactive Tech HUD - Only visible on hover */}
                        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-black/60 backdrop-blur-[2px] flex items-center justify-center overflow-hidden">
                            {/* Scanning Grid Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,1)] animate-[scan_3s_ease-in-out_infinite]" />

                            {/* Tactical Reticles */}
                            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-indigo-500/50 transition-all duration-700 group-hover:translate-x-2 group-hover:translate-y-2 delay-100" />
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-indigo-500/50 transition-all duration-700 group-hover:-translate-x-2 group-hover:translate-y-2 delay-100" />
                            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-indigo-500/50 transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2 delay-100" />
                            <div className="absolute bottom-10 left-8 w-12 h-12 border-b-2 border-l-2 border-indigo-500/50 transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 delay-100" />

                            {/* Terminal Boot Sequence */}
                            <div className="bg-black/90 border border-indigo-500/30 p-6 rounded-lg font-mono text-xs md:text-sm text-indigo-400 w-full max-w-lg mx-6 transform translate-y-10 group-hover:translate-y-0 transition-all duration-[800ms] ease-out shadow-[0_0_50px_rgba(79,70,229,0.2)]">
                                <div className="flex gap-2 mb-4 border-b border-white/10 pb-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="space-y-3 font-medium">
                                    <p className="flex justify-between items-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-[500ms]">
                                        <span className="text-white">&gt; INITIALIZING SYNFORGE ENGINE...</span>
                                        <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">[OK]</span>
                                    </p>
                                    <p className="flex justify-between items-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-[900ms]">
                                        <span className="text-white">&gt; COMPILING RUST BINARIES...</span>
                                        <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">[0.04ms]</span>
                                    </p>
                                    <p className="flex justify-between items-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-[1300ms]">
                                        <span className="text-white">&gt; SECURING ZERO-TRUST BOUNDARY...</span>
                                        <span className="text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">[LOCKED]</span>
                                    </p>
                                    <p className="flex items-center gap-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-[1700ms] pt-2">
                                        <span className="text-emerald-400 font-bold">&gt; ARCHITECTURE SYNCHRONIZED.</span>
                                        <span className="text-indigo-400 bg-indigo-400 flex items-center justify-center w-2 h-4 animate-pulse" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Standard Base Coordinates */}
                        <div className="absolute bottom-10 left-10 flex gap-4 items-end z-20 transition-opacity duration-500 group-hover:opacity-0 hidden md:flex">
                            <div className="text-xs font-mono text-white/50 uppercase tracking-widest">
                                Location <br /><span className="text-white mt-1 block">Global Network</span>
                            </div>
                            <div className="text-xs font-mono text-white/50 uppercase tracking-widest pl-8 border-l border-white/20">
                                Foundation <br /><span className="text-white mt-1 block">2026</span>
                            </div>
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

            {/* Live Telemetry / Density Section */}
            <div className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-30" />
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { stat: "99.999%", label: "Uptime SLA", glow: "text-emerald-400" },
                            { stat: "< 50ms", label: "Global Latency", glow: "text-indigo-400" },
                            { stat: "Zero", label: "Known Breaches", glow: "text-pink-400" },
                            { stat: "100%", label: "Type Safe", glow: "text-white" }
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                            >
                                <h4 className={`text-4xl md:text-5xl font-display font-bold ${m.glow} mb-2`}>{m.stat}</h4>
                                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest group-hover:text-gray-300 transition-colors">{m.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Immersive CTA Footer */}
            <div className="py-24 md:py-32 relative overflow-hidden flex justify-center bg-[#030303]">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=100&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 filter grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-[#030303]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 text-center max-w-4xl mx-auto px-6 border border-white/20 bg-black/50 backdrop-blur-3xl p-16 md:p-24 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:border-indigo-500/50 hover:shadow-[0_0_80px_rgba(79,70,229,0.2)] transition-all duration-700"
                >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/30">
                        <Award className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                        Meet the Architects.
                    </h2>
                    <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Discover the world-class systems engineers, award-winning designers, and operational experts who power SynVoke Studio.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/community" className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-200 px-10 py-5 rounded-full font-bold text-xs tracking-widest uppercase transition-colors">
                            View Our Team
                        </a>
                        <a href="/#contact" className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-xs tracking-widest uppercase transition-colors">
                            Start a Project <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
