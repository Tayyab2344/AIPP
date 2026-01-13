'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Search, Video, Calendar, MapPin, Edit2, Trash2 } from 'lucide-react';

const mockLabs = [
    { id: '1', title: 'Leadership in Digital Age', type: 'Executive', status: 'Upcoming', date: 'Jan 25, 2026' },
    { id: '2', title: 'Data Science for Good', type: 'Workshop', status: 'Live', date: 'Feb 02, 2026' },
];

export default function LabsAdmin() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Lab Management</h1>
                    <p className="text-slate-500 mt-1">Schedule and manage Zoom-based interactive sessions.</p>
                </div>
                <Button className="space-x-2">
                    <Plus size={18} />
                    <span>Schedule Lab</span>
                </Button>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search labs..."
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold">
                                <th className="px-8 py-5">Lab Details</th>
                                <th className="px-8 py-5">Schedule</th>
                                <th className="px-8 py-5">Status</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {mockLabs.map((lab) => (
                                <tr key={lab.id} className="hover:bg-slate-50/50 transition-all group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-violet-50 text-violet-600 rounded-xl">
                                                <Video size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors leading-tight">{lab.title}</p>
                                                <p className="text-xs text-slate-400 mt-1">{lab.type}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-2 text-sm text-slate-500">
                                            <Calendar size={14} />
                                            <span>{lab.date}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${lab.status === 'Live' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                                            }`}>
                                            {lab.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end space-x-1">
                                            <Button variant="ghost" size="sm" className="p-2"><Edit2 size={18} /></Button>
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
