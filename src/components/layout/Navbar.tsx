import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-black text-[var(--primary)] tracking-tighter">
                            AIPP
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-10 items-center">
                        <Link href="/framework" className="text-xs font-bold text-slate-900 hover:text-[var(--primary)] transition-colors uppercase tracking-widest">Research & Policy</Link>
                        <Link href="/framework" className="text-xs font-bold text-slate-900 hover:text-[var(--primary)] transition-colors uppercase tracking-widest">Labs & Strategic Learning</Link>
                        <Link href="/publications" className="text-xs font-bold text-slate-900 hover:text-[var(--primary)] transition-colors uppercase tracking-widest">Publications</Link>
                        <Link href="/about" className="text-xs font-bold text-slate-900 hover:text-[var(--primary)] transition-colors uppercase tracking-widest">About</Link>
                        <Link href="/contact" className="text-xs font-bold text-slate-900 hover:text-[var(--primary)] transition-colors uppercase tracking-widest">Contact</Link>

                        <Link href="/join" className="bg-[#1A5261] text-white py-2 px-6 text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-[#14414d] transition-all">
                            Join AIPP
                        </Link>
                    </div>

                    <div className="md:hidden">
                        {/* Mobile menu button would go here */}
                        <button className="text-slate-600">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
