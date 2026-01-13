import React from 'react';

const ImpactStats = () => {
    const stats = [
        { label: 'Leaders Trained', value: '45k+', description: 'A generation of thinkers and leaders capable of transforming politics.' },
        { label: 'Policy Papers', value: '120+', description: 'Interdisciplinary research bridging the representation gap.' },
        { label: 'Strategic Labs', value: '03', description: 'RPI, SAS, and CPA programmatic streams driving action.' },
        { label: 'Institutional Partners', value: '500+', description: 'Collaborative networks connecting scholars and practitioners.' }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-white/20 to-[var(--primary)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Impact in Numbers</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        Repositioning women's wisdom and agency as central to democratic decision-making and institutional reform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-2 group">
                            <p className="text-5xl md:text-6xl font-black mb-4 text-[var(--primary)] group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                            <p className="text-xl font-bold mb-3 uppercase tracking-wide">{stat.label}</p>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Abstract background elements */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-white/5 rounded-full blur-[100px]" />
        </section>
    );
};

export default ImpactStats;
