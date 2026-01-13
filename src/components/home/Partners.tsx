import React from 'react';

const Partners = () => {
    const partners = [
        { name: 'Policy Reform Institute', logo: 'PRI' },
        { name: 'Strategic Leadership Council', logo: 'SLC' },
        { name: 'Global Governance Forum', logo: 'GGF' },
        { name: 'Research for Development', logo: 'RED' },
        { name: 'Inclusive Politics Group', logo: 'IPG' },
        { name: 'Institutional Reform Lab', logo: 'IRL' }
    ];

    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-[0.3em] mb-12">
                    Our Global Partnerships & Affiliates
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center space-x-3 group cursor-default">
                            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center font-black text-[var(--primary)] text-xs group-hover:bg-[var(--primary)] group-hover:text-white transition-colors shadow-lg">
                                {partner.logo}
                            </div>
                            <span className="text-slate-900 font-black tracking-tighter uppercase text-sm">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
