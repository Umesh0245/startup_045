import React, { useState } from 'react';
import { Plus, Trash, Download, Printer, Settings2, Moon, Sun } from 'lucide-react';

export default function QuotationManager() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [quoteData, setQuoteData] = useState({
        quoteNumber: 'EST-2026-0042',
        date: new Date().toISOString().split('T')[0],
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clientName: 'Global Ventures LLC',
        clientAddress: '400 Innovation Drive\nNew York, NY 10001',
        clientEmail: 'procurement@globalventures.com',
        notes: 'This is a quotation on the goods named, subject to the conditions noted below: This quotation is valid for 30 days.'
    });

    const [items, setItems] = useState([
        { id: '1', title: 'Architecture Blueprint & Systems Design', details: 'Comprehensive system architecture map including AWS cloud infrastructure, database schema, and microservice definitions.', rate: 25000, quantity: 1 },
        { id: '2', title: 'Full-Stack Development (Estimated Sprints)', details: 'Four bi-weekly sprints focusing on backend deployment, frontend React interface, and real-time socket connections.', rate: 100000, quantity: 1 },
    ]);

    const handleAddItem = () => {
        setItems([...items, { id: Date.now().toString(), title: 'New Service Item', details: '', rate: 0, quantity: 1 }]);
    };

    const handleItemChange = (id: string, field: string, value: string | number) => {
        setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const handleRemoveItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((sum, item) => sum + (item.rate * item.quantity), 0);
    const taxRate = 0; // Configurable tax
    const total = subtotal + (subtotal * taxRate);

    const handlePrint = () => {
        window.print();
    };

    const t = {
        bg: theme === 'light' ? 'bg-white' : 'bg-[#0A0A0A]',
        textMain: theme === 'light' ? 'text-gray-900' : 'text-white',
        textMuted: theme === 'light' ? 'text-gray-500' : 'text-gray-400',
        border: theme === 'light' ? 'border-gray-200' : 'border-white/10',
        borderSoft: theme === 'light' ? 'border-gray-100' : 'border-white/5',
        inputBg: theme === 'light' ? 'bg-transparent' : 'bg-transparent',
        panelBg: theme === 'light' ? 'bg-gray-50' : 'bg-white/5',
    };

    return (
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 items-start relative pb-32">

            {/* Editor Sidebar (Hidden on Print) */}
            <div className="w-full xl:w-[400px] shrink-0 bg-white shadow-xl shadow-gray-200/50 rounded-3xl p-6 border border-gray-100 print:hidden sticky top-32 z-40">
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center">
                            <Settings2 className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">Quotation Settings</h3>
                            <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mt-0.5">Template Engine</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 text-gray-600"
                        title="Toggle Document Theme"
                    >
                        {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    </button>
                </div>

                <div className="space-y-5 custom-scrollbar max-h-[60vh] overflow-y-auto pr-2">
                    <div>
                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Quote Number</label>
                        <input type="text" value={quoteData.quoteNumber} onChange={e => setQuoteData({ ...quoteData, quoteNumber: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Issue Date</label>
                            <input type="date" value={quoteData.date} onChange={e => setQuoteData({ ...quoteData, date: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Valid Until</label>
                            <input type="date" value={quoteData.validUntil} onChange={e => setQuoteData({ ...quoteData, validUntil: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Prospective Client</label>
                        <input type="text" value={quoteData.clientName} onChange={e => setQuoteData({ ...quoteData, clientName: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 mb-4" />

                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Contact Email</label>
                        <input type="text" value={quoteData.clientEmail} onChange={e => setQuoteData({ ...quoteData, clientEmail: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 mb-4" />

                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Company Address</label>
                        <textarea rows={3} value={quoteData.clientAddress} onChange={e => setQuoteData({ ...quoteData, clientAddress: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Proposal Terms</label>
                        <textarea rows={4} value={quoteData.notes} onChange={e => setQuoteData({ ...quoteData, notes: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                    </div>
                </div>

                <div className="mt-6 space-y-3 pt-6 border-t border-gray-100">
                    <button onClick={handlePrint} className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 transition-all">
                        <Printer className="w-5 h-5" /> Export Proposal PDF
                    </button>
                    <p className="text-center text-[10px] text-gray-400 leading-relaxed max-w-[250px] mx-auto">Click to print or save as PDF. Remember to check "Background graphics" in your print dialog for the best aesthetics.</p>
                </div>
            </div>

            {/* A4 Paper Canvas (Visible heavily on print) */}
            <div className={`w-full max-w-[850px] mx-auto shadow-2xl xl:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mb-20 relative overflow-hidden print:shadow-none print:m-0 print:absolute print:top-0 print:left-0 transition-colors duration-500 ${t.bg}`}>
                {/* Print Layout Styling */}
                <style>{`
                    @media print {
                        @page { size: auto; margin: 0mm; }
                        body { background: ${theme === 'light' ? 'white' : '#0A0A0A'}; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                        .print\\:hidden { display: none !important; }
                        .admin-portal { padding: 0 !important; margin: 0 !important; background: transparent !important; min-height: 0 !important; }
                    }
                `}</style>

                {/* Quotation Header */}
                <div className={`p-12 md:p-16 relative overflow-hidden border-b-2 ${theme === 'light' ? 'border-pink-100' : 'border-white/5'}`}>
                    <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4 ${theme === 'light' ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'}`}></div>

                    <div className="flex justify-between items-start relative z-10 w-full">
                        <div className="max-w-[50%]">
                            <h1 className={`text-5xl md:text-6xl font-display font-light tracking-tight mb-2 uppercase ${theme === 'light' ? 'text-pink-900/30' : 'text-white/20'}`}>Estimate</h1>
                            <div className={`${t.textMain} font-mono font-bold tracking-widest uppercase`}>{quoteData.quoteNumber}</div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-4xl font-display font-bold ${t.textMain}`}>SynVoke</span>
                            </div>
                            <p className="text-pink-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Premium Engineering</p>
                            <div className={`mt-6 text-xs ${t.textMuted} space-y-1`}>
                                <p>contact.synvoke@gmail.com</p>
                                <p>+91 9642469249</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`p-12 md:p-16 min-h-[600px] flex flex-col ${t.bg}`}>

                    {/* Proposal Details */}
                    <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                        <div className="flex-1">
                            <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Prepared For</h3>
                            <h4 className={`text-xl font-display font-bold mb-2 ${t.textMain}`}>{quoteData.clientName}</h4>
                            <p className={`text-sm whitespace-pre-line leading-relaxed mb-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{quoteData.clientAddress}</p>
                            <p className="text-pink-500 font-medium text-sm">{quoteData.clientEmail}</p>
                        </div>
                        <div className={`flex-auto max-w-[200px] border-l-2 pl-8 space-y-6 ${t.borderSoft}`}>
                            <div>
                                <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Issue Date</h3>
                                <p className={`font-mono text-sm ${t.textMain}`}>{new Date(quoteData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                            <div>
                                <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Expiration</h3>
                                <p className={`font-mono text-sm font-bold ${t.textMain}`}>{new Date(quoteData.validUntil).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </div>
                    </div>

                    {/* Estimate Items */}
                    <div className="mb-12">
                        {/* Headers */}
                        <div className={`grid grid-cols-12 gap-4 pb-4 border-b-2 text-[10px] font-bold uppercase tracking-widest ${theme === 'light' ? 'border-gray-900 text-gray-500' : 'border-white text-gray-500'}`}>
                            <div className="col-span-12 md:col-span-7">Deliverable Scope & Breakdown</div>
                            <div className="col-span-3 md:col-span-2 text-center hidden md:block">Qty/Sprint</div>
                            <div className="col-span-5 md:col-span-2 text-right">Unit Est.</div>
                            <div className="col-span-4 md:col-span-1 text-right">Total Est.</div>
                        </div>

                        {/* Items Rows */}
                        <div className="py-2">
                            {items.map((item, index) => (
                                <div key={item.id} className={`grid grid-cols-12 gap-4 py-6 border-b items-start group relative ${t.borderSoft}`}>
                                    <div className="col-span-12 md:col-span-7 pr-4 space-y-2">
                                        <input
                                            type="text"
                                            value={item.title}
                                            onChange={(e) => handleItemChange(item.id, 'title', e.target.value)}
                                            className={`w-full ${t.inputBg} border-none focus:ring-0 p-0 font-bold ${t.textMain}`}
                                            placeholder="Item Title"
                                        />
                                        <textarea
                                            value={item.details}
                                            onChange={(e) => handleItemChange(item.id, 'details', e.target.value)}
                                            className={`w-full ${t.inputBg} border-none focus:ring-0 p-0 text-sm leading-relaxed resize-none ${t.textMuted}`}
                                            placeholder="Detailed description of the work scope..."
                                            rows={2}
                                        />
                                    </div>
                                    <div className="col-span-3 md:col-span-2 hidden md:block mt-1">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                                            className={`w-full ${t.inputBg} border-none text-center focus:ring-0 p-0 font-mono text-sm ${t.textMuted}`}
                                        />
                                    </div>
                                    <div className="col-span-5 md:col-span-2 relative mt-1">
                                        <span className={`absolute left-0 top-1/2 -translate-y-1/2 font-mono text-sm ${t.textMuted}`}>₹</span>
                                        <input
                                            type="number"
                                            value={item.rate}
                                            onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                                            className={`w-full ${t.inputBg} border-none text-right focus:ring-0 p-0 pl-4 font-mono text-sm ${t.textMuted}`}
                                        />
                                    </div>
                                    <div className={`col-span-4 md:col-span-1 text-right font-mono font-medium flex items-center justify-end gap-2 mt-1 text-sm ${t.textMain}`}>
                                        ₹{(item.rate * item.quantity).toLocaleString()}
                                        <button onClick={() => handleRemoveItem(item.id)} className="text-gray-300 hover:text-red-500 print:hidden absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Trash className="w-4 h-4 cursor-pointer" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add line item (Hidden on Print) */}
                        <button onClick={handleAddItem} className="mt-6 flex items-center gap-2 text-sm text-pink-500 font-bold hover:bg-pink-500/10 px-4 py-2.5 rounded-xl transition-colors print:hidden">
                            <Plus className="w-4 h-4" /> Add Scope Item
                        </button>
                    </div>

                    {/* Totals */}
                    <div className="flex justify-end mt-auto">
                        <div className={`w-full max-w-[400px] rounded-3xl p-8 ${t.panelBg}`}>
                            <div className="pt-2 flex flex-col items-end gap-2">
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${t.textMain}`}>Project Estimate</span>
                                <span className={`text-4xl font-display font-bold tracking-tight ${theme === 'light' ? 'text-pink-600' : 'text-pink-400'}`}>
                                    ₹{total.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Signatures/Acceptance (Print visible mostly) */}
                    <div className={`mt-20 grid grid-cols-2 gap-16 border-t pt-12 ${t.borderSoft}`}>
                        <div>
                            <div className={`border-b pb-1 mb-3 ${t.border}`}></div>
                            <span className={`text-[10px] uppercase font-bold tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Accepted By (Client Signature)</span>
                        </div>
                        <div>
                            <div className={`border-b pb-1 mb-3 ${t.border}`}></div>
                            <span className={`text-[10px] uppercase font-bold tracking-widest ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Date</span>
                        </div>
                    </div>

                    {/* Notes Footer */}
                    <div className="mt-12">
                        <p className={`text-xs leading-relaxed whitespace-pre-line text-justify ${t.textMuted}`}>{quoteData.notes}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
