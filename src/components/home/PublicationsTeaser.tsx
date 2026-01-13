import Link from 'next/link';

const publications = [
    {
        type: 'Policy Brief',
        date: 'May 2024',
        title: 'Strategic Horizons: Foresight in Feminist Policy',
    },
    {
        type: 'Research Paper',
        date: 'April 2024',
        title: 'The Praxis Gap: A New Framework for Political Action',
    },
    {
        type: 'Article',
        date: 'March 2024',
        title: 'Rethinking Governance: Gendered Intellect in Institutions',
    },
];

const PublicationsTeaser = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Knowledge & Publications</h2>
                    <p className="text-slate-600 text-lg font-medium">
                        Explore our latest research, policy insights, and thought leadership designed to advance political discourse and practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {publications.map((item, index) => (
                        <div key={index} className="flex flex-col group">
                            <div className="aspect-[3/4] bg-slate-200 mb-6 rounded-sm transition-transform group-hover:-translate-y-2 duration-300 shadow-sm" />
                            <div className="flex flex-col">
                                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">
                                    {item.type} • {item.date}
                                </p>
                                <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-[var(--primary)] transition-colors leading-snug">
                                    {item.title}
                                </h3>
                                <Link href="/framework" className="text-sm font-bold text-slate-900 hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1">
                                    Read Now <span className="text-lg">›</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PublicationsTeaser;
