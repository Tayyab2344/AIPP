'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    LayoutGrid,
    BookOpen,
    FileText,
    FlaskConical,
    Sparkles,
    Users,
    Mail,
    Settings,
    LogOut,
    Search,
    Bell,
    BarChart3,
} from 'lucide-react';

const navItems = [
    { label: 'Overview', href: '/admin/dashboard', icon: LayoutGrid },
    { label: 'Programs', href: '/admin/programs', icon: BookOpen },
    { label: 'Publications', href: '/admin/publications', icon: FileText },
    { label: 'Insights', href: '/admin/insights', icon: BarChart3 },
    { label: 'Subscribers', href: '/admin/subscribers', icon: Users },
    { label: 'Engagement', href: '/admin/collaborations', icon: Sparkles },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (!currentUser && pathname !== '/admin/login') {
                router.push('/admin/login');
            }
        });

        return () => unsubscribe();
    }, [router, pathname]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
                <div className="w-8 h-8 border-4 border-[#2F4F4F] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#2F4F4F] flex flex-col fixed inset-y-0">
                {/* Logo Section */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="/aipp-logo.png"
                                alt="AIPP Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <div className="text-white font-bold text-lg tracking-wide">AIPP ADMIN</div>
                            <div className="text-[#7FB3B3] text-xs tracking-widest uppercase">Think Tank</div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-grow py-8 px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href === '/admin/dashboard' && pathname === '/admin');
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center space-x-3 px-4 py-3.5 rounded-lg transition-all duration-200 ${isActive
                                    ? 'bg-[#B19B4C] text-white shadow-md'
                                    : 'text-[#A8C5C5] hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                <span className={`text-sm tracking-wide ${isActive ? 'font-bold' : 'font-medium'}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Actions - Settings & Logout */}
                <div className="mt-auto">
                    <div className="px-3 py-2 space-y-1">
                        <Link
                            href="/admin/settings"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#A8C5C5] hover:bg-white/5 hover:text-white transition-all"
                        >
                            <Settings suppressHydrationWarning size={20} />
                            <span className="text-sm font-medium">Settings</span>
                        </Link>
                        <button
                            onClick={() => auth.signOut()}
                            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-all"
                        >
                            <LogOut suppressHydrationWarning size={20} />
                            <span className="text-sm font-medium">Logout</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-4 border-t border-white/10">
                        <p className="text-[10px] text-[#7FB3B3] text-center">
                            © 2024 Athena Institute for Political Praxis. Institutional Access Only.
                        </p>
                        <div className="flex justify-center space-x-4 mt-2 text-[10px] text-[#7FB3B3]">
                            <a href="#" className="hover:text-white transition-colors underline">Privacy Protocol</a>
                            <a href="#" className="hover:text-white transition-colors underline">System Documentation</a>
                            <a href="#" className="hover:text-white transition-colors underline">Help Desk</a>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-grow ml-64 flex flex-col min-h-screen">
                {/* Top Header */}
                <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
                    <div className="flex items-center justify-between px-8 py-4">
                        <h1 className="text-xl font-semibold text-slate-800">Dashboard Overview</h1>

                        <div className="flex items-center space-x-6">
                            {/* Search Bar */}
                            <div className="relative">
                                <Search suppressHydrationWarning size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search resources..."
                                    className="w-64 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#B19B4C] focus:ring-1 focus:ring-[#B19B4C] transition-all"
                                />
                            </div>

                            {/* Notification Bell */}
                            <button className="relative p-2 text-slate-500 hover:text-slate-700 transition-colors">
                                <Bell suppressHydrationWarning size={20} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
                            </button>

                            {/* User Profile */}
                            <div className="flex items-center space-x-3">
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-slate-800">{user?.displayName || 'Tayyaba Atiq'}</div>
                                    <div className="text-xs text-slate-500">Administrator</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2F4F4F] to-[#4A7070] flex items-center justify-center text-white font-semibold text-sm">
                                    TA
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-grow p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
