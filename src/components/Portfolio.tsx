import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Lumina Labs",
        category: "Fintech Platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Aura Health",
        category: "Wellness App",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Nexus Dashboard",
        category: "SaaS Interface",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Echo Valley",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Portfolio() {
    return (
        <section id="work" className="py-24 bg-gray-50/50 relative z-20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                            Crafting Digital <br /> Masterpieces.
                        </h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium group transition-colors">
                        View all projects <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="btn btn-secondary inline-flex items-center gap-2">
                        View all projects <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer block"
        >
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out mb-6 aspect-[4/3] bg-gray-200">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                </div>
            </div>

            <div className="pl-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm">
                    {project.category}
                </p>
            </div>
        </motion.div>
    );
};
