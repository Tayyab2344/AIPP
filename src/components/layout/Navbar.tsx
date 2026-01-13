"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/insights", label: "Insights" },
        { href: "/framework", label: "Research & Policy" },
        { href: "/labs", label: "Labs & Strategic Learning" },
        { href: "/publications", label: "Publications" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between md:justify-start h-20 relative">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-black text-[var(--primary)] tracking-tighter">
                            AIPP
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="text-xs font-bold text-slate-900 hover:text-[var(--primary)] transition-colors uppercase tracking-widest whitespace-nowrap">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex ml-auto items-center">
                        <Link href="/join" className="bg-[#1A5261] text-white py-2 px-6 text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-[#14414d] transition-all">
                            Join AIPP
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-600 p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                <div className="px-4 pt-2 pb-6 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-4 text-sm font-bold text-slate-900 hover:text-[var(--primary)] transition-colors uppercase tracking-widest"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 px-3">
                        <Link
                            href="/join"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-center bg-[#1A5261] text-white py-4 text-[10px] uppercase tracking-widest font-bold rounded-sm"
                        >
                            Join AIPP
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
