import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Blog', href: '/blog' },
    { name: 'Our Story', href: '/our-story' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center px-4 md:px-6">
                <a href="/" className="flex items-center gap-3 group z-50">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-indigo-600">
                            <defs>
                                <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#4F46E5" />
                                    <stop offset="100%" stopColor="#EC4899" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d="M30 20 H70 A20 20 0 0 1 70 60 H30 A20 20 0 0 0 30 100 H70"
                                stroke="url(#navLogoGradient)"
                                strokeWidth="12"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-display font-bold text-xl tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                            SYNFORGE
                        </span>
                        <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">
                            OFFICIAL
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/#contact"
                        className="btn btn-primary text-sm px-6 py-2 group flex items-center gap-2"
                    >
                        Start Project
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                            className="fixed inset-0 bg-white flex flex-col pt-24 px-8 md:hidden gap-6 z-40 overflow-y-auto"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-display font-bold text-gray-900 hover:text-indigo-600 transition-colors py-4 border-b border-gray-100 flex justify-between items-center group"
                                >
                                    {link.name}
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all font-light w-6 h-6 text-gray-400" />
                                </a>
                            ))}
                            <a
                                href="/#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-8 btn btn-primary w-full text-center py-4 text-lg"
                            >
                                Get in Touch
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
