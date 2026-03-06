import React, { useState } from 'react';
import { Plus, Trash, Download, Printer, Settings2, Moon, Sun } from 'lucide-react';

export default function InvoiceManager() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [invoiceData, setInvoiceData] = useState({
        invoiceNumber: 'INV-2026-0001',
        date: new Date().toISOString().split('T')[0],
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clientName: 'Enterprise Client Corp',
        clientAddress: '123 Tech Boulevard\nSan Francisco, CA 94107',
        clientEmail: 'billing@enterprise.com',
        notes: 'Thank you for choosing SynVoke for your engineering needs. All payments are due within 14 days of invoice date.'
    });

    const [items, setItems] = useState([
        { id: '1', title: 'Enterprise Backend Engineering (Sprint 1)', details: 'Initial deployment sprint for Kubernetes clusters, Redis caching layer, and core API monolith setup.', rate: 15000, quantity: 1, days: 15 },
        { id: '2', title: 'Real-time Data Pipeline Setup', details: 'Socket.IO initialization and worker thread deployment for real-time analytics aggregation.', rate: 12500, quantity: 1, days: 12 },
    ]);

    const handleAddItem = () => {
        setItems([...items, { id: Date.now().toString(), title: 'New Service Item', details: '', rate: 0, quantity: 1, days: 1 }]);
    };

    const handleItemChange = (id: string, field: string, value: string | number) => {
        setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const handleRemoveItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((sum, item) => sum + (item.rate * item.quantity), 0);
    const taxRate = 0; // Assuming zero tax for simplicity in core B2B, or configurable
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
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                            <Settings2 className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">Invoice Settings</h3>
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
                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Invoice Number</label>
                        <input type="text" value={invoiceData.invoiceNumber} onChange={e => setInvoiceData({ ...invoiceData, invoiceNumber: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Issue Date</label>
                            <input type="date" value={invoiceData.date} onChange={e => setInvoiceData({ ...invoiceData, date: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Due Date</label>
                            <input type="date" value={invoiceData.dueDate} onChange={e => setInvoiceData({ ...invoiceData, dueDate: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Client Name</label>
                        <input type="text" value={invoiceData.clientName} onChange={e => setInvoiceData({ ...invoiceData, clientName: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 mb-4" />

                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Client Email</label>
                        <input type="text" value={invoiceData.clientEmail} onChange={e => setInvoiceData({ ...invoiceData, clientEmail: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 mb-4" />

                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Client Address</label>
                        <textarea rows={3} value={invoiceData.clientAddress} onChange={e => setInvoiceData({ ...invoiceData, clientAddress: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2">Footer Notes / Terms</label>
                        <textarea rows={4} value={invoiceData.notes} onChange={e => setInvoiceData({ ...invoiceData, notes: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                </div>

                <div className="mt-6 space-y-3 pt-6 border-t border-gray-100">
                    <button onClick={handlePrint} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 transition-all">
                        <Printer className="w-5 h-5" /> Export PDF & Print
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

                {/* Invoice Header */}
                <div className={`p-12 md:p-16 relative overflow-hidden border-b-2 ${theme === 'light' ? 'border-indigo-100' : 'border-white/5'}`}>
                    <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4 ${theme === 'light' ? 'bg-gradient-to-br from-indigo-500/10 to-cyan-500/10' : 'bg-gradient-to-br from-indigo-500/20 to-cyan-500/20'}`}></div>

                    <div className="flex justify-between items-start relative z-10 w-full">
                        <div className="max-w-[50%]">
                            <h1 className={`text-5xl md:text-6xl font-display font-light tracking-tight mb-2 uppercase ${theme === 'light' ? 'text-indigo-900/30' : 'text-white/20'}`}>Invoice</h1>
                            <div className={`${t.textMain} font-mono font-bold tracking-widest uppercase`}>{invoiceData.invoiceNumber}</div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-4xl font-display font-bold ${t.textMain}`}>SynVoke</span>
                            </div>
                            <p className="text-indigo-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Premium Engineering</p>
                            <div className={`mt-6 text-xs ${t.textMuted} space-y-1`}>
                                <p>contact.synvoke@gmail.com</p>
                                <p>+91 9642469249</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`p-12 md:p-16 min-h-[600px] flex flex-col ${t.bg}`}>

                    {/* Bill To & Dates */}
                    <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                        <div className="flex-1">
                            <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Billed To</h3>
                            <h4 className={`text-xl font-display font-bold mb-2 ${t.textMain}`}>{invoiceData.clientName}</h4>
                            <p className={`text-sm whitespace-pre-line leading-relaxed mb-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{invoiceData.clientAddress}</p>
                            <p className="text-indigo-500 font-medium text-sm">{invoiceData.clientEmail}</p>
                        </div>
                        <div className={`flex-auto max-w-[200px] border-l-2 pl-8 space-y-6 ${t.borderSoft}`}>
                            <div>
                                <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Issue Date</h3>
                                <p className={`font-mono text-sm ${t.textMain}`}>{new Date(invoiceData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                            <div>
                                <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Due Date</h3>
                                <p className={`font-mono text-sm font-bold ${t.textMain}`}>{new Date(invoiceData.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </div>
                    </div>

                    {/* Line Items */}
                    <div className="mb-12">
                        {/* Headers */}
                        <div className={`grid grid-cols-12 gap-4 pb-4 border-b-2 text-[10px] font-bold uppercase tracking-widest ${theme === 'light' ? 'border-gray-900 text-gray-500' : 'border-white text-gray-500'}`}>
                            <div className="col-span-12 md:col-span-5">Description</div>
                            <div className="col-span-4 md:col-span-2 text-center hidden md:block">Timebox (Days)</div>
                            <div className="col-span-3 md:col-span-1 text-center hidden md:block">Qty</div>
                            <div className="col-span-6 md:col-span-2 text-right hidden md:block">Rate</div>
                            <div className="col-span-6 md:col-span-2 text-right hidden md:block">Amount</div>
                        </div>

                        {/* Items Rows */}
                        <div className="py-2">
                            {items.map((item, index) => (
                                <div key={item.id} className={`grid grid-cols-12 gap-4 py-6 border-b items-start group relative ${t.borderSoft}`}>
                                    <div className="col-span-12 md:col-span-5 pr-4 space-y-2">
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
                                    <div className="col-span-4 md:col-span-2 hidden md:block mt-1">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.days || ''}
                                            onChange={(e) => handleItemChange(item.id, 'days', parseFloat(e.target.value) || 0)}
                                            className={`w-full ${t.inputBg} border-none text-center focus:ring-0 p-0 font-mono text-sm ${t.textMuted}`}
                                            placeholder="Days"
                                        />
                                    </div>
                                    <div className="col-span-3 md:col-span-1 hidden md:block mt-1">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                                            className={`w-full ${t.inputBg} border-none text-center focus:ring-0 p-0 font-mono text-sm ${t.textMuted}`}
                                        />
                                    </div>
                                    <div className="col-span-6 md:col-span-2 relative mt-1">
                                        <span className={`absolute left-0 top-1/2 -translate-y-1/2 font-mono text-sm ${t.textMuted}`}>₹</span>
                                        <input
                                            type="number"
                                            value={item.rate}
                                            onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                                            className={`w-full ${t.inputBg} border-none text-right focus:ring-0 p-0 pl-4 font-mono text-sm ${t.textMuted}`}
                                        />
                                    </div>
                                    <div className={`col-span-6 md:col-span-2 text-right font-mono font-medium flex items-center justify-end gap-2 mt-1 text-sm ${t.textMain}`}>
                                        ₹{(item.rate * item.quantity).toLocaleString()}
                                        <button onClick={() => handleRemoveItem(item.id)} className="text-gray-300 hover:text-red-500 print:hidden absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Trash className="w-4 h-4 cursor-pointer" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add line item (Hidden on Print) */}
                        <button onClick={handleAddItem} className="mt-6 flex items-center gap-2 text-sm text-indigo-500 font-bold hover:bg-indigo-500/10 px-4 py-2.5 rounded-xl transition-colors print:hidden">
                            <Plus className="w-4 h-4" /> Add Line Item
                        </button>
                    </div>

                    {/* Totals */}
                    <div className="flex justify-end mt-auto">
                        <div className={`w-full max-w-[400px] rounded-3xl p-8 ${t.panelBg}`}>
                            <div className={`flex justify-between items-center mb-4 text-sm ${t.textMuted}`}>
                                <span>Subtotal</span>
                                <span className={`font-mono ${t.textMain}`}>₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className={`flex justify-between items-center mb-6 text-sm ${t.textMuted}`}>
                                <span>Tax (0%)</span>
                                <span className={`font-mono ${t.textMain}`}>₹0</span>
                            </div>
                            <div className={`pt-4 border-t flex justify-between items-end ${t.borderSoft}`}>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${t.textMain}`}>Total Due</span>
                                <span className={`text-4xl font-display font-bold tracking-tight ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`}>
                                    ₹{total.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Notes Footer */}
                    <div className={`mt-12 pt-12 border-t ${t.borderSoft}`}>
                        <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>Terms & Notes</h3>
                        <p className={`text-xs leading-relaxed whitespace-pre-line text-justify ${t.textMuted}`}>{invoiceData.notes}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
