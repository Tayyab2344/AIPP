'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Eye,
    ChevronDown,
    Loader2,
    Save,
    Globe,
    FileText,
    Upload,
    X,
    Plus,
    Check,
    Type,
    Sparkles
} from 'lucide-react';
import { blogService } from '@/lib/services/blogService';
import { storageService } from '@/lib/services/storageService';
import { BlogPost } from '@/types';
import RichTextEditor from './RichTextEditor';

interface InsightEditorProps {
    initialData?: BlogPost;
    isNew?: boolean;
}

const DEFAULT_CATEGORIES = ['Political Thought', 'Governance', 'Women & Leadership', 'Praxis & Strategy'];

export default function InsightEditor({ initialData, isNew = false }: InsightEditorProps) {
    const router = useRouter();
    const [blog, setBlog] = useState<Partial<BlogPost>>(initialData || {
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: 'Political Thought',
        status: 'draft',
        author: 'Dr. Alistair Vance',
    });

    const [isSaving, setIsSaving] = useState(false);
    const [isPreview, setIsPreview] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES);
    const [showNewCatInput, setShowNewCatInput] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Dynamic Category Initialization
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const blogs = await blogService.getAll();
                const uniqueCats = Array.from(new Set([...DEFAULT_CATEGORIES, ...blogs.map(b => b.category)]));
                setCategories(uniqueCats);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleSave = async () => {
        if (!blog.title || !blog.content) {
            alert("Title and Content are required.");
            return;
        }

        setIsSaving(true);
        try {
            // Auto-generate slug from title
            const generatedSlug = blog.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');

            const blogData = { ...blog, slug: generatedSlug };

            if (blog.id) {
                await blogService.update(blog.id, blogData as BlogPost);
            } else {
                await blogService.create(blogData as Omit<BlogPost, 'id'>);
            }
            router.push('/admin/insights');
            router.refresh();
        } catch (error) {
            console.error("Error saving blog:", error);
            alert("Failed to save article.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Basic size check (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert("File too large. Institutional visual threshold is 5MB.");
            return;
        }

        setIsUploading(true);
        console.log("Upload initiated in component...");
        try {
            const url = await storageService.uploadImage(file);
            setBlog({ ...blog, featuredImage: url });
        } catch (error: any) {
            console.error("Error uploading image in component:", error);
            alert(`Upload Failed: ${error.message || "Unknown error"}. Ensure Firebase Storage is enabled in your console.`);
        } finally {
            setIsUploading(false);
        }
    };

    const handleAddCategory = () => {
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setBlog({ ...blog, category: newCategory });
            setNewCategory('');
            setShowNewCatInput(false);
        }
    };

    if (isPreview) {
        return (
            <div className="min-h-screen bg-[#FBFBFA] pb-24 relative">
                {/* Preview Header */}
                <div className="fixed top-0 inset-x-0 h-16 bg-[#2F4F4F] text-white flex items-center justify-between px-8 z-50">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#B19B4C] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">Preview Mode</div>
                        <span className="text-sm font-serif italic text-slate-300">"Seeing the world through the institutional lens..."</span>
                    </div>
                    <button
                        onClick={() => setIsPreview(false)}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded font-bold text-xs uppercase tracking-widest transition-all"
                    >
                        <X suppressHydrationWarning size={14} /> Close Preview
                    </button>
                </div>

                {/* Simulated Public View */}
                <article className="pt-32">
                    <div className="max-w-4xl mx-auto px-4 pb-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-[10px] font-bold text-[#B19B4C] uppercase tracking-[0.2em]">
                                <span>{blog.category}</span>
                                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                <span>Insight</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 leading-tight">
                                {blog.title || 'Untitled Article'}
                            </h1>
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-slate-100 mt-8 text-slate-500 text-xs">
                                <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                <span>By {blog.author}</span>
                            </div>
                        </div>
                    </div>

                    {blog.featuredImage && (
                        <div className="max-w-7xl mx-auto px-4 mb-20">
                            <div className="aspect-[21/9] bg-slate-100 rounded-sm overflow-hidden border border-slate-100">
                                <img src={blog.featuredImage} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    )}

                    <div className="max-w-3xl mx-auto px-4">
                        <p className="text-xl sm:text-2xl font-serif text-slate-700 italic border-l-4 border-[#B19B4C] pl-8 py-2 mb-16 leading-relaxed">
                            {blog.excerpt || 'Article summary will appear here...'}
                        </p>
                        <div
                            className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-900"
                            dangerouslySetInnerHTML={{ __html: blog.content || '' }}
                        />
                    </div>
                </article>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto pb-24 px-4">
            {/* Top Navigation */}
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#F8F9FA]/80 backdrop-blur-md py-4 z-30">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                    >
                        <ArrowLeft suppressHydrationWarning size={20} />
                    </button>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {isNew ? 'New Publication' : 'Manuscript Edit'}
                        </div>
                        <h1 className="text-xl font-bold text-slate-900 font-serif">
                            {blog.title || 'Untitled Insight'}
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsPreview(true)}
                        className="flex items-center gap-2 px-4 py-2 text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-slate-700 hover:bg-white rounded transition-all"
                    >
                        <Eye suppressHydrationWarning size={16} />
                        Preview
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isSaving || isUploading}
                        className="bg-[#2F4F4F] text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#1F3F3F] transition-all flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-[#2F4F4F]/20"
                    >
                        {isSaving ? <Loader2 suppressHydrationWarning size={14} className="animate-spin" /> : <Save suppressHydrationWarning size={14} />}
                        <span>{blog.status === 'published' ? 'Push to Domain' : 'Save Manuscript'}</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10">
                {/* Left Column: Content */}
                <div className="col-span-2 space-y-8">
                    {/* Featured Image Upload */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Featured Visual</label>
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className={`relative aspect-[21/9] rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden
                                ${blog.featuredImage ? 'border-transparent' : 'border-slate-200 hover:border-[#B19B4C] hover:bg-white'}`}
                        >
                            {blog.featuredImage ? (
                                <>
                                    <img src={blog.featuredImage} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white/90 p-3 rounded-full text-[#2F4F4F]">
                                            <Upload size={20} />
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setBlog({ ...blog, featuredImage: '' }); }}
                                        className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-rose-500 hover:bg-white transition-colors"
                                    >
                                        <X suppressHydrationWarning size={16} />
                                    </button>
                                </>
                            ) : (
                                <div className="flex flex-col items-center gap-3 text-slate-400">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                        {isUploading ? <Loader2 suppressHydrationWarning size={24} className="animate-spin text-[#B19B4C]" /> : <Upload suppressHydrationWarning size={24} />}
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-widest">Click to upload lead visual</p>
                                        <p className="text-[10px] mt-1 italic">Institutional standard 21:9 recommended</p>
                                    </div>
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                className="hidden"
                                accept="image/*"
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Article Title</label>
                        <textarea
                            value={blog.title}
                            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                            rows={2}
                            placeholder="Enter the institutional thesis title..."
                            className="w-full text-4xl font-serif font-bold text-slate-900 border-none bg-transparent focus:ring-0 placeholder:text-slate-200 resize-none p-0 leading-tight"
                        />
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Executive Summary (Excerpt)</label>
                        <textarea
                            value={blog.excerpt}
                            onChange={(e) => setBlog({ ...blog, excerpt: e.target.value })}
                            rows={3}
                            placeholder="A concise overview of the analytical pivot..."
                            className="w-full text-xl font-serif italic text-slate-600 border-none bg-transparent focus:ring-0 placeholder:text-slate-200 resize-none p-0 leading-relaxed"
                        />
                    </div>

                    {/* Editor */}
                    <div className="space-y-3 h-[600px] flex flex-col">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Manuscript Discourse</label>
                        <RichTextEditor
                            value={blog.content || ''}
                            onChange={(content) => setBlog({ ...blog, content })}
                            placeholder="Begin the intellectual discourse..."
                        />
                    </div>
                </div>

                {/* Right Column: Meta */}
                <div className="space-y-6 lg:sticky lg:top-28">
                    {/* Publishing Settings */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-[#B19B4C]">
                            <CustomSparkles suppressHydrationWarning size={16} />
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">Publication Scope</h3>
                        </div>

                        <div className="space-y-5 pt-4 border-t border-slate-50">
                            {/* Categories */}
                            <div>
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Academic Category</label>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <select
                                            value={blog.category}
                                            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
                                            className="w-full appearance-none bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#2F4F4F]"
                                        >
                                            {categories.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                        <ChevronDown suppressHydrationWarning size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>

                                    {!showNewCatInput ? (
                                        <button
                                            onClick={() => setShowNewCatInput(true)}
                                            className="text-[10px] font-bold text-[#B19B4C] hover:text-[#2F4F4F] transition-colors flex items-center gap-1 uppercase tracking-widest"
                                        >
                                            <Plus suppressHydrationWarning size={12} /> New Sphere of Inquiry
                                        </button>
                                    ) : (
                                        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
                                            <input
                                                type="text"
                                                value={newCategory}
                                                onChange={(e) => setNewCategory(e.target.value)}
                                                placeholder="Enter new category..."
                                                className="flex-grow bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none"
                                            />
                                            <button
                                                onClick={handleAddCategory}
                                                className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                                            >
                                                <Check suppressHydrationWarning size={14} />
                                            </button>
                                            <button
                                                onClick={() => { setShowNewCatInput(false); setNewCategory(''); }}
                                                className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 transition-colors"
                                            >
                                                <X suppressHydrationWarning size={14} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Author */}
                            <div>
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Principal Author</label>
                                <input
                                    type="text"
                                    value={blog.author}
                                    onChange={(e) => setBlog({ ...blog, author: e.target.value })}
                                    placeholder="e.g. Athena Institute"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#2F4F4F]"
                                />
                            </div>

                            {/* Status */}
                            <div>
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Release Protocol</label>
                                <div className="relative">
                                    <select
                                        value={blog.status}
                                        onChange={(e) => setBlog({ ...blog, status: e.target.value as any })}
                                        className="w-full appearance-none bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#2F4F4F]"
                                    >
                                        <option value="draft">Manuscript (Draft)</option>
                                        <option value="published">Domain Reveal (Publish)</option>
                                        <option value="archived">Stored Archive (Archive)</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Metadata Card */}
                    <div className="bg-[#2F4F4F] p-6 rounded-2xl text-white shadow-xl shadow-[#2F4F4F]/20">
                        <div className="flex items-center gap-2 text-[#7FB3B3] mb-6 border-b border-white/10 pb-4">
                            <Type suppressHydrationWarning size={16} />
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em]">Provenance</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-[#A8C5C5]">Platform</span>
                                <span className="font-serif italic">AIPP</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-[#A8C5C5]">Author</span>
                                <span className="font-serif italic truncate max-w-[150px]">{blog.author}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-[#A8C5C5]">Lexicon Depth</span>
                                <span className="font-mono text-[10px]">{blog.content?.split(/\s+/).filter(w => w.length > 0).length || 0} words</span>
                            </div>
                            {blog.publishDate && (
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-[#A8C5C5]">Logged Date</span>
                                    <span className="font-mono text-[10px] italic">
                                        {new Date(blog.publishDate).toLocaleDateString()}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Custom Sparkles icon added for aesthetic
function CustomSparkles({ size, className, suppressHydrationWarning }: { size: number, className?: string, suppressHydrationWarning?: boolean }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
        </svg>
    );
}
