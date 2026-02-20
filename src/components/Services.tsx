import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layers, Zap, PenTool } from 'lucide-react';

const services = [
    {
        title: "Product Design",
        description: "User-centric interfaces that drive engagement and conversions. We design clean, intuitive, and modern UI/UX.",
        icon: <PenTool className="w-6 h-6" />
    },
    {
        title: "Web Development",
        description: "High-performance, scalable web applications built with modern frameworks. Fast, secure, and SEO-optimized.",
        icon: <Code className="w-6 h-6" />
    },
    {
        title: "Brand Identity",
        description: "Full-service branding from logo design to visual systems. We give your business a unique and memorable voice.",
        icon: <Layers className="w-6 h-6" />
    },
    {
        title: "Growth Strategy",
        description: "Data-driven marketing and growth strategies to scale your product. We help you reach your target audience.",
        icon: <Zap className="w-6 h-6" />
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative z-20 border-b border-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                        We build brands that <br className="hidden md:block" /> matter.
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our multidisciplinary team combines strategy, design, and engineering to solve complex problems and create exceptional digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
            </p>
        </motion.div>
    );
};
