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
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <filter id="adminGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <path
            d="M30 20 H70 A20 20 0 0 1 70 60 H30 A20 20 0 0 0 30 100 H70"
            stroke="url(#adminLogoGradient)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#adminGlow)"
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
            <div className="bg-[#050505] text-white print:hidden sticky top-0 z-50 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-pink-500/10 border border-white/10 flex items-center justify-center p-2.5 shadow-inner shrink-0 leading-none">
                            <AnimatedLogo className="w-full h-full" />
                        </div>
                        <div className="flex flex-col flex-1 justify-center translate-y-[2px]">
                            <h1 className="font-display font-bold text-2xl tracking-tight leading-none text-white whitespace-nowrap">SynVoke Admin</h1>
                            <span className="text-[10px] text-pink-500 font-mono font-bold tracking-[0.2em] uppercase leading-none mt-1.5 block">Control Matrix</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar pb-1 md:pb-0">
                        <button
                            onClick={() => setActiveTab('invoices')}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold transition-all ${activeTab === 'invoices' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                        >
                            <FileText className="w-4 h-4" /> Invoices
                        </button>
                        <button
                            onClick={() => setActiveTab('quotations')}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold transition-all ${activeTab === 'quotations' ? 'bg-pink-600 text-white shadow-lg shadow-pink-500/25' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                        >
                            <FileSignature className="w-4 h-4" /> Quotations
                        </button>
                        <button
                            onClick={() => setActiveTab('jobs')}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold transition-all ${activeTab === 'jobs' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                        >
                            <Briefcase className="w-4 h-4" /> Careers
                        </button>
                    </div>

                    <button onClick={handleLogout} className="flex items-center justify-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors bg-white/5 px-5 py-2.5 rounded-xl text-sm font-bold border border-white/5 w-full md:w-auto shrink-0 mt-2 md:mt-0 whitespace-nowrap">
                        <LogOut className="w-4 h-4" /> Logout
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
