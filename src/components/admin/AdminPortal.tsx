import React, { useState, useEffect } from 'react';
import { Lock, FileText, Briefcase, FileSignature, LogOut } from 'lucide-react';
import JobsManager from './JobsManager';
import InvoiceManager from './InvoiceManager';
import QuotationManager from './QuotationManager';

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
                        <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                            <Lock className="w-8 h-8 text-indigo-400" />
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
                <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-indigo-500 flex items-center justify-center">
                            <Lock className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h1 className="font-display font-bold text-xl tracking-tight leading-none">SynVoke Admin</h1>
                            <span className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase">Control Matrix</span>
                        </div>
                    </div>

                    <div className="flex space-x-1 sm:space-x-4 bg-white/5 p-1 rounded-xl border border-white/10">
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

                    <button onClick={handleLogout} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl text-sm border border-white/5">
                        <LogOut className="w-4 h-4" /> <span className="hidden md:inline">Logout</span>
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
