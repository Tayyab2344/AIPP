import { Video, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const labs = [
    {
        title: 'Leadership in the Digital Age',
        type: 'Executive Series',
        date: 'Jan 25, 2026',
        time: '14:00 GMT',
        description: 'A 2-hour intensive session focused on managing remote teams and digital transformation.',
        status: 'open',
    },
    {
        title: 'Data Science for Social Good',
        type: 'Technical Workshop',
        date: 'Feb 02, 2026',
        time: '10:00 GMT',
        description: 'Learn how to use Python and public datasets to uncover gender inequality trends.',
        status: 'open',
    },
    {
        title: 'Policy Advocacy 101',
        type: 'Advocacy Training',
        date: 'Feb 15, 2026',
        time: '18:00 GMT',
        description: 'Strategic communication for influencing local and national policy decisions.',
        status: 'closed',
    },
];

const LabsPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center space-x-2 text-violet-600 font-bold text-sm uppercase mb-4">
                            <div className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                            <span>Live Zoom Labs</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Interactive Learning Environments
                        </h1>
                        <p className="text-lg text-slate-600">
                            Our labs are real-time, cohort-based sessions designed for deep engagement and practical skill acquisition.
                        </p>
                    </div>
                    <Button variant="outline">View Calendar</Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {labs.map((lab, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-violet-50 text-violet-600 rounded-2xl">
                                    <Video size={24} />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${lab.status === 'open' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    {lab.status}
                                </span>
                            </div>

                            <div className="text-xs font-bold text-violet-600 mb-2 uppercase tracking-wide">{lab.type}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-violet-600 transition-colors leading-tight">
                                {lab.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8 mb-auto">
                                {lab.description}
                            </p>

                            <div className="space-y-3 mb-8 pt-6 border-t border-slate-50">
                                <div className="flex items-center space-x-3 text-sm text-slate-600 font-medium">
                                    <Calendar size={16} className="text-slate-400" />
                                    <span>{lab.date}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-slate-600 font-medium">
                                    <Video size={16} className="text-slate-400" />
                                    <span>{lab.time}</span>
                                </div>
                            </div>

                            <Button disabled={lab.status === 'closed'} className="w-full justify-between group/btn">
                                <span>{lab.status === 'open' ? 'Register Now' : 'Recording Only'}</span>
                                <ArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-violet-600 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                    <div className="flex-1 z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Custom Institutional Labs</h2>
                        <p className="text-violet-100 text-lg mb-8 leading-relaxed">
                            We design specialized training environments for organizations, governments, and corporations looking to strengthen their gender equality frameworks.
                        </p>
                        <Button className="bg-white text-violet-600 hover:bg-violet-50">
                            Request a Quote
                        </Button>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center z-10">
                        <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
                            <ExternalLink size={64} className="text-white" />
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]" />
                </div>
            </section>
        </div>
    );
};

export default LabsPage;
