import React, { useState } from 'react';
import { Plus, Trash, Download, Printer, Settings2 } from 'lucide-react';

export default function InvoiceManager() {
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
        { id: '1', description: 'Enterprise Backend Engineering (Sprint 1)', rate: 15000, quantity: 1 },
        { id: '2', description: 'Real-time Data Pipeline Setup', rate: 12500, quantity: 1 },
    ]);

    const handleAddItem = () => {
        setItems([...items, { id: Date.now().toString(), description: 'New Service Item', rate: 0, quantity: 1 }]);
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

    return (
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 items-start relative pb-32">

            {/* Editor Sidebar (Hidden on Print) */}
            <div className="w-full xl:w-[400px] shrink-0 bg-white shadow-xl shadow-gray-200/50 rounded-3xl p-6 border border-gray-100 print:hidden sticky top-32 z-40">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                        <Settings2 className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-gray-900 text-lg">Invoice Settings</h3>
                        <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mt-1">Template Engine</p>
                    </div>
                </div>

                <div className="space-y-5 custom-scrollbar max-h-[60vh] overflow-y-auto pr-2">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Invoice Number</label>
                        <input type="text" value={invoiceData.invoiceNumber} onChange={e => setInvoiceData({ ...invoiceData, invoiceNumber: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Date</label>
                            <input type="date" value={invoiceData.date} onChange={e => setInvoiceData({ ...invoiceData, date: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Due Date</label>
                            <input type="date" value={invoiceData.dueDate} onChange={e => setInvoiceData({ ...invoiceData, dueDate: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Client Name</label>
                        <input type="text" value={invoiceData.clientName} onChange={e => setInvoiceData({ ...invoiceData, clientName: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 mb-4" />

                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Client Email</label>
                        <input type="text" value={invoiceData.clientEmail} onChange={e => setInvoiceData({ ...invoiceData, clientEmail: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 mb-4" />

                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Client Address</label>
                        <textarea rows={3} value={invoiceData.clientAddress} onChange={e => setInvoiceData({ ...invoiceData, clientAddress: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Footer Notes / Terms</label>
                        <textarea rows={4} value={invoiceData.notes} onChange={e => setInvoiceData({ ...invoiceData, notes: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                </div>

                <div className="mt-6 space-y-3 pt-6 border-t border-gray-100">
                    <button onClick={handlePrint} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 transition-all">
                        <Printer className="w-5 h-5" /> Export PDF & Print
                    </button>
                    <p className="text-center text-xs text-gray-400">Creates a highly professional, margins-free PDF using your browser's native print engine.</p>
                </div>
            </div>

            {/* A4 Paper Canvas (Visible heavily on print) */}
            <div className="w-full max-w-[850px] bg-white mx-auto shadow-2xl xl:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mb-20 relative overflow-hidden print:shadow-none print:m-0 print:absolute print:top-0 print:left-0">
                {/* Print Layout Styling */}
                <style>{`
                    @media print {
                        @page { size: auto; margin: 0mm; }
                        body { background: white; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                        .print\\:hidden { display: none !important; }
                        .admin-portal { padding: 0 !important; margin: 0 !important; background: white !important; min-height: 0 !important; }
                    }
                `}</style>

                {/* Invoice Header */}
                <div className="bg-white text-gray-900 border-b-2 border-indigo-100 p-12 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
                    <div className="flex justify-between items-start relative z-10 w-full">
                        <div className="max-w-[50%]">
                            <h1 className="text-4xl md:text-5xl font-display font-light tracking-tight mb-2 text-indigo-900/40 uppercase">Invoice</h1>
                            <div className="text-gray-900 font-mono font-bold tracking-widest uppercase">{invoiceData.invoiceNumber}</div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-3xl font-display font-bold text-gray-900">SynVoke</span>
                            </div>
                            <p className="text-indigo-600 font-mono text-xs uppercase tracking-[0.2em]">Premium Engineering</p>
                            <div className="mt-6 text-sm text-gray-500 space-y-1">
                                <p>contact.synvoke@gmail.com</p>
                                <p>+91 9642469249</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-12 md:p-16 bg-white min-h-[600px] flex flex-col">

                    {/* Bill To & Dates */}
                    <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                        <div className="flex-1">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Billed To</h3>
                            <h4 className="text-xl font-display font-bold text-gray-900 mb-2">{invoiceData.clientName}</h4>
                            <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed mb-2">{invoiceData.clientAddress}</p>
                            <p className="text-indigo-600 font-medium text-sm">{invoiceData.clientEmail}</p>
                        </div>
                        <div className="flex-auto max-w-[200px] border-l-2 border-gray-100 pl-8 space-y-6">
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Issue Date</h3>
                                <p className="font-mono text-gray-900">{new Date(invoiceData.date).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Due Date</h3>
                                <p className="font-mono text-gray-900 font-bold">{new Date(invoiceData.dueDate).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>

                    {/* Line Items */}
                    <div className="mb-12">
                        {/* Headers */}
                        <div className="grid grid-cols-12 gap-4 pb-4 border-b-2 border-gray-900 text-xs font-bold text-gray-500 uppercase tracking-widest">
                            <div className="col-span-6 md:col-span-7">Description</div>
                            <div className="col-span-2 text-center hidden md:block">Qty</div>
                            <div className="col-span-3 md:col-span-2 text-right">Rate</div>
                            <div className="col-span-3 md:col-span-1 text-right">Amount</div>
                        </div>

                        {/* Items Rows */}
                        <div className="py-2">
                            {items.map((item, index) => (
                                <div key={item.id} className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 items-center group">
                                    <div className="col-span-6 md:col-span-7 pr-4">
                                        <input
                                            type="text"
                                            value={item.description}
                                            onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                                            className="w-full bg-transparent border-none text-gray-900 focus:ring-0 p-0 font-medium"
                                        />
                                    </div>
                                    <div className="col-span-2 hidden md:block">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                                            className="w-full bg-transparent border-none text-gray-600 text-center focus:ring-0 p-0 font-mono"
                                        />
                                    </div>
                                    <div className="col-span-3 md:col-span-2 relative">
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 font-mono">₹</span>
                                        <input
                                            type="number"
                                            value={item.rate}
                                            onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                                            className="w-full bg-transparent border-none text-gray-600 text-right focus:ring-0 p-0 pl-4 font-mono"
                                        />
                                    </div>
                                    <div className="col-span-3 md:col-span-1 text-right font-mono font-medium text-gray-900 flex items-center justify-end gap-2">
                                        ₹{(item.rate * item.quantity).toLocaleString()}
                                        <button onClick={() => handleRemoveItem(item.id)} className="text-gray-300 hover:text-red-500 print:hidden absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Trash className="w-4 h-4 cursor-pointer" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add line item (Hidden on Print) */}
                        <button onClick={handleAddItem} className="mt-4 flex items-center gap-2 text-sm text-indigo-600 font-medium hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors print:hidden">
                            <Plus className="w-4 h-4" /> Add Line Item
                        </button>
                    </div>

                    {/* Totals */}
                    <div className="flex justify-end mt-auto">
                        <div className="w-full max-w-[350px] bg-gray-50 rounded-2xl p-6 md:p-8">
                            <div className="flex justify-between items-center mb-4 text-gray-500 text-sm">
                                <span>Subtotal</span>
                                <span className="font-mono text-gray-900">₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center mb-6 text-gray-500 text-sm">
                                <span>Tax (0%)</span>
                                <span className="font-mono text-gray-900">₹0</span>
                            </div>
                            <div className="pt-4 border-t border-gray-200 flex justify-between items-end">
                                <span className="text-sm font-bold text-gray-900 uppercase tracking-widest block mb-1">Total Due</span>
                                <span className="text-3xl font-display font-bold text-indigo-600 tracking-tight">
                                    ₹{total.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Notes Footer */}
                    <div className="mt-16 pt-8 border-t border-gray-100">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Terms & Notes</h3>
                        <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">{invoiceData.notes}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
