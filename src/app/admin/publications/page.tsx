'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Search, FileText, Download, Edit2, Trash2 } from 'lucide-react';

const mockPubs = [
    { id: '1', title: 'Women in Tech 2024', category: 'Report', size: '2.4 MB' },
    { id: '2', title: 'Global Literacy Trends', category: 'Case Study', size: '1.8 MB' },
];

export default function PublicationsAdmin() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Publications</h1>
                    <p className="text-slate-500 mt-1">Manage research papers, PDF reports, and policy briefs.</p>
                </div>
                <Button className="space-x-2">
                    <Plus size={18} />
                    <span>Upload PDF</span>
                </Button>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search publications..."
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold">
                                <th className="px-8 py-5">Document</th>
                                <th className="px-8 py-5">Category</th>
                                <th className="px-8 py-5">File Info</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {mockPubs.map((pub) => (
                                <tr key={pub.id} className="hover:bg-slate-50/50 transition-all group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                                <FileText size={20} />
                                            </div>
                                            <p className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors leading-tight">{pub.title}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-slate-500">
                                        {pub.category}
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-bold text-slate-400">PDF — {pub.size}</span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end space-x-1">
                                            <Button variant="ghost" size="sm" className="p-2"><Download size={18} /></Button>
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
