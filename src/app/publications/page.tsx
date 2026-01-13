import { FileText, Download, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const publications = [
    {
        title: 'The State of Women in Global Tech Leadership',
        category: 'Report',
        year: 2024,
        summary: 'An in-depth analysis of representation and barriers across Fortune 500 technology firms.',
        size: '2.4 MB',
    },
    {
        title: 'Bridging the Gender Pay Gap in Emerging Markets',
        category: 'Research Paper',
        year: 2023,
        summary: 'Recommended policy frameworks for government agencies in Southeast Asia and Latin America.',
        size: '1.8 MB',
    },
    {
        title: 'Impact of Collaborative Digital Hubs on Rural Entrepreneurship',
        category: 'Case Study',
        year: 2023,
        summary: 'Exploring how hybrid access models transform small businesses owned by women.',
        size: '3.1 MB',
    },
    {
        title: 'Education Policy & Female Literacy: A Global Review',
        category: 'Policy Brief',
        year: 2022,
        summary: 'Synthesizing 10 years of longitudinal data to identify successful intervention strategies.',
        size: '1.2 MB',
    },
];

const PublicationsPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Research & Insights
                        </h1>
                        <p className="text-lg text-slate-600">
                            Our repository of academic research, annual reports, and policy recommendations designed to inform and inspire action.
                        </p>
                    </div>

                    <div className="flex w-full md:w-auto gap-3">
                        <div className="relative flex-grow md:w-64">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search publications..."
                                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-sm"
                            />
                        </div>
                        <Button variant="outline" className="px-4">
                            <Filter size={18} />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {publications.map((item, i) => (
                        <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-violet-100 hover:shadow-2xl hover:shadow-slate-200 transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white text-violet-600 rounded-2xl shadow-sm group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                    <FileText size={24} />
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.category}</span>
                                    <p className="text-xs font-medium text-slate-500">{item.year}</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-violet-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                {item.summary}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-200/60">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-tighter">PDF — {item.size}</span>
                                <button className="flex items-center space-x-2 text-violet-600 font-bold text-sm tracking-tight hover:text-violet-700 transition-colors">
                                    <span>Download Now</span>
                                    <Download size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Institutional Support */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Partner With Our Research Team</h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
                        Are you a researcher or institution interested in collaborating on new data-driven initiatives for women empowerment?
                    </p>
                    <Button size="lg">Contact Research Department</Button>
                </div>
            </section>
        </div>
    );
};

export default PublicationsPage;
