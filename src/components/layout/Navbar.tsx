import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-black text-[var(--primary)] tracking-tighter">
                            AIPP
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/about" className="text-sm font-bold text-slate-700 hover:text-[var(--primary)] transition-colors">About</Link>
                        <Link href="/framework" className="text-sm font-bold text-slate-700 hover:text-[var(--primary)] transition-colors">Framework</Link>
                        <Link href="/publications" className="text-sm font-bold text-slate-700 hover:text-[var(--primary)] transition-colors">Publications</Link>
                        <Link href="/contact" className="text-sm font-bold text-slate-700 hover:text-[var(--primary)] transition-colors">Contact</Link>

                        <Link href="/join" className="btn-primary py-2 px-5 text-sm uppercase tracking-widest font-black">
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
