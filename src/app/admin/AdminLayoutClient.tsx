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
    Sparkles,
    Users,
    Settings,
    LogOut,
    Search,
    Bell,
    BarChart3,
    Menu,
    X,
} from 'lucide-react';

const navItems = [
    { label: 'Overview', href: '/admin/dashboard', icon: LayoutGrid },
    { label: 'Programs', href: '/admin/programs', icon: BookOpen },
    { label: 'Publications', href: '/admin/publications', icon: FileText },
    { label: 'Insights', href: '/admin/insights', icon: BarChart3 },
    { label: 'Subscribers', href: '/admin/subscribers', icon: Users },
    { label: 'Engagement', href: '/admin/collaborations', icon: Sparkles },
];

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

    // Close sidebar when route changes on mobile
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

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
        <div className="min-h-screen bg-[#F8F9FA] flex overflow-x-hidden">
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 w-64 bg-[#2F4F4F] flex flex-col z-50 transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Logo Section */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
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
                    {/* Close button for mobile */}
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden text-[#A8C5C5] hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-grow py-8 px-4 space-y-2 overflow-y-auto">
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
                            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-all font-medium"
                        >
                            <LogOut suppressHydrationWarning size={20} />
                            <span className="text-sm">Logout</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-4 border-t border-white/10">
                        <p className="text-[10px] text-[#7FB3B3] text-center">
                            © 2024 Athena Institute. Institutional Access Only.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-grow flex flex-col min-h-screen lg:ml-64 w-full transition-all duration-300">
                {/* Top Header */}
                <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
                    <div className="flex items-center justify-between px-4 sm:px-8 py-4">
                        <div className="flex items-center space-x-4">
                            {/* Mobile Toggle Button */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                            >
                                <Menu size={24} />
                            </button>
                            <h1 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight truncate">
                                {navItems.find(item => item.href === pathname)?.label || 'AIPP Dashboard'}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-6">
                            {/* Search Bar - Hidden on small mobile */}
                            <div className="relative hidden md:block">
                                <Search suppressHydrationWarning size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search resources..."
                                    className="w-48 lg:w-64 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#B19B4C] focus:ring-1 focus:ring-[#B19B4C] transition-all"
                                />
                            </div>

                            {/* Notification Bell */}
                            <button className="relative p-2 text-slate-500 hover:text-slate-700 transition-colors">
                                <Bell suppressHydrationWarning size={20} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                            </button>

                            {/* User Profile */}
                            <div className="flex items-center space-x-3 border-l border-slate-100 pl-4 sm:pl-6 ml-2">
                                <div className="text-right hidden sm:block">
                                    <div className="text-sm font-bold text-slate-800">{user?.displayName || 'Tayyaba Atiq'}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Admin</div>
                                </div>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#2F4F4F] to-[#4A7070] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-inner cursor-pointer hover:opacity-90 transition-opacity">
                                    {user?.displayName?.[0] || 'T'}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-grow p-4 sm:p-8 max-w-[1600px] w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
