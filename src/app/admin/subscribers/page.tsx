'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Search, Users, Download, Trash2, Mail } from 'lucide-react';

const mockSubscribers = [
    { id: '1', email: 'jane@example.com', date: 'Jan 12, 2026', status: 'Active' },
    { id: '2', email: 'hello@world.com', date: 'Jan 11, 2026', status: 'Active' },
    { id: '3', email: 'test@user.id', date: 'Jan 09, 2026', status: 'Inactive' },
];

export default function SubscribersAdmin() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Email Subscribers</h1>
                    <p className="text-slate-500 mt-1">View and manage your community mailing list.</p>
                </div>
                <Button className="space-x-2 bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20">
                    <Download size={18} />
                    <span>Export CSV</span>
                </Button>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by email..."
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold">
                                <th className="px-8 py-5">Subscriber</th>
                                <th className="px-8 py-5">Subscribed Date</th>
                                <th className="px-8 py-5">Status</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {mockSubscribers.map((sub) => (
                                <tr key={sub.id} className="hover:bg-slate-50/50 transition-all group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                                <Mail size={20} />
                                            </div>
                                            <p className="font-bold text-slate-900 leading-tight">{sub.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-slate-500 capitalize">
                                        {sub.date}
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${sub.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            {sub.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end space-x-1">
                                            <Button variant="ghost" size="sm" className="p-2 text-rose-600 hover:bg-rose-50"><Trash2 size={18} /></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
