import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

export default function MagneticButton({ children, onClick, className = '', variant = 'primary' }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    // Variant styles
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 overflow-hidden group";
    const variants = {
        primary: "bg-emerald-500 text-obsidian hover:bg-emerald-400 border border-emerald-500",
        secondary: "bg-obsidian-light text-white border border-gray-800 hover:border-emerald-500",
        outline: "bg-transparent text-white border border-white/20 hover:border-emerald-500 hover:text-emerald-500"
    };

    // Since we aren't using Tailwind fully configured, we map these classes to actual styles in global.css or assume utility classes exist. 
    // Wait, I said I'd use vanilla CSS. I should stick to classes defined in global.css or scoped via style tag.
    // I already mentioned avoiding Tailwind. I will use a simple class name and handle styles there.
    // But since I installed `clsx` I can conditionally join class names if I had them.
    // I will use scoped styles or inline styles? No, global CSS classes.

    const variantClass = `btn-${variant}`;

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`btn ${variantClass} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            <div className="absolute inset-0 z-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-xl scale-150 translate-y-10 group-hover:translate-y-0" />
        </motion.button>
    );
}
