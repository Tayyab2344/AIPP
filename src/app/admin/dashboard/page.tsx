'use client';

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
    BarChart3
} from 'lucide-react';
import Link from 'next/link';

// Stats data
const stats = [
    {
        label: 'TOTAL SUBSCRIBERS',
        value: '12,450',
        change: '+2.4%',
        icon: Users,
        bgColor: 'bg-slate-50',
        borderColor: 'border-slate-200'
    },
    {
        label: 'RECENT INQUIRIES',
        value: '18',
        subtitle: 'Last 24 hours',
        icon: Mail,
        bgColor: 'bg-slate-50',
        borderColor: 'border-slate-200'
    },
    {
        label: 'ACTIVE LAB PARTICIPANTS',
        value: '42',
        subtitle: 'Current Session',
        icon: DownloadIcon,
        bgColor: 'bg-slate-50',
        borderColor: 'border-slate-200'
    },
];

// Recent activities data
const recentActivities = [
    {
        icon: FileText,
        iconBg: 'bg-[#2F4F4F]',
        iconColor: 'text-white',
        title: 'Research Paper Published',
        description: '"Geopolitical Shifts 2024: A Comparative Analysis" published to Public domain.',
        time: '2h ago'
    },
    {
        icon: DownloadIcon,
        iconBg: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
        title: 'Subscriber List Exported',
        description: 'Admin user (vance_a) exported full subscriber list (CSV).',
        time: '5h ago'
    },
    {
        icon: MessageSquare,
        iconBg: 'bg-orange-50',
        iconColor: 'text-orange-600',
        title: 'New Lab Session Inbound',
        description: 'Inquiry received regarding "Democratic Resilience Lab" from Global Alliance.',
        time: 'Yesterday'
    },
    {
        icon: UserPlus,
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-600',
        title: 'New Institutional Member',
        description: 'University of Political Sciences joined as a Premium Subscriber.',
        time: 'Oct 12'
    },
];

// Quick actions data
const quickActions = [
    {
        icon: Upload,
        label: 'Publish New Research',
        primary: true,
    },
    {
        icon: FlaskConical,
        label: 'Create New Lab Session',
        primary: false,
    },
    {
        icon: BarChart3,
        label: 'View Strategic Insights',
        href: '/admin/insights',
        primary: false,
    },
    {
        icon: DownloadIcon,
        label: 'Export Subscriber List',
        href: '/admin/subscribers',
        primary: false,
    },
];

export default function Dashboard() {
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
                {stats.map((stat, i) => (
                    <Link
                        key={i}
                        href="/admin/insights"
                        className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-all group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-semibold text-slate-500 tracking-wide">
                                {stat.label}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#2F4F4F] group-hover:text-white transition-colors">
                                <stat.icon size={18} />
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold text-slate-900 font-serif">{stat.value}</span>
                            {stat.change && (
                                <span className="text-emerald-600 text-sm font-medium flex items-center">
                                    <TrendingUp size={14} className="mr-1" />{stat.change}
                                </span>
                            )}
                            {stat.subtitle && (
                                <span className="text-slate-400 text-sm">{stat.subtitle}</span>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activities - Takes 2 columns */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Activities</h3>
                    <div className="space-y-5">
                        {recentActivities.map((activity, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <div className={`w-10 h-10 rounded-lg ${activity.iconBg} flex items-center justify-center ${activity.iconColor} shrink-0`}>
                                    <activity.icon size={18} />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-slate-800">{activity.title}</p>
                                        <span className="text-xs text-slate-400 shrink-0 ml-2">{activity.time}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-0.5 truncate">{activity.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 text-center text-sm font-semibold text-[#2F4F4F] hover:text-[#1F3F3F] transition-colors">
                        View All Activities
                    </button>
                </div>

                {/* Right Column - Quick Actions & System Status */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            {quickActions.map((action, i) => (
                                <Link
                                    key={i}
                                    href={action.href || '#'}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${action.primary
                                        ? 'bg-[#2F4F4F] text-white hover:bg-[#1F3F3F]'
                                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                                        }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <action.icon size={18} />
                                        <span className="text-sm font-medium">{action.label}</span>
                                    </div>
                                    <ChevronRight suppressHydrationWarning size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">System Status</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-sm text-slate-600">Server Health</span>
                                </div>
                                <span className="text-sm font-semibold text-emerald-600">99.9%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-sm text-slate-600">Security Protocol</span>
                                </div>
                                <span className="text-xs font-mono text-slate-500">AES-256 <span className="text-emerald-600 font-semibold">ACTIVE</span></span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                    <span className="text-sm text-slate-600">Last Audit</span>
                                </div>
                                <span className="text-sm text-slate-500">14 Oct 2023</span>
                            </div>

                            {/* Storage Bar */}
                            <div className="pt-3 border-t border-slate-100">
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-[#2F4F4F] rounded-full"></div>
                                </div>
                                <p className="text-xs text-slate-400 mt-2 text-center tracking-widest uppercase">
                                    Database Storage: 85% Used
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
