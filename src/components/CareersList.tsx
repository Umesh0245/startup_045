import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ArrowUpRight, Code2 } from 'lucide-react';

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    isActive: boolean;
}

export default function CareersList() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        const fetchJobs = () => {
            const stored = localStorage.getItem('synvoke_jobs');
            if (stored) {
                const parsed = JSON.parse(stored) as Job[];
                setJobs(parsed.filter(j => j.isActive));
            }
        };

        fetchJobs();
        // Since we are mocking backend with localstorage on the same domain, we can listen for changes occasionally, 
        // but for a static site simulation it usually loads on mount.
        window.addEventListener('storage', fetchJobs);
        return () => window.removeEventListener('storage', fetchJobs);
    }, []);

    if (jobs.length === 0) {
        return null;
    }

    return (
        <section className="py-24 bg-[#050505] relative border-t border-white/5 z-20 overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-8 mx-auto xl:max-w-7xl relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 tracking-widest text-[10px] font-bold uppercase mb-6"
                    >
                        <Code2 className="w-3.5 h-3.5" /> Join The Collective
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight"
                    >
                        Architecting the Future. <br className="hidden md:block" />
                        <span className="text-gray-500">We need pure talent.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-6">
                    {jobs.map((job, index) => (
                        <motion.a
                            href="mailto:contact.synvoke@gmail.com"
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="flex flex-col md:flex-row justify-between lg:items-center gap-8 relative z-10">
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                                        {job.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-4 md:gap-8 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                                            <Building2 className="w-4 h-4 text-indigo-400" /> {job.department}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                                            <MapPin className="w-4 h-4 text-purple-400" /> {job.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                                            <Briefcase className="w-4 h-4 text-emerald-400" /> {job.type}
                                        </div>
                                    </div>

                                    <p className="text-gray-500 leading-relaxed font-light max-w-3xl line-clamp-2 md:line-clamp-none">
                                        {job.description}
                                    </p>
                                </div>

                                <div className="shrink-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 text-gray-400 group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:text-white flex items-center justify-center transition-all duration-300">
                                        <ArrowUpRight className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
