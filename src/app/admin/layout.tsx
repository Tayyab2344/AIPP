'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    BookOpen,
    Video,
    FileText,
    Users,
    MessageSquare,
    Settings,
    LogOut,
    ChevronRight
} from 'lucide-react';

const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Blogs', href: '/admin/blogs', icon: BookOpen },
    { label: 'Labs', href: '/admin/labs', icon: Video },
    { label: 'Publications', href: '/admin/publications', icon: FileText },
    { label: 'Subscribers', href: '/admin/subscribers', icon: Users },
    { label: 'Messages', href: '/admin/messages', icon: MessageSquare },
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
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="w-8 h-8 border-4 border-violet-600 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-slate-200 flex flex-col fixed inset-y-0">
                <div className="p-8">
                    <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">
                        Empower Admin
                    </Link>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all group ${isActive
                                        ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <item.icon size={20} />
                                    <span className="text-sm font-semibold">{item.label}</span>
                                </div>
                                {isActive && <ChevronRight size={16} />}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={() => auth.signOut()}
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-all font-semibold text-sm"
                    >
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow ml-72 p-10">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
