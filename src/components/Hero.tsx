import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden z-10 px-4">
            {/* Background elements (abstract shapes handled by ThreeCanvas) */}

            <div className="container relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-600">
                        Available for new projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6 text-gray-900"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Digital</span> <br />
                    Excellence.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    We craft premium digital experiences for forward-thinking brands.
                    From strategy to execution, we build products that scale.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <MagneticButton
                        variant="primary"
                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto"
                    >
                        View Case Studies <ArrowRight className="w-4 h-4 ml-2" />
                    </MagneticButton>
                    <MagneticButton
                        variant="secondary"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto"
                    >
                        Contact Us
                    </MagneticButton>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
