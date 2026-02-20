import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, TestTube2, Cpu, Search, Terminal, LayoutDashboard } from 'lucide-react';

const phases = [
    {
        id: '01',
        title: 'System Architecture',
        category: 'Discovery Phase',
        icon: Search,
        accent: 'from-indigo-500 to-blue-600',
        textColor: 'text-indigo-400',
        content: 'We dive deep into your requirements, defining highly-scalable system architectures, robust database schemas, and strictly typed environments.',
        visual: (
            <div className="bg-gray-900 border border-indigo-500/30 rounded-2xl p-5 shadow-2xl w-full font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-gray-500 opacity-80">schema_design.ts</span>
                </div>
                <div className="space-y-2 text-gray-300">
                    <p><span className="text-pink-500">export interface</span> <span className="text-indigo-400">SystemCore</span> {'{'}</p>
                    <p className="pl-6"><span className="text-teal-400">authService</span>: <span className="text-yellow-300">OAuth2Provider</span>;</p>
                    <p className="pl-6"><span className="text-teal-400">database</span>: <span className="text-green-400">'PostgreSQL'</span> | <span className="text-green-400">'Redis'</span>;</p>
                    <p className="pl-6"><span className="text-teal-400">workers</span>: <span className="text-blue-300">ClusterManager</span>[];</p>
                    <p>{'}'}</p>
                    <p className="mt-4 text-gray-500 italic">// Core initialized in 0.4ms</p>
                </div>
            </div>
        )
    },
    {
        id: '02',
        title: 'UI/UX Engineering',
        category: 'Design Phase',
        icon: PenTool,
        accent: 'from-pink-500 to-rose-600',
        textColor: 'text-pink-400',
        content: 'High-fidelity tokens, interactive micro-animations, and complete design systems are established to guarantee a pixel-perfect, human-first UX.',
        visual: (
            <div className="w-full bg-gray-900 border border-pink-500/30 p-4 rounded-2xl grid gap-4">
                {/* Navbar mock */}
                <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded-xl border border-gray-700">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                    <div className="flex gap-2">
                        <div className="w-12 h-2 rounded-full bg-gray-700" />
                        <div className="w-16 h-2 rounded-full bg-gray-600" />
                    </div>
                </div>
                {/* Dashboard mock */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-gray-800/50 rounded-xl border border-gray-700 h-32 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-pink-500" />
                        <LayoutDashboard className="w-8 h-8 text-pink-500/50" />
                    </div>
                    <div className="col-span-2 grid grid-rows-2 gap-4">
                        <div className="bg-gradient-to-r from-gray-800 to-gray-800/50 rounded-xl border border-gray-700" />
                        <div className="flex gap-4">
                            <div className="flex-1 bg-gray-800/50 rounded-xl border border-gray-700" />
                            <div className="flex-1 bg-gray-800/50 rounded-xl border border-gray-700" />
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: '03',
        title: 'Agile Development',
        category: 'Execution Phase',
        icon: Code2,
        accent: 'from-emerald-400 to-teal-500',
        textColor: 'text-emerald-400',
        content: 'Engineers transform designs into robust code using React, Node, and modern stacks. Continuous CI/CD deployment ensures safe iteration.',
        visual: (
            <div className="bg-black border border-emerald-500/30 p-5 rounded-2xl shadow-lg w-full font-mono text-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 shadow-[0_0_20px_rgba(52,211,153,1)] bg-gradient-to-r from-emerald-400 to-teal-500" />
                <div className="flex items-center gap-3 mb-4 text-emerald-400 opacity-80 border-b border-gray-800 pb-3">
                    <Terminal className="w-5 h-5" />
                    <span>bash ~ build-process</span>
                </div>
                <div className="space-y-3 text-gray-400 text-xs md:text-sm">
                    <p className="flex items-center gap-3"><span className="text-emerald-500 font-bold">➜</span> <span>compiling tailwind assets...</span> <span className="text-gray-600 ml-auto">12ms</span></p>
                    <p className="flex items-center gap-3"><span className="text-emerald-500 font-bold">➜</span> <span>resolving 2,492 dependencies...</span> <span className="text-gray-600 ml-auto">84ms</span></p>
                    <p className="flex items-center gap-3"><span className="text-emerald-500 font-bold">➜</span> <span>compressing javascript chunks...</span> <span className="text-gray-600 ml-auto">45ms</span></p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-emerald-400 font-bold mt-4 pt-4 border-t border-gray-800/50 text-lg flex items-center gap-2"
                    >
                        <span className="animate-pulse">✓</span> BUILD SUCCESSFUL IN 1.42s
                    </motion.p>
                </div>
            </div>
        )
    },
    {
        id: '04',
        title: 'QA & Edge Testing',
        category: 'Validation Phase',
        icon: TestTube2,
        accent: 'from-amber-400 to-orange-500',
        textColor: 'text-amber-400',
        content: 'Rigorous automated unit testing, end-to-end coverage mapping, and fierce security vulnerability scanning ensure zero friction before deployment.',
        visual: (
            <div className="bg-gray-900 border border-amber-500/30 rounded-2xl p-6 w-full flex flex-col gap-5 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                {[
                    { label: 'Unit Tests Passing', val: '1,420', color: 'bg-emerald-500 text-emerald-400 border-emerald-500/30' },
                    { label: 'E2E Code Coverage', val: '98.5%', color: 'bg-emerald-500 text-emerald-400 border-emerald-500/30' },
                    { label: 'Security Penetration', val: 'A+ Rated', color: 'bg-amber-500 text-amber-400 border-amber-500/30' },
                    { label: 'Lighthouse Score', val: '100 / 100', color: 'bg-blue-500 text-blue-400 border-blue-500/30' }
                ].map((stat, i) => (
                    <div key={i} className={`flex justify-between items-center bg-gray-800/50 border p-3 rounded-xl`}>
                        <span className="text-gray-300 font-medium flex items-center gap-3 text-sm">
                            <div className={`w-2.5 h-2.5 rounded-full ${stat.color.split(' ')[0]} shadow-[0_0_8px_currentColor]`} />
                            {stat.label}
                        </span>
                        <span className={`font-bold font-mono tracking-wider ${stat.color.split(' ')[1]}`}>{stat.val}</span>
                    </div>
                ))}
            </div>
        )
    }
];

export default function SDLCWorkflow() {
    return (
        <section className="py-32 bg-gray-950 relative border-y border-gray-900 overflow-hidden">
            {/* Dark Mode Glowing Accents */}
            <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                    >
                        <Cpu className="w-4 h-4 text-indigo-400" /> Engineering Excellence
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                        The Developer's Life Cycle
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A transparent, fiercely-structured pipeline ensuring pixel-perfect delivery, uncompromised security, and infinitely scalable architectures.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto relative pl-4 md:pl-0">
                    {/* Glowing Vertical Connecting Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-10 bottom-10 w-1 bg-gray-800 rounded-full md:-translate-x-1/2 z-0">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-pink-500 to-emerald-500 rounded-full opacity-50 shadow-[0_0_15px_currentColor]"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-32 relative z-10">
                        {phases.map((phase, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={phase.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${isEven ? '' : 'md:flex-row-reverse'}`}
                                >

                                    {/* Text Content */}
                                    <div className={`flex-1 w-full pl-16 md:pl-0 text-left md:${isEven ? 'text-right' : 'text-left'}`}>
                                        <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-gray-800 border border-gray-700 ${phase.textColor} shadow-[0_0_10px_currentColor] opacity-80`}>
                                            {phase.category}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 flex xl:inline-flex items-center gap-4 flex-row-reverse md:flex-row">
                                            {phase.title}
                                            <span className="text-5xl font-mono text-gray-800 font-light hidden md:block select-none">{phase.id}</span>
                                        </h3>
                                        <p className="text-lg text-gray-400 leading-relaxed block md:inline-block max-w-md">
                                            {phase.content}
                                        </p>
                                    </div>

                                    {/* Center Glowing Node icon */}
                                    <div className="absolute left-0 md:relative md:left-auto shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border-4 border-gray-800 shadow-2xl z-20 group cursor-pointer hover:border-gray-700 transition-colors">
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${phase.accent} opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-500`} />
                                        <div className={`absolute inset-1 rounded-full bg-gray-900 z-10`} />
                                        <phase.icon className={`w-8 h-8 ${phase.textColor} z-20`} />
                                    </div>

                                    {/* Visual Mockup Content */}
                                    <div className="flex-1 w-full perspective-1000 pl-16 md:pl-0">
                                        <motion.div
                                            whileHover={{ scale: 1.05, rotateY: isEven ? -10 : 10, rotateX: 5 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="relative group"
                                        >
                                            <div className={`absolute -inset-1 bg-gradient-to-tr ${phase.accent} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-700`} />
                                            {phase.visual}
                                        </motion.div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
