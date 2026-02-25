import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Layout, Server, ShieldCheck, Terminal, Cpu, Database } from 'lucide-react';

const themeMap = {
    emerald: { glow: "bg-emerald-500/20", text: "text-emerald-500", border: "border-emerald-500/30", bgAccent: "bg-emerald-500/10", button: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/25", Icon: Server },
    indigo: { glow: "bg-indigo-500/20", text: "text-indigo-400", border: "border-indigo-500/30", bgAccent: "bg-indigo-500/10", button: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/25", Icon: Layout },
    purple: { glow: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30", bgAccent: "bg-purple-500/10", button: "bg-purple-600 hover:bg-purple-700 shadow-purple-600/25", Icon: Terminal },
    pink: { glow: "bg-pink-500/20", text: "text-pink-400", border: "border-pink-500/30", bgAccent: "bg-pink-500/10", button: "bg-pink-500 hover:bg-pink-600 shadow-pink-500/25", Icon: ShieldCheck }
};

export default function ServiceDetail({ title, category, description, theme, heroImage, methodologies, techStack }: any) {
    const { glow, text, border, bgAccent, button, Icon } = themeMap[theme as keyof typeof themeMap];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#030712] text-gray-200 selection:bg-indigo-500/30 overflow-hidden font-sans">

            {/* Extremely detailed technical background */}
            <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${glow} rounded-full blur-[180px] pointer-events-none opacity-50`} />
            <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${glow} rounded-full blur-[150px] pointer-events-none opacity-30`} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Top Navigation */}
            <nav className="relative z-50 w-full px-6 py-8 max-w-7xl mx-auto flex items-center justify-between">
                <a href="/#services" className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all group tracking-widest text-xs font-bold uppercase">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-x-1 group-hover:border-white/30 transition-all">
                        <ArrowLeft className="w-3.5 h-3.5" />
                    </div>
                    Service Modules
                </a>
                <div className={`px-4 py-1.5 rounded-full ${bgAccent} border ${border} ${text} text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    System Live
                </div>
            </nav>

            {/* Immersive Parallax Hero */}
            <motion.div style={{ y: headerY, opacity: headerOpacity }} className="relative z-10 pt-16 pb-32 px-4 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${bgAccent} border ${border} mb-8 shadow-2xl backdrop-blur-md`}
                >
                    <Icon className={`w-8 h-8 ${text}`} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-[7rem] font-display font-medium text-white tracking-tighter leading-[1] mb-8 drop-shadow-lg"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto"
                >
                    {description}
                </motion.p>
            </motion.div>

            {/* Cinematic Hero Visualization */}
            <div className="relative z-20 px-4 md:px-8 max-w-[90rem] mx-auto -mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full aspect-[16/9] md:aspect-[2.3/1] rounded-[2rem] overflow-hidden border border-white/10 bg-gray-900 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group`}
                >
                    <motion.img
                        style={{ scale: imageScale }}
                        src={heroImage}
                        alt={title}
                        className="w-full h-full object-cover filter brightness-[0.8] contrast-125 group-hover:brightness-100 transition-all duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Overlay Tech Metrics */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div className="flex gap-4">
                            <div className="backdrop-blur-xl bg-black/40 border border-white/10 px-6 py-4 rounded-2xl">
                                <span className={`block text-xs uppercase tracking-widest font-bold ${text} mb-1`}>Protocol</span>
                                <span className="text-white font-mono text-xl">v4.0.2</span>
                            </div>
                            <div className="backdrop-blur-xl bg-black/40 border border-white/10 px-6 py-4 rounded-2xl hidden md:block">
                                <span className={`block text-xs uppercase tracking-widest font-bold ${text} mb-1`}>Status</span>
                                <span className="text-white font-medium text-xl flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Optimal</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Deep Technical Breakdown */}
            <div className="relative z-20 pt-32 pb-48 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12 border-b border-gray-800/50 pb-16">
                    <div className="max-w-2xl">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgAccent} border ${border} ${text} text-[10px] font-bold tracking-widest uppercase mb-6`}>
                            <Database className="w-3 h-3" /> Core Methodology
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] text-white">
                            Architectural <br />
                            <span className={text}>Precision.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-gray-400 text-lg md:text-xl font-light leading-relaxed pt-2">
                        We don't assemble pieces. We engineer cohesive, distributed systems explicitly designed to seamlessly scale globally from day one.
                    </p>
                </div>

                {/* Astonishing Architectural Spine Timeline */}
                <div className="relative max-w-6xl mx-auto mt-20">
                    {/* The Connecting Spine */}
                    <div className={`absolute top-0 bottom-0 left-[1.5rem] md:left-1/2 w-[1px] ${glow} transform md:-translate-x-1/2 hidden sm:block`} />

                    {methodologies.map((method: any, idx: number) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 lg:gap-24 mb-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
                            >
                                {/* Center Node on Spine */}
                                <div className={`absolute left-[1.5rem] md:left-1/2 w-4 h-4 rounded-full bg-[#030712] border-2 ${border} transform -translate-x-1/2 hidden sm:flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-150 group-hover:${bgAccent}`}>
                                    <div className={`w-1 h-1 rounded-full ${glow} animate-ping`} />
                                </div>

                                {/* Deep Content Block */}
                                <div className={`flex-1 w-full pl-16 sm:pl-0 md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full ${bgAccent} border ${border} ${text} text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current" /> Phase <span className="font-mono">0{idx + 1}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 leading-[1.15]">{method.title}</h3>
                                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                                        {method.desc}
                                    </p>
                                </div>

                                {/* Massive Visual Block */}
                                <div className="flex-1 w-full md:w-1/2 relative">
                                    <div className={`w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-900 border border-white/5 relative shadow-2xl group-hover:border-${theme}-500/30 transition-colors duration-700`}>
                                        <div className={`absolute inset-0 ${glow} opacity-0 group-hover:opacity-30 transition-opacity duration-1000 z-10 mix-blend-color`} />
                                        <img src={method.image} className="w-full h-full object-cover filter contrast-125 brightness-[0.7] group-hover:brightness-[1.1] group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]" alt={method.title} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90 pointer-events-none z-10" />

                                        {/* Precision Target Overlay */}
                                        <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">
                                            <div className="font-mono text-[10px] text-white/70 uppercase tracking-widest backdrop-blur-md bg-black/40 border border-white/10 px-4 py-2 rounded-xl">
                                                Active Node // <span className={text}>{method.title.substring(0, 8)}...</span>
                                            </div>
                                            <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md`}>
                                                <div className={`w-2 h-2 rounded-full ${bgAccent}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Astonishing Tech Stack visualization */}
            <div className={`relative z-20 py-32 bg-[#050914] overflow-hidden`}>
                <div className="absolute inset-0 border-y border-white/5">
                    <div className={`absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] z-10`} />
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${glow} rounded-full blur-[150px] pointer-events-none opacity-20`} />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-20">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className={`w-16 h-16 mx-auto rounded-2xl ${bgAccent} border ${border} flex items-center justify-center mb-8 shadow-2xl shadow-${theme}-500/20`}>
                            <Terminal className={`w-8 h-8 ${text}`} />
                        </div>
                        <h3 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">Engineered Layers</h3>
                        <p className="text-gray-400 text-xl font-light leading-relaxed">
                            The precise matrix of battle-tested technologies our engineers utilize to guarantee peak performance.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {techStack.map((tech: string, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                                className={`px-8 py-4 md:py-5 rounded-full bg-white/5 border border-white/10 hover:border-${theme}-500/50 hover:bg-white/10 transition-all shadow-xl backdrop-blur-md group relative overflow-hidden flex items-center gap-4 cursor-pointer`}
                            >
                                <div className={`absolute inset-0 ${bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className={`w-2 h-2 rounded-full ${glow} group-hover:animate-ping relative z-10`} />
                                <span className="text-gray-300 font-mono text-sm md:text-base tracking-widest uppercase group-hover:text-white transition-colors relative z-10">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ultimate Bottom CTA */}
            <div className="relative z-20 py-40 px-4 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`p-[1px] rounded-[3rem] bg-gradient-to-b ${border} to-transparent inline-block w-full`}
                >
                    <div className="bg-[#030712] p-16 md:p-24 rounded-[3rem] relative overflow-hidden">
                        <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] ${glow} rounded-full blur-[100px] pointer-events-none opacity-50`} />
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8 tracking-tight relative z-10">Architect your future.</h2>
                        <button className={`px-12 py-5 rounded-full text-white font-bold tracking-widest uppercase text-sm inline-flex items-center gap-4 transition-all hover:scale-105 shadow-xl relative z-10 ${button}`}>
                            Initiate Protocol <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
