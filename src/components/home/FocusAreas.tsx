import Image from 'next/image';

const focusAreas = [
    {
        title: 'Research & Policy Innovation',
        subtitle: 'RPI',
        description: 'Engaging in serious intellectual inquiry to produce actionable policy insights.',
        image: '/images/pillar_rpi_hijab.png',
    },
    {
        title: 'Strategic Action & Simulation',
        subtitle: 'SAS',
        description: 'Utilizing praxis, simulations, and foresight training to develop leadership.',
        image: '/images/pillar_sas_niqab.png',
    },
    {
        title: 'Communications & Public Advocacy',
        subtitle: 'CPA',
        description: 'Shaping public discourse through rigorous analysis and thought leadership.',
        image: '/images/pillar_cpa_niqab.png',
    },
];

const FocusAreas = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Core Pillars of Work</h2>
                    <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                        Our work is structured around three core pillars, each designed to advance our mission through distinct yet interconnected streams of activity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {focusAreas.map((area, index) => (
                        <div key={index} className="bg-white rounded-sm overflow-hidden border border-slate-200 hover:shadow-xl transition-all group h-full flex flex-col">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <Image
                                    src={area.image}
                                    alt={area.title}
                                    fill
                                    suppressHydrationWarning
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-serif text-slate-900 mb-4 leading-tight group-hover:text-[var(--primary)] transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    {area.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FocusAreas;
