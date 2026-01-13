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
            <section className="pt-32 pb-24 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-10 tracking-tight leading-tight">
                            Athena Institute for <br /> Political Praxis (AIPP)
                        </h1>
                        <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
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
                        <div className="p-12 md:p-16 bg-[#2D241E] text-white rounded-sm shadow-2xl relative overflow-hidden group">
                            <h2 className="text-4xl font-serif mb-8 tracking-tight">Vision</h2>
                            <p className="text-xl text-stone-300 leading-relaxed font-medium">
                                To advance an inclusive and gender-responsive political order by generating knowledge, fostering leadership, and shaping discourse that recognizes women's strategic intellect and capacity for governance.
                            </p>
                        </div>
                        <div className="p-12 md:p-16 border-l-4 border-[#1A5261] bg-slate-50 rounded-sm relative group">
                            <h2 className="text-4xl font-serif text-slate-900 mb-8 tracking-tight">Mission</h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Championing interdisciplinary research, cultivating women's political leadership, driving evidence-based policy innovation, shaping public discourse, and advocating for institutional reform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Belief */}
            <section className="py-32 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="/images/hero_pakistan.png" alt="Overlay" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] mb-12 block text-[var(--primary)]">Our Core Belief</span>
                    <blockquote className="text-3xl md:text-5xl font-serif leading-tight italic tracking-tight mb-8">
                        "No nation can rise to the heights of glory unless women stand side by side with men."
                    </blockquote>
                    <p className="text-sm font-bold uppercase tracking-widest text-stone-500">— Quaid-e-Azam Muhammad Ali Jinnah</p>
                </div>
            </section>

            {/* Principles */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight">Our Principles</h2>
                        <div className="w-20 h-1 bg-[var(--primary)]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {principles.map((p, i) => (
                            <div key={i} className="group">
                                <div className="text-[var(--primary)] mb-6 transform group-hover:scale-110 transition-transform inline-block">
                                    {React.cloneElement(p.icon as React.ReactElement, { size: 40, strokeWidth: 1.5 })}
                                </div>
                                <h3 className="text-2xl font-serif text-slate-900 mb-4 tracking-tight leading-tight">{p.title}</h3>
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
