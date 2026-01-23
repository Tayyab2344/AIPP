"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_LINKS, BRAND_COLORS } from '@/lib/constants';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
        setActiveSubDropdown(null);
    };

    const toggleSubDropdown = (e: React.MouseEvent, label: string) => {
        e.stopPropagation();
        setActiveSubDropdown(activeSubDropdown === label ? null : label);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm" ref={dropdownRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/aipp-logo.png"
                                alt="AIPP Logo"
                                suppressHydrationWarning
                                className="h-14 w-auto object-contain"
                            />
                            <span className="text-xl font-bold text-slate-900 tracking-wide">AIPP</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1 lg:space-x-4 flex-grow justify-center px-4">
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.label}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                                onMouseLeave={() => {
                                    setActiveDropdown(null);
                                    setActiveSubDropdown(null);
                                }}
                            >
                                {link.dropdown ? (
                                    <>
                                        <button
                                            type="button"
                                            suppressHydrationWarning
                                            className={`flex items-center space-x-1 text-xs font-bold uppercase tracking-widest px-3 py-2 transition-colors ${activeDropdown === link.label ? 'text-[var(--primary)]' : 'text-slate-900 hover:text-[var(--primary)]'
                                                }`}
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown suppressHydrationWarning size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Main Dropdown */}
                                        {activeDropdown === link.label && (
                                            <div className="absolute top-full left-0 w-72 bg-white border border-slate-100 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        className="block px-6 py-3 text-[11px] font-bold text-slate-900 uppercase tracking-wider hover:bg-slate-50"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-xs font-bold text-slate-900 hover:text-[var(--primary)] transition-colors uppercase tracking-widest px-3 py-2 whitespace-nowrap"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Join Button */}
                    <div className="hidden lg:flex flex-shrink-0">
                        <Link href="/collaborate" className="bg-[#1A5261] text-white py-2.5 px-8 text-[11px] uppercase tracking-widest font-bold rounded-sm hover:bg-[#14414d] transition-all shadow-md">
                            Join AIPP
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            type="button"
                            suppressHydrationWarning
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-900 p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X suppressHydrationWarning size={28} /> : <Menu suppressHydrationWarning size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu - Sidebar Reveal */}
            <div className={`lg:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />

            <div className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transition-transform duration-300 ease-in-out transform shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full bg-slate-50">
                    <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100 bg-white">
                        <span className="text-lg font-bold text-slate-900 tracking-tight uppercase">Index</span>
                        <button type="button" onClick={() => setIsMenuOpen(false)} className="text-slate-900 p-2">
                            <X size={28} />
                        </button>
                    </div>

                    <div className="flex-grow px-6 py-10 space-y-2 overflow-y-auto">
                        {NAV_LINKS.map((link) => (
                            <div key={link.label} className="border-b border-slate-50 pb-2">
                                {link.dropdown ? (
                                    <div>
                                        <button
                                            type="button"
                                            suppressHydrationWarning
                                            onClick={() => toggleDropdown(link.label)}
                                            className="flex items-center justify-between w-full py-3 text-sm font-bold text-slate-900 uppercase tracking-widest"
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown suppressHydrationWarning size={18} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                                        </button>

                                        {activeDropdown === link.label && (
                                            <div className="pl-4 py-2 space-y-4 animate-in slide-in-from-top-2 duration-200">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="block text-[12px] font-bold text-slate-700 uppercase tracking-wider py-2"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block py-3 text-sm font-bold text-slate-900 uppercase tracking-widest"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-8 mt-4 border-t border-slate-100">
                            <Link
                                href="/collaborate"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-center bg-[#1A5261] text-white py-4 text-[12px] uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl hover:bg-[#14414d] transition-all"
                            >
                                Join AIPP
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
