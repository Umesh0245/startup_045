import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500); // Slightly longer to appreciate the animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -50,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-50 perspective-1000"
                >
                    <div className="flex flex-col items-center relative z-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="w-32 h-32 mb-8 relative"
                        >
                            {/* Animated SVG Logomark - Light Theme Optimized */}
                            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
                            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full relative z-10 drop-shadow-2xl">
                                <defs>
                                    <linearGradient id="splashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo 600 */}
                                        <stop offset="50%" stopColor="#7C3AED" /> {/* Violet 600 */}
                                        <stop offset="100%" stopColor="#DB2777" /> {/* Pink 600 */}
                                    </linearGradient>
                                </defs>
                                <motion.path
                                    d="M30 20 H70 A20 20 0 0 1 70 60 H30 A20 20 0 0 0 30 100 H70"
                                    stroke="url(#splashGradient)"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                                <motion.path
                                    d="M30 20 H70 A20 20 0 0 1 70 60 H30 A20 20 0 0 0 30 100 H70"
                                    stroke="rgba(79, 70, 229, 0.2)"
                                    strokeWidth="18"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
                                />
                            </svg>
                        </motion.div>

                        <div className="overflow-hidden h-16 flex items-center justify-center">
                            <motion.h1
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight text-center"
                            >
                                SYNTAX SOULS
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden h-8 mt-2 flex items-center justify-center">
                            <motion.p
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
                                className="text-indigo-600 font-mono font-medium tracking-[0.2em] uppercase text-sm"
                            >
                                Digital Architecture Studio
                            </motion.p>
                        </div>
                    </div>

                    {/* Background Elements */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
