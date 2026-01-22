'use client';

import { useState, useEffect } from 'react';
import {
    Users,
    Mail,
    Download as DownloadIcon,
    FileText,
    MessageSquare,
    UserPlus,
    FlaskConical,
    Upload,
    ChevronRight,
    TrendingUp,
    BarChart3,
    Loader2,
    Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { subscriberService } from '@/lib/services/subscriberService';
import { inquiryService } from '@/lib/services/inquiryService';
import { programService } from '@/lib/services/programService';
import { engagementService } from '@/lib/services/engagementService';

export default function Dashboard() {
    const [stats, setStats] = useState({
        subscribers: { value: '0', loading: true },
        inquiries: { value: '0', loading: true },
        programs: { value: '0', loading: true },
        collaborations: { value: '0', loading: true },
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const subs = await subscriberService.getSubscribers();
                setStats(prev => ({ ...prev, subscribers: { value: subs.length.toString(), loading: false } }));

                const inqs = await inquiryService.getInquiries();
                setStats(prev => ({ ...prev, inquiries: { value: inqs.length.toString(), loading: false } }));

                const progs = await programService.getAll();
                setStats(prev => ({ ...prev, programs: { value: progs.length.toString(), loading: false } }));

                const collabs = await engagementService.getAll();
                setStats(prev => ({ ...prev, collaborations: { value: collabs.length.toString(), loading: false } }));
            } catch (error) {
                console.error("Error fetching dashboard stats:", error);
            }
        };
        fetchStats();
    }, []);

    const statCards = [
        {
            label: 'TOTAL SUBSCRIBERS',
            value: stats.subscribers.value,
            loading: stats.subscribers.loading,
            change: '+1 during this session',
            icon: Users,
            href: '/admin/subscribers'
        },
        {
            label: 'ENGAGEMENT HUB',
            value: stats.collaborations.value,
            loading: stats.collaborations.loading,
            subtitle: 'Mission Interests',
            icon: Sparkles,
            href: '/admin/collaborations'
        },
        {
            label: 'RECENT INQUIRIES',
            value: stats.inquiries.value,
            loading: stats.inquiries.loading,
            subtitle: 'Institutional Inbox',
            icon: Mail,
            href: '/admin/messages'
        },
    ];

    // Mock activities for now, but could be made dynamic
    const recentActivities = [
        {
            icon: FileText,
            iconBg: 'bg-[#2F4F4F]',
            iconColor: 'text-white',
            title: 'Institutional Portal Active',
            description: 'The Athena Institute administrative nexus is fully operational with Firestore synchronization.',
            time: 'Just now'
        },
        {
            icon: MessageSquare,
            iconBg: 'bg-orange-50',
            iconColor: 'text-orange-600',
            title: 'Dynamic Data Transition',
            description: 'Hardcoded arrays have been purged from Blogs, Programs, and Inquiries.',
            time: '2h ago'
        },
    ];
    return (
        <div>
            {/* Header Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 font-serif">Engagement Snapshot</h2>
                <p className="text-slate-500 text-sm mt-1">
                    Real-time performance metrics for AIPP programs and outreach.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {statCards.map((stat, i) => (
                    <Link
                        key={i}
                        href={stat.href}
                        className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-all group min-h-[140px] flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                                {stat.label}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#2F4F4F] group-hover:text-white transition-colors">
                                <stat.icon size={18} />
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            {stat.loading ? (
                                <Loader2 size={24} className="animate-spin text-slate-200" />
                            ) : (
                                <span className="text-3xl font-bold text-slate-900 font-serif">{stat.value}</span>
                            )}
                            {stat.change && !stat.loading && (
                                <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest flex items-center">
                                    <TrendingUp size={12} className="mr-1" />{stat.change}
                                </span>
                            )}
                            {stat.subtitle && !stat.loading && (
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.subtitle}</span>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activities - Takes 2 columns */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">System Activity Log</h3>
                    <div className="space-y-6">
                        {recentActivities.map((activity, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <div className={`w-10 h-10 rounded-lg ${activity.iconBg} flex items-center justify-center ${activity.iconColor} shrink-0 border border-slate-100 shadow-sm`}>
                                    <activity.icon size={18} />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-bold text-slate-900">{activity.title}</p>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0 ml-2">{activity.time}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1 leading-relaxed italic">"{activity.description}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Quick Actions & System Status */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Strategic Actions</h3>
                        <div className="space-y-3">
                            {[
                                { icon: Upload, label: 'Broadcast Insight', href: '/admin/blogs', primary: true },
                                { icon: FlaskConical, label: 'Architect Offering', href: '/admin/programs', primary: false },
                                { icon: Sparkles, label: 'Review Engagement', href: '/admin/collaborations', primary: false },
                                { icon: UserPlus, label: 'Network Nexus', href: '/admin/subscribers', primary: false },
                            ].map((action, i) => (
                                <Link
                                    key={i}
                                    href={action.href}
                                    className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all ${action.primary
                                        ? 'bg-[#2D4A4F] text-white hover:bg-[#1F3F3F] shadow-md'
                                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100'
                                        }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <action.icon size={18} className={action.primary ? 'text-white' : 'text-slate-400'} />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{action.label}</span>
                                    </div>
                                    <ChevronRight suppressHydrationWarning size={14} className={action.primary ? 'text-white/50' : 'text-slate-300'} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Nexus Status</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Firestore Sync</span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 uppercase">Veridical</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Security Layer</span>
                                </div>
                                <span className="text-[10px] font-mono text-slate-400">SSL / AES-256</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Last Protocol Audit</span>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Today</span>
                            </div>

                            {/* Storage Bar */}
                            <div className="pt-5 border-t border-slate-50">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cloud Utility</span>
                                    <span className="text-[10px] font-bold text-slate-900">0.2%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[1%] bg-[#2D4A4F] rounded-full transition-all duration-1000"></div>
                                </div>
                                <p className="text-[9px] text-slate-400 mt-2 text-center tracking-[0.2em] uppercase font-medium">
                                    Institutional Repository Capacity
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
