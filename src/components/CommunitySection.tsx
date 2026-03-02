import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Github, ChevronRight, Code2 } from 'lucide-react';

const team = [
    {
        name: "Umesh",
        role: "Java Full Stack Developer",
        bio: "Elite system designer bridging the gap between deep backend architecture and seamless frontend execution. Capable of designing, developing, and writing complex logic sequences from scratch.",
        image: "/images/umesh-profile-red-zoomed.png",
        objectPosition: "object-center",
        skills: ["Java Backend", "React Ecosystem", "System Design", "UI/UX Architecture"]
    },
    {
        name: "Vamshi Krishna",
        role: "Senior Technical Lead",
        bio: "The architectural spearhead for all complex engineering initiatives. Ensures absolute code quality, mentors the technical staff, and designs the blueprints for zero-latency platforms.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
        objectPosition: "object-center",
        skills: ["Technical Blueprinting", "Code Auditing", "Team Leadership", "Microservices"]
    },
    {
        name: "Viswagna Brahma",
        role: "Senior Full Stack Developer",
        bio: "Architecting seamless, high-performance interfaces and robust server environments. Specializes in forging flawless, end-to-end data pipelines for enterprise-scale applications.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
        objectPosition: "object-center",
        skills: ["TypeScript", "Advanced React", "API Design", "Database Modeling"]
    },
    {
        name: "Manoj Mallireddy",
        role: "DevOps Engineer",
        bio: "Deploying bulletproof infrastructure pipelines to guarantee zero latency and 99.999% uptime. Master of the cloud ecosystem and continuous integration/continuous deployment architectures.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
        objectPosition: "object-top",
        skills: ["AWS / CloudFlare", "CI / CD Pipelines", "Kubernetes", "Infrastructure as Code"]
    },
    {
        name: "Manoj Kumar",
        role: "Business Development Executive",
        bio: "Expanding the operational footprint and executing strategic enterprise partnerships. Drives SynVoke Studio's market presence by translating technical excellence into business dominance.",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop&q=80",
        objectPosition: "object-center",
        skills: ["Enterprise Sales", "Strategic Partnerships", "Market Expansion", "Client Relations"]
    }
];

// Reusable card animation wrapper
const CardWrapper = ({ children, index }: { children: React.ReactNode, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4
            }}
            className="group relative perspective-1000 h-full"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.2rem] blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 pointer-events-none" />
            <div className="bg-[#080808] border border-white/5 rounded-[2rem] p-8 h-full flex flex-col relative overflow-hidden transform-gpu transition-all duration-700 hover:-translate-y-4 hover:border-indigo-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default function CommunitySection() {
    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 overflow-hidden font-sans pb-32">

            {/* Cinematic Background Lines */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)]" />
            </div>

            {/* Navigation Bar */}
            <nav className="relative z-50 w-full px-6 py-8 max-w-7xl mx-auto flex items-center justify-between">
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
                    SynVoke Studio / The Engineering Collective
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

            {/* Deep Team Grid */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
                {/* 2 items in first row to look balanced */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {team.slice(0, 2).map((member, idx) => (
                        <CardWrapper key={idx} index={idx}>
                            <div className="flex flex-col gap-6 relative z-10 h-full">
                                <div className="flex gap-6 items-center border-b border-white/10 pb-8">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-full overflow-hidden border-2 border-white/10 relative group-hover:border-indigo-400 transition-colors duration-500">
                                        <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                                        <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.objectPosition} filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 scale-110 group-hover:scale-100`} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-display font-bold text-white mb-2">{member.name}</h3>
                                        <h4 className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs tracking-wider uppercase">{member.role}</h4>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed font-light flex-1 pt-4">
                                    {member.bio}
                                </p>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-600 mb-4 block group-hover:text-indigo-500/50 transition-colors">Core Capabilities</div>
                                    <div className="flex flex-wrap gap-2">
                                        {member.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-mono group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardWrapper>
                    ))}
                </div>

                {/* 3 items in second row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.slice(2, 5).map((member, idx) => (
                        <CardWrapper key={idx + 2} index={idx + 2}>
                            <div className="flex flex-col gap-6 relative z-10 h-full">
                                <div className="flex flex-col gap-5 border-b border-white/10 pb-6 items-center text-center">
                                    <div className="w-28 h-28 shrink-0 rounded-3xl overflow-hidden border border-white/10 relative group-hover:border-purple-400 group-hover:rounded-[2rem] transition-all duration-700 shadow-2xl">
                                        <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                                        <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.objectPosition} filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 scale-110 group-hover:scale-100`} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white mb-2">{member.name}</h3>
                                        <h4 className="text-purple-400 font-mono text-xs tracking-widest uppercase">{member.role}</h4>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-base leading-relaxed font-light flex-1 pt-2">
                                    {member.bio}
                                </p>

                                <div className="mt-6 pt-6 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {member.skills.slice(0, 3).map((skill, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-mono group-hover:border-purple-500/30 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardWrapper>
                    ))}
                </div>
            </div>

            {/* Hiring / Join Banner */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-indigo-950 via-gray-900 to-black border border-indigo-500/20 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_0_100px_rgba(79,70,229,0.1)] hover:border-indigo-500/40 transition-colors duration-500 group"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white group-hover:text-indigo-300 transition-colors">Join the Architecture.</h2>
                    <p className="text-indigo-200/60 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">We are actively searching for top 1% engineering and design talent to push our robust infrastructure further.</p>

                    <button className="bg-white text-gray-950 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest inline-flex items-center gap-3 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all shrink-0">
                        View Open Roles <ChevronRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>

        </main>
    )
}
