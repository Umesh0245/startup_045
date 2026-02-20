import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
    {
        title: "Lumina Labs",
        category: "Fintech Scale",
        desc: "High-performance microservice architecture processing 1M+ secure transactions daily.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Aura Health",
        category: "Cross-Platform",
        desc: "Seamless real-time data synchronization between React Native mobile clients and scalable web portals.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Nexus Engine",
        category: "Enterprise SaaS",
        desc: "Award-winning SaaS design language implementing complex telemetry visualizations and lightning-fast workflows.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Echo Valley",
        category: "E-Commerce",
        desc: "Headless CMS integration with Shopify Plus, featuring 3D product configurators and predictive machine learning search.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    }
];

const ProjectCard = ({ project, index }: any) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4), ease: "easeOut" }}
            className="group cursor-pointer block"
        >
            {/* The Visual Frame */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6 isolate border border-gray-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-500 z-10" />

                {/* Ultra Minimal Float Button */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 shadow-md">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                </div>
            </div>

            {/* Content & Metadata */}
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1 max-w-sm">
                    <h3 className="text-2xl font-display font-medium text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-[15px]">
                        {project.desc}
                    </p>
                </div>
                <div className="shrink-0 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold tracking-wide border border-gray-200">
                    {project.category}
                </div>
            </div>
        </motion.div>
    );
};

export default function Portfolio() {
    return (
        <section id="work" className="py-32 bg-white relative border-t border-gray-100 z-20 overflow-hidden">
            {/* Extremely subtle aesthetic grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                {/* Header logic perfectly minimal & aligned */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5" /> Verified Output
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-gray-900 tracking-tight leading-none mb-4">
                            Premium <span className="text-gray-400 italic">Work.</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                            A curated selection of our finest enterprise-scale projects designed for ultimate scalability and visual perfection.
                        </p>
                    </div>

                    <a href="#" className="hidden md:flex items-center gap-3 bg-white border border-gray-200 hover:border-gray-900 hover:bg-gray-900 px-8 py-4 rounded-full text-[15px] font-bold text-gray-600 hover:text-white group transition-all duration-300">
                        Explore Directory
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Elegant 2 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-16 sm:mt-24 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold shadow-lg w-full justify-center transition-transform active:scale-95">
                        Explore Directory <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
