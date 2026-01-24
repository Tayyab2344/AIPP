import Link from 'next/link';
import { publicationService } from '@/lib/services/publicationService';
import { FileText, ArrowRight } from 'lucide-react';
import { Publication } from '@/types';

const PublicationsTeaser = async () => {
    let publications: Publication[] = [];
    try {
        const data = await publicationService.getPublished();
        // Take latest 3
        publications = data.slice(0, 3);
    } catch (error) {
        console.error("Error fetching recent publications on server:", error);
    }

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight leading-tight">
                            Knowledge & Publications
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                            Access our latest research papers, policy briefs, and strategic insights designed to inform and transform political discourse.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
                    {publications.length > 0 ? publications.map((item) => (
                        <div key={item.id} className="flex flex-col group">
                            <Link href="/publications" className="aspect-[3/4] bg-slate-200 mb-6 rounded-sm transition-transform group-hover:-translate-y-2 duration-300 shadow-sm flex items-center justify-center">
                                <FileText suppressHydrationWarning size={48} className="text-slate-400 opacity-20" />
                            </Link>
                            <div className="flex flex-col">
                                <p className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                                    {item.category} • {item.year}
                                </p>
                                <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-[var(--primary)] transition-colors leading-snug line-clamp-2 min-h-[3.5rem]">
                                    {item.title}
                                </h3>
                                <Link href="/publications" className="text-xs font-bold text-slate-900 hover:text-[var(--primary)] transition-colors inline-flex items-center gap-2 uppercase tracking-widest mt-auto">
                                    Read Now <ArrowRight suppressHydrationWarning size={14} className="text-[var(--primary)]" />
                                </Link>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full py-12 text-center text-slate-400 font-serif italic">
                            No recent publications registered.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PublicationsTeaser;
