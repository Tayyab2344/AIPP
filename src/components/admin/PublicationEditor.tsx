'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Save,
    Loader2,
    FileText,
    Link as LinkIcon,
    ChevronDown,
    Calendar,
    Type,
    FileDown
} from 'lucide-react';
import { publicationService } from '@/lib/services/publicationService';
import { Publication } from '@/types';

interface PublicationEditorProps {
    initialData?: Publication;
    isNew?: boolean;
}

export default function PublicationEditor({ initialData, isNew = false }: PublicationEditorProps) {
    const router = useRouter();
    const [pub, setPub] = useState<Partial<Publication>>(initialData || {
        title: '',
        category: 'Research Paper',
        year: new Date().getFullYear(),
        summary: '',
        pdfUrl: '',
        publishStatus: 'draft'
    });
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        if (!pub.title || !pub.summary) {
            alert("Title and Summary are required.");
            return;
        }

        setIsSaving(true);
        try {
            if (pub.id) {
                await publicationService.update(pub.id, pub as Publication);
            } else {
                await publicationService.create(pub as Omit<Publication, 'id'>);
            }
            router.push('/admin/publications');
            router.refresh();
        } catch (error) {
            console.error("Error saving publication:", error);
            alert("Failed to save record.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#F8F9FA]/80 backdrop-blur-md py-4 z-30">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-full transition-all"
                    >
                        <ArrowLeft suppressHydrationWarning size={20} />
                    </button>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {isNew ? 'New Entry' : 'Archive Revision'}
                        </div>
                        <h1 className="text-xl font-bold text-slate-900 font-serif">
                            {pub.title || 'Untitled Publication'}
                        </h1>
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-[#2F4F4F] text-white px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-[#1F3F3F] transition-all flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-[#2F4F4F]/20"
                >
                    {isSaving ? <Loader2 suppressHydrationWarning size={14} className="animate-spin" /> : <Save suppressHydrationWarning size={14} />}
                    <span>{pub.publishStatus === 'published' ? 'Update Repository' : 'File Record'}</span>
                </button>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {/* Main Content */}
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8">
                    {/* Title */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <Type suppressHydrationWarning size={12} /> Publication Title
                        </label>
                        <textarea
                            value={pub.title}
                            onChange={(e) => setPub({ ...pub, title: e.target.value })}
                            rows={2}
                            placeholder="Enter the formal title of the research or policy brief..."
                            className="w-full text-2xl font-serif font-bold text-slate-900 border-none bg-slate-50 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-[#B19B4C] placeholder:text-slate-200 resize-none leading-tight"
                        />
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Category */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <FileText suppressHydrationWarning size={12} /> Institutional category
                            </label>
                            <div className="relative">
                                <select
                                    value={pub.category}
                                    onChange={(e) => setPub({ ...pub, category: e.target.value as any })}
                                    className="w-full appearance-none bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#B19B4C]"
                                >
                                    <option value="Research Paper">Research Paper</option>
                                    <option value="Policy Brief">Policy Brief</option>
                                    <option value="Report">Analytical Report</option>
                                </select>
                                <ChevronDown suppressHydrationWarning size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Year */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Calendar suppressHydrationWarning size={12} /> Repository Year
                            </label>
                            <input
                                type="number"
                                value={pub.year}
                                onChange={(e) => setPub({ ...pub, year: parseInt(e.target.value) })}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#B19B4C]"
                            />
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Formal Abstract / Summary</label>
                        <textarea
                            value={pub.summary}
                            onChange={(e) => setPub({ ...pub, summary: e.target.value })}
                            rows={6}
                            placeholder="Provide a concise summary of the analytical findings..."
                            className="w-full text-sm leading-relaxed text-slate-600 border-none bg-slate-50 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-[#B19B4C] placeholder:text-slate-200 resize-none"
                        />
                    </div>

                    {/* PDF URL */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <LinkIcon suppressHydrationWarning size={12} /> Digital Asset Link (PDF URL)
                        </label>
                        <input
                            type="text"
                            value={pub.pdfUrl}
                            onChange={(e) => setPub({ ...pub, pdfUrl: e.target.value })}
                            placeholder="https://storage.googleapis.com/..."
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#B19B4C]"
                        />
                    </div>

                    {/* Status */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inclusion Protocol</label>
                        <div className="flex gap-4">
                            {['draft', 'published'].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setPub({ ...pub, publishStatus: status as any })}
                                    className={`flex-1 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest border transition-all
                                        ${pub.publishStatus === status
                                            ? 'bg-[#2F4F4F] text-white border-[#2F4F4F] shadow-lg shadow-[#2F4F4F]/20'
                                            : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200'}`}
                                >
                                    {status === 'published' ? 'Public Repository' : 'Internal Archive'}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
