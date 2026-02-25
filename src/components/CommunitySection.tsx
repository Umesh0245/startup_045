import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Github, ChevronRight } from 'lucide-react';

const team = [
    {
        name: "Umesh",
        role: "Founder & Chief Technology Officer",
        bio: "Visionary founder and technical leader. Drives architectural decisions and functional implementation across the entire SynVoke ecosystem, bridging complex backend systems with seamless frontend experiences.",
        image: "/images/umesh-profile-red-zoomed.png",
        objectPosition: "object-center",
        skills: ["System Architecture", "Full Stack", "React", "Node.js"]
    },
    {
        name: "Manoj Kumar",
        role: "Co-Founder & Chief Business Officer",
        bio: "Strategic mastermind shaping the future of SynVoke. Leads business development, driving sustainable growth, forging critical industry partnerships, and expanding global market reach.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=100&w=1000&auto=format&fit=crop",
        objectPosition: "object-center",
        skills: ["Business Strategy", "Partnerships", "Growth Strategy", "Leadership"]
    },
    {
        name: "Viswagna Brahma",
        role: "Principal Software Engineer",
        bio: "Versatile systems engineer building robust and scalable solutions. Responsible for the flawless execution of complex features, ensuring low-latency operations and resilient codebases.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=100&w=1000&auto=format&fit=crop",
        objectPosition: "object-center",
        skills: ["React", "TypeScript", "Backend APIs", "Performance tuning"]
    }
];

export default function CommunitySection() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 overflow-hidden font-sans pb-32">

            {/* Ambient Lighting Background */}
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Navigation Bar */}
            <nav className="relative z-50 w-full px-6 py-8 max-w-7xl mx-auto flex items-center justify-between">
                <a href="/our-story" className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all group tracking-widest text-xs font-bold uppercase">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-x-1 group-hover:border-white/30 transition-all">
                        <ArrowLeft className="w-3.5 h-3.5" />
                    </div>
                    Back to Story
                </a>
                <div className="text-white font-mono text-xs uppercase tracking-widest opacity-50">
                    SynVoke Studio / Global Team
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative z-10 pt-20 pb-24 px-4 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight text-white">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">Engineers.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Meet the brilliant minds powering the architecture behind some of the most complex platforms in the world. Exceptional problems require exceptional people.
                    </p>
                </motion.div>
            </header>

            {/* Deep Team Grid */}
            <div className="relative z-20 max-w-[85rem] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-6 sm:p-8 flex flex-col group hover:border-white/10 transition-colors shadow-2xl relative overflow-hidden"
                        >
                            {/* Hover highlight glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="flex flex-col sm:flex-row gap-8 mb-8 relative z-10">
                                {/* Intense Profile Image */}
                                <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-[1.5rem] overflow-hidden border-2 border-white/10 bg-gray-900 group-hover:border-indigo-500/50 transition-colors duration-500">
                                    <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.objectPosition || 'object-center'} filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100`} />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h3 className="text-3xl font-display font-bold text-white mb-2">{member.name}</h3>
                                    <h4 className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-4">{member.role}</h4>

                                    <div className="flex gap-3">
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"><Linkedin className="w-4 h-4" /></a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"><Github className="w-4 h-4" /></a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"><Twitter className="w-4 h-4" /></a>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed font-light mb-8 flex-1 relative z-10">
                                {member.bio}
                            </p>

                            <div className="mt-auto relative z-10">
                                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3 block">Expertise Areas</div>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-xs font-mono group-hover:border-white/20 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hiring / Join Banner */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-32">
                <div className="bg-gradient-to-br from-indigo-900 via-gray-900 to-black border border-indigo-500/30 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_0_100px_rgba(79,70,229,0.2)]">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Think you meet the standard?</h2>
                    <p className="text-indigo-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">We are always searching for top 1% engineering and design talent to push our architecture further.</p>

                    <button className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest inline-flex items-center gap-3 hover:scale-105 shadow-xl transition-all">
                        View Open Roles <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

        </main>
    )
}
