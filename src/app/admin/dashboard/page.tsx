'use client';

import { Users, FileText, Video, BookOpen, ArrowUpRight, TrendingUp } from 'lucide-react';

const stats = [
    { label: 'Total Subscribers', value: '1,284', icon: Users, change: '+12%', color: 'text-violet-600', bg: 'bg-violet-50' },
    { label: 'Active Blogs', value: '42', icon: BookOpen, change: '+3', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Upcoming Labs', value: '5', icon: Video, change: '2 new', color: 'text-pink-600', bg: 'bg-pink-50' },
    { label: 'Publications', value: '18', icon: FileText, change: '+1', color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

export default function Dashboard() {
    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900">System Overview</h1>
                <p className="text-slate-500 mt-2">Welcome back, Administrator. Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="flex items-center text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg text-xs font-bold">
                                <TrendingUp size={12} className="mr-1" />
                                {stat.change}
                            </div>
                        </div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-slate-900">Recent Activity</h3>
                        <button className="text-sm font-bold text-violet-600 hover:text-violet-700 flex items-center">
                            <span>View all</span>
                            <ArrowUpRight size={16} className="ml-1" />
                        </button>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-slate-100 shrink-0" />
                                <div className="flex-grow">
                                    <p className="text-sm font-semibold text-slate-800">New publication added</p>
                                    <p className="text-xs text-slate-400">2 hours ago by Sarah J.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-8">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-6 text-left rounded-3xl bg-slate-50 border border-slate-100 hover:border-violet-200 transition-all group">
                            <BookOpen size={24} className="text-violet-600 mb-4 group-hover:scale-110 transition-transform" />
                            <p className="font-bold text-slate-900">New Blog Post</p>
                            <p className="text-xs text-slate-400 mt-1">Write a new article</p>
                        </button>
                        <button className="p-6 text-left rounded-3xl bg-slate-50 border border-slate-100 hover:border-pink-200 transition-all group">
                            <Video size={24} className="text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                            <p className="font-bold text-slate-900">Schedule Lab</p>
                            <p className="text-xs text-slate-400 mt-1">Create a Zoom session</p>
                        </button>
                        <button className="p-6 text-left rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                            <FileText size={24} className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <p className="font-bold text-slate-900">Upload Report</p>
                            <p className="text-xs text-slate-400 mt-1">Add new PDF research</p>
                        </button>
                        <button className="p-6 text-left rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all group">
                            <Users size={24} className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                            <p className="font-bold text-slate-900">Subscriber List</p>
                            <p className="text-xs text-slate-400 mt-1">Export email database</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
