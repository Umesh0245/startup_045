import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ className = "w-10 h-10" }) => (
    <div className={`relative ${className} flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="50%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
            </defs>
            <motion.path
                d="M30 20 H70 A20 20 0 0 1 70 60 H30 A20 20 0 0 0 30 100 H70"
                stroke="url(#logoGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
                d="M70 20 A20 20 0 0 0 70 60 H30 A20 20 0 0 1 30 100"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
        </svg>
    </div>
);
