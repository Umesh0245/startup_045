import React, { useState, useEffect } from 'react';
import { FileText, Briefcase, FileSignature, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import JobsManager from './JobsManager';
import InvoiceManager from './InvoiceManager';
import QuotationManager from './QuotationManager';

const AnimatedLogo = ({ className = "w-full h-full text-indigo-500" }: { className?: string }) => (
    <svg viewBox="0 0 100 120" fill="none" className={className}>
        <defs>
            <linearGradient id="adminLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="50%" stopColor="#7000FF" />
                <stop offset="100%" stopColor="#FF007A" />
            </linearGradient>
            <filter id="adminGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Splash pulse background circle */}
        <motion.circle cx="50" cy="60" r="15" fill="none" stroke="url(#adminLogoGradient)" strokeWidth="4"
            initial={{ r: 10, opacity: 0.8, strokeWidth: 8 }}
            animate={{ r: 45, opacity: 0, strokeWidth: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />

        <motion.path
            d="M30 20 H70 A20 20 0 0 1 70 60 H30 A20 20 0 0 0 30 100 H70"
            stroke="url(#adminLogoGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#adminGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
    </svg>
);

export default function AdminPortal() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState<'invoices' | 'quotations' | 'jobs'>('invoices');

    useEffect(() => {
        const auth = localStorage.getItem('synvoke_admin_auth');
        if (auth === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'synvoke.admin@gmail.com' && password === 'riseofsynvoke') {
            setIsLoggedIn(true);
            localStorage.setItem('synvoke_admin_auth', 'true');
            setError('');
        } else {
            setError('Invalid master credentials. Access Denied.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('synvoke_admin_auth');
        setEmail('');
        setPassword('');
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] pointer-events-none"></div>

                    <div className="flex flex-col items-center mb-8 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 p-2 shadow-[0_0_30px_rgba(112,0,255,0.2)]">
                            <AnimatedLogo className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-white text-center tracking-tight">SynVoke Command</h2>
                        <p className="text-indigo-400/80 font-mono text-xs uppercase tracking-widest mt-2 block">Restricted Access</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5 relative z-10">
                        {error && (
                            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                                {error}
                            </div>
                        )}
                        <div>
                            <label className="block text-gray-400 text-xs font-mono tracking-widest uppercase mb-2">Master Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors placeholder:text-gray-700"
                                placeholder="sysadmin@..."
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs font-mono tracking-widest uppercase mb-2">Access Key</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors placeholder:text-gray-700"
                                placeholder="••••••••••••"
                            />
                        </div>

                        <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                            Authenticate
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 admin-portal print:bg-white">
            {/* Sidebar / Topbar Navigation - Hide on Print */}
            <div className="bg-[#050505] text-white print:hidden sticky top-0 z-50 shadow-2xl">
                <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-[#111] border border-white/5 flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(112,0,255,0.15)] shrink-0">
                            <AnimatedLogo className="w-full h-full" />
                        </div>
                        <div className="min-w-0">
                            <h1 className="font-display font-bold text-xl tracking-tight leading-none truncate">SynVoke Admin</h1>
                            <span className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase truncate block mt-[2px]">Control Matrix</span>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center w-full md:w-auto overflow-x-auto overflow-y-hidden custom-scrollbar pb-2 md:pb-0">
                        <div className="flex space-x-1 sm:space-x-4 bg-white/5 p-1 rounded-xl border border-white/10 mx-auto w-max md:mx-0 shrink-0">
                            <button
                                onClick={() => setActiveTab('invoices')}
                                className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${activeTab === 'invoices' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <FileText className="w-4 h-4" /> <span className="hidden sm:inline">Invoices</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('quotations')}
                                className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${activeTab === 'quotations' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <FileSignature className="w-4 h-4" /> <span className="hidden sm:inline">Quotations</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('jobs')}
                                className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${activeTab === 'jobs' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <Briefcase className="w-4 h-4" /> <span className="hidden sm:inline">Careers / Jobs</span>
                            </button>
                        </div>
                    </div>

                    <button onClick={handleLogout} className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl text-sm border border-white/5 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                        <LogOut className="w-4 h-4" /> <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="container mx-auto px-4 md:px-8 py-8 print:col-span-12 print:p-0 print:m-0 h-full">
                {activeTab === 'invoices' && <InvoiceManager />}
                {activeTab === 'quotations' && <QuotationManager />}
                {activeTab === 'jobs' && <JobsManager />}
            </div>

        </div>
    );
}
