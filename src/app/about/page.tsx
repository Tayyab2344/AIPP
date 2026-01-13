import { Target, Lightbulb, Zap, Users, Globe, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const AboutPage = () => {
    const principles = [
        { title: 'Intellectual Rigor', icon: <Lightbulb />, desc: 'Upholding analytical depth and evidence-based insight.' },
        { title: 'Leadership in Praxis', icon: <Zap />, desc: 'Translating ideas into transformative action.' },
        { title: 'Strategic Wisdom', icon: <Target />, desc: 'Guiding governance through reflection and foresight.' },
        { title: 'Collaborative Impact', icon: <Users />, desc: 'Bridging research, advocacy, and policy.' },
        { title: 'Equitable Representation', icon: <Globe />, desc: 'Advancing fairness in political participation.' },
        { title: 'Empowerment', icon: <BookOpen />, desc: 'Enabling women to lead with intellect, courage, and integrity.' }
    ];

    return (
        <article className="bg-white">
            {/* Page Header */}
            <section className="pt-24 pb-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--primary)]/5 skew-x-12 transform translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center space-x-2 text-[var(--primary)] font-black text-xs uppercase tracking-widest mb-6">
                            <span className="w-12 h-[2px] bg-[var(--primary)]" />
                            <span>Introduction</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">
                            Athena Institute for <br /> Political Praxis (AIPP)
                        </h1>
                        <p className="text-2xl text-slate-700 leading-tight font-medium mb-12 border-l-8 border-[var(--primary)] pl-8">
                            Centering Women's Strategic Intellect to Transform Politics
                        </p>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                            <p>
                                The Athena Institute for Political Praxis (AIPP) has been founded on the understanding that the future of politics depends on the intellect and leadership we cultivate today. For too long, governance has operated within frameworks that exclude women's strategic wisdom from shaping its principles, priorities, and possibilities.
                            </p>
                            <p>
                                AIPP exists to challenge and change that paradigm. It aims to function as a space for research, leadership development, and advocacy that reimagines politics as an inclusive and intellectually grounded pursuit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="p-12 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-[var(--primary)]/20">
                                <Target size={120} />
                            </div>
                            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Vision</h2>
                            <p className="text-xl text-slate-300 leading-relaxed font-medium">
                                To advance an inclusive and gender-responsive political order by generating knowledge, fostering leadership, and shaping discourse that recognizes women's strategic intellect and capacity for governance.
                            </p>
                        </div>
                        <div className="p-12 border-4 border-slate-900 rounded-[3rem] relative group">
                            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Mission</h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                AIPP is dedicated to bridging the representation gap in politics and governance by conducting interdisciplinary research, cultivating women's political leadership, and promoting evidence-based policy innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Belief */}
            <section className="py-24 bg-[var(--primary)] text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-xs font-black uppercase tracking-[0.3em] mb-8 block opacity-80">Our Core Belief</span>
                    <blockquote className="text-3xl md:text-5xl font-black leading-tight italic tracking-tight">
                        "No nation can rise to the heights of glory unless women stand side by side with men."
                    </blockquote>
                </div>
            </section>

            {/* Principles */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">Principles</h2>
                        <div className="w-24 h-1 bg-[var(--primary)] mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {principles.map((p, i) => (
                            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-slate-900 text-[var(--primary)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {p.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{p.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
};

export default AboutPage;
