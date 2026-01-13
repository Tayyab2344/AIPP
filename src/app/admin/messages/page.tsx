'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Search, MessageSquare, Reply, Trash2, Clock } from 'lucide-react';

const mockMessages = [
    { id: '1', name: 'Alice Smith', email: 'alice@res.org', message: 'Hello, I am interested in collaborating on the 2024 report. How can I reach the research team?', date: '2h ago' },
    { id: '2', name: 'Global NGO', email: 'contact@globalngo.com', message: 'Requesting a quote for a custom institutional lab for our 50 employees.', date: '5h ago' },
];

export default function MessagesAdmin() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Contact Messages</h1>
                <p className="text-slate-500 mt-1">Inquiries and messages from website visitors.</p>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-sm"
                        />
                    </div>
                </div>

                <div className="divide-y divide-slate-50">
                    {mockMessages.map((msg) => (
                        <div key={msg.id} className="p-8 hover:bg-slate-50/50 transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{msg.name}</h4>
                                        <p className="text-sm text-slate-500">{msg.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                    <Clock size={14} />
                                    <span>{msg.date}</span>
                                </div>
                            </div>

                            <div className="pl-16">
                                <p className="text-slate-600 leading-relaxed mb-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    {msg.message}
                                </p>
                                <div className="flex space-x-3">
                                    <Button variant="outline" size="sm" className="space-x-2">
                                        <Reply size={16} />
                                        <span>Reply Now</span>
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-rose-600 hover:bg-rose-50 p-2">
                                        <Trash2 size={18} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
