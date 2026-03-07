import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight, Code2, X, Activity, Cpu, Layers } from 'lucide-react';

const team = [
    {
        id: "umesh",
        name: "Umesh S",
        role: "Java Full Stack Developer",
        bio: "Elite system designer bridging the gap between deep backend architecture and seamless frontend execution. Capable of designing and developing complex logic sequences entirely from the ground up.",
        experience: "Extensive background architecting enterprise-grade Java ecosystems and modern React frontends. Specialized in high-throughput distributed systems that handle immense active connection volumes effortlessly.",
        workflow: "Begins with rigorous mathematical modeling of data structures, followed by strictly typed backend implementation, and concludes with pixel-perfect, hyper-fluid frontend delivery.",
        ideas: "Believes that software should be treated as functional art. Champions the integration of memory-safe logic with absolutely stunning, instantaneous user interfaces.",
        image: "/images/umesh-profile-zoomed.png",
        objectPosition: "object-center",
        skills: ["Java Backend", "React Ecosystem", "System Design", "UI/UX Architecture"]
    },
    {
        id: "vamshi",
        name: "MVR Vamshi",
        role: "Senior Technical Lead",
        bio: "The architectural spearhead for all complex engineering initiatives. Ensures absolute code quality, mentors the technical staff, and designs the blueprints for instantaneous platforms.",
        experience: "Proven track record of leading robust engineering teams across fintech and cloud-infrastructure domains. Directly responsible for scaling systems to accommodate immense concurrent active connections.",
        workflow: "Employs an absolute trust methodology. Every architectural decision is heavily debated, vetted, and stress-tested before code is ever committed.",
        ideas: "Advocates for 'Invisible Infrastructure'—the idea that the best platforms are so incredibly fast and stable that users forget they are interacting with software.",
        image: "/images/vamshi.jpg",
        objectPosition: "object-center",
        skills: ["Technical Blueprinting", "Code Auditing", "Team Leadership", "Microservices"]
    },
    {
        id: "viswagna",
        name: "Viswagna Brahma",
        role: "Senior Full Stack Developer",
        bio: "Architecting seamless, high-performance interfaces and robust server environments. Specializes in forging flawless, end-to-end data pipelines for enterprise-scale applications.",
        experience: "Deeply experienced in engineering fluid edge-networks and real-time frontend applications. Pioneer in implementing WebSockets and Server-Sent Events for complex dashboards.",
        workflow: "Iterates rapidly on the edge. Focuses on minimizing the distance between human intent and the server's response through aggressive caching and state optimization.",
        ideas: "Pushes the boundary of instantaneous user interfaces. If a state change is perceptible to the human eye, it is fundamentally flawed and must be reconsidered.",
        image: "/images/viswagna-hd.jpg",
        objectPosition: "object-center",
        skills: ["TypeScript", "Advanced React", "API Design", "Database Modeling"]
    },
    {
        id: "manoj-m",
        name: "Manoj M",
        role: "DevOps Engineer",
        bio: "Deploying bulletproof infrastructure pipelines to guarantee absolute uptime. Master of the cloud ecosystem and continuous integration architectures.",
        experience: "Battle-tested in managing massive Kubernetes clusters and globally distributed databases. Has securely automated comprehensive, wide-scale deployments seamlessly.",
        workflow: "Infrastructure as Code is religion. Everything is scripted, immutable, and strictly version-controlled, allowing entire data centers to be provisioned dynamically.",
        ideas: "Focuses on 'Self-Healing Architecture'. A system that requires a human when it breaks is obsolete; true platforms automatically detect anomalies and route traffic instantly.",
        image: "/images/manoj-hd.jpg",
        objectPosition: "object-top",
        skills: ["AWS / CloudFlare", "CI / CD Pipelines", "Kubernetes", "Infrastructure as Code"]
    },
    {
        id: "manoj-k",
        name: "Manoj Kumar",
        role: "Business Development Executive",
        bio: "Expanding the operational footprint and executing strategic enterprise partnerships. Drives market presence by translating technical excellence into business dominance.",
        experience: "Seasoned veteran in aggressive expansion strategy across the SaaS sector. Has successfully negotiated major infrastructure contracts with global entities.",
        workflow: "Relentless market mapping combined with deep technical translations. Bridges the gap between pure engineering specs and overwhelming corporate value propositions.",
        ideas: "Believes that technology is fundamentally useless if it doesn't exponentially multiply leverage. Focuses purely on integrating infrastructure into high-impact industries.",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop&q=80",
        objectPosition: "object-center",
        skills: ["Enterprise Sales", "Strategic Partnerships", "Market Expansion", "Client Relations"]
    }
];

export default function CommunitySection() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedMember = selectedId ? team.find(member => member.id === selectedId) : null;

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans pb-32 relative">

            {/* Cinematic Background Lines */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)]" />
            </div>

            {/* Navigation Bar */}
            <nav className="relative z-10 w-full px-6 py-8 max-w-7xl mx-auto flex items-center justify-between">
                <a href="/our-story" className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all group tracking-widest text-xs font-bold uppercase">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-x-1 group-hover:border-white/30 transition-all">
                        <ArrowLeft className="w-3.5 h-3.5" />
                    </div>
                    Back to Story
                </a>
                <div className="text-white font-mono text-xs uppercase tracking-widest opacity-50 block md:hidden">
                    Team
                </div>
                <div className="text-white font-mono text-xs uppercase tracking-widest opacity-50 hidden md:block">
                    SynVoke / The Engineering Collective
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative z-10 pt-16 pb-32 px-4 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(79,70,229,0.3)] border border-white/20">
                        <Code2 className="w-8 h-8 text-white" />
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[1.1] text-white">
                        Built by <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 relative inline-block">
                            Engineers.
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1.5 md:h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full origin-left"
                            />
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mt-6">
                        No typical founders. No bloated management. Just an elite collective of systems engineers, technical leads, and dedicated builders orchestrating the platforms of the future.
                    </p>
                </motion.div>
            </header>

            {/* Deep Team Grid - Clickable */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.id}
                            layoutId={`card-container-${member.id}`}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
                            onClick={() => setSelectedId(member.id)}
                            className="bg-[#080808] border border-white/5 rounded-[2rem] p-8 cursor-pointer hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-indigo-500/0 group-hover:from-indigo-500/10 transition-colors duration-500" />

                            <div className="flex gap-5 border-b border-white/10 pb-6 items-center mb-6 relative z-10">
                                <motion.div layoutId={`image-${member.id}`} className="w-20 h-20 shrink-0 rounded-[1.2rem] overflow-hidden border border-white/10 bg-gray-900 flex items-center justify-center">
                                    <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.objectPosition} filter grayscale group-hover:grayscale-0 transition-all duration-700`} />
                                </motion.div>
                                <div>
                                    <motion.h3 layoutId={`name-${member.id}`} className="text-2xl font-display font-bold text-white mb-2">{member.name}</motion.h3>
                                    <h4 className="text-indigo-400 font-mono text-[10px] tracking-widest uppercase">{member.role}</h4>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed font-light mb-auto relative z-10">
                                {member.bio}
                            </p>

                            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2 relative z-10">
                                {member.skills.slice(0, 2).map((skill, i) => (
                                    <span key={i} className="px-2 py-1 rounded bg-white/5 text-gray-400 text-[10px] font-mono whitespace-nowrap">
                                        {skill}
                                    </span>
                                ))}
                                <span className="px-3 py-1.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-mono group-hover:bg-indigo-500 group-hover:text-white transition-colors ml-auto flex items-center gap-1 font-bold">
                                    Deep Dive <ChevronRight className="w-3 h-3" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* "Air Component" Modal Overlay */}
            <AnimatePresence>
                {selectedId && selectedMember && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-crosshair"
                        />
                        <motion.div
                            layoutId={`card-container-${selectedMember.id}`}
                            className="relative w-full max-w-6xl max-h-[90vh] bg-[#050505] border border-indigo-500/30 rounded-[2rem] md:rounded-[3rem] shadow-[0_0_100px_rgba(79,70,229,0.3)] overflow-hidden z-10 flex flex-col md:flex-row my-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-black/50 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white z-20 transition-colors backdrop-blur-md"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Deep Detail Image Side */}
                            <div className="w-full md:w-5/12 relative h-[300px] md:h-auto shrink-0 border-r border-white/5">
                                <motion.img
                                    layoutId={`image-${selectedMember.id}`}
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className={`absolute inset-0 w-full h-full object-cover ${selectedMember.objectPosition}`}
                                />
                                {/* Mobile-only gradient for text visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent md:hidden" />

                                {/* Mobile Title overlay */}
                                <div className="absolute bottom-6 left-6 right-6 text-left md:hidden z-10">
                                    <motion.h2 layoutId={`name-${selectedMember.id}`} className="text-4xl font-display font-bold text-white mb-2 drop-shadow-lg">{selectedMember.name}</motion.h2>
                                    <div className="text-indigo-400 font-mono text-xs uppercase tracking-widest drop-shadow-md">{selectedMember.role}</div>
                                </div>
                            </div>

                            {/* Complete Bio Data Side */}
                            <div className="w-full md:w-7/12 p-6 md:p-12 flex flex-col relative overflow-y-auto custom-scrollbar bg-[#050505]">
                                <div className="hidden md:block mb-8">
                                    <motion.h2 layoutId={`name-${selectedMember.id}`} className="text-5xl font-display font-bold text-white mb-3">{selectedMember.name}</motion.h2>
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs tracking-widest uppercase">
                                        {selectedMember.role}
                                    </div>
                                </div>

                                <div className="space-y-6 pr-2 pb-8">
                                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[1.5rem] relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <h4 className="flex items-center gap-3 text-lg font-display font-bold text-white mb-3 relative z-10">
                                            <Activity className="w-5 h-5 text-indigo-500" /> Work Experience
                                        </h4>
                                        <p className="text-gray-400 font-light leading-relaxed text-[15px] relative z-10">
                                            {selectedMember.experience}
                                        </p>
                                    </div>

                                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[1.5rem] relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <h4 className="flex items-center gap-3 text-lg font-display font-bold text-white mb-3 relative z-10">
                                            <Layers className="w-5 h-5 text-purple-500" /> Operational Workflow
                                        </h4>
                                        <p className="text-gray-400 font-light leading-relaxed text-[15px] relative z-10">
                                            {selectedMember.workflow}
                                        </p>
                                    </div>

                                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[1.5rem] relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <h4 className="flex items-center gap-3 text-lg font-display font-bold text-white mb-3 relative z-10">
                                            <Cpu className="w-5 h-5 text-emerald-500" /> Engineering Ideas
                                        </h4>
                                        <p className="text-gray-400 font-light leading-relaxed text-[15px] relative z-10">
                                            {selectedMember.ideas}
                                        </p>
                                    </div>

                                    <div className="pt-8 border-t border-white/5">
                                        <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-4 block">Mastered Technologies</div>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedMember.skills.map((skill, i) => (
                                                <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Hiring / Join Banner */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-indigo-950 via-gray-900 to-black border border-indigo-500/20 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_0_100px_rgba(79,70,229,0.1)] hover:border-indigo-500/40 transition-colors duration-500 group"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white group-hover:text-indigo-300 transition-colors">Join the Architecture.</h2>
                    <p className="text-indigo-200/60 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">We are actively searching for top 1% engineering talent.</p>

                    <a href="#open-roles" className="bg-white text-gray-950 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest inline-flex items-center gap-3 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all shrink-0">
                        View Open Roles <ChevronRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255,255,255,0.1);
                    border-radius: 20px;
                }
            `}</style>
        </main>
    )
}
