import { Search, Activity, Share2 } from 'lucide-react';

const FrameworkPage = () => {
    const streams = [
        {
            id: '01',
            title: 'Research & Policy Innovation (RPI)',
            icon: <Search className="w-8 h-8" />,
            desc: 'Dedicated to cultivating emerging voices in politics and governance, this stream focuses on building strategic intellect, ethical leadership, and policy literacy among women positioned to shape the future of public decision-making.'
        },
        {
            id: '02',
            title: 'Strategic Action & Simulation (SAS)',
            icon: <Activity className="w-8 h-8" />,
            desc: 'This stream operationalizes the philosophy of praxis—transforming abstract ideas into strategic engagement and applied learning. It develops the capacity for systems thinking, negotiation, and decision foresight within political contexts.'
        },
        {
            id: '03',
            title: 'Communications & Public Advocacy (CPA)',
            icon: <Share2 className="w-8 h-8" />,
            desc: 'Through this stream, AIPP amplifies knowledge and narrative influence. It advances public discourse that values women\'s intellect and agency as central to the evolution of political thought and institutional reform.'
        }
    ];

    return (
        <article className="bg-white">
            <section className="pt-24 pb-20 bg-slate-900 text-white border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 text-[var(--primary)] font-black text-xs uppercase tracking-[0.3em] mb-6">
                            <span className="w-12 h-[2px] bg-[var(--primary)]" />
                            <span>Programmatic Framework</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
                            Our Framework <br /> for Change
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium">
                            AIPP seeks to establish itself as a center of thought and action advancing women's leadership and intellect in political transformation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {streams.map((stream) => (
                            <div key={stream.id} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-12 rounded-[3rem] border-2 border-slate-100 hover:border-[var(--primary)] transition-all bg-slate-50/50">
                                <div className="lg:col-span-1">
                                    <span className="text-6xl font-black text-slate-200 group-hover:text-[var(--primary)]/20 transition-colors uppercase">
                                        {stream.id}
                                    </span>
                                </div>
                                <div className="lg:col-span-3 flex justify-center lg:justify-start">
                                    <div className="w-24 h-24 bg-slate-900 text-[var(--primary)] rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform">
                                        {stream.icon}
                                    </div>
                                </div>
                                <div className="lg:col-span-8">
                                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                        {stream.title}
                                    </h2>
                                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                        {stream.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Partnerships & Engagement</h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                        AIPP welcomes collaboration with institutions and associations that share its commitment to rethinking politics through inclusivity and gendered insight. The Institute views partnerships as spaces for shared learning, co-created research, and collective innovation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {[
                            'Joint research & knowledge exchange',
                            'Leadership development initiatives',
                            'Public engagement & advocacy',
                            'Institutional & policy reform'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-4 p-6 bg-white rounded-2xl border border-slate-200">
                                <div className="w-3 h-3 bg-[var(--primary)] rounded-full" />
                                <span className="font-bold text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
};

export default FrameworkPage;
