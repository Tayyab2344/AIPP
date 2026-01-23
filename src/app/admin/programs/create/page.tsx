'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { programService } from '@/lib/services/programService';
import { storageService } from '@/lib/services/storageService';
import { Program } from '@/types';
import {
    ArrowLeft,
    Save,
    LayoutGrid,
    Type,
    FileText,
    List,
    Link as LinkIcon,
    FlaskConical,
    X,
    Loader2,
    Bold,
    Italic,
    Image as ImageIcon,
    Upload
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import RichTextEditor from '@/components/admin/RichTextEditor';


export default function CreateProgramPage() {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [formData, setFormData] = useState<Partial<Program>>({
        title: '',
        coreOffering: 'RPI',
        status: 'DRAFT',
        shortDescription: '',
        description: '',
        detailedDescription: '',
        modules: [],
        connectedEntities: [],
        imageUrl: '',
        logoUrl: '',
        createdDate: new Date(),
    });

    const handleSave = async () => {
        if (!formData.title) {
            alert("Program title is required.");
            return;
        }

        setIsSaving(true);
        try {
            await programService.create(formData as Omit<Program, 'id'>);
            router.push('/admin/programs');
        } catch (error) {
            console.error("Error creating program:", error);
            alert("Failed to create program.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'imageUrl' | 'logoUrl') => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        setIsUploading(true);
        try {
            const url = await storageService.uploadImage(file, 'programs');
            setFormData(prev => ({ ...prev, [field]: url }));
        } catch (error) {
            console.error("Upload failed", error);
            alert("Failed to upload image.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto pb-20">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin/programs"
                    className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-serif font-bold text-slate-900">Create New Program</h1>
                    <p className="text-sm text-slate-500">Define a new programmatic offering for the institute.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Form */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Basic Info Card */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <LayoutGrid size={14} /> Core Information
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Program Title <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:outline-none focus:border-[#2F4F4F] focus:bg-white transition-all placeholder:font-normal"
                                    placeholder="e.g. Strategic Governance Initiative"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Core Offering
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {['RPI', 'SAS', 'CPA'].map((offering) => (
                                        <button
                                            key={offering}
                                            onClick={() => setFormData({ ...formData, coreOffering: offering as any })}
                                            className={`py-3 rounded-lg border text-sm font-bold transition-all ${formData.coreOffering === offering
                                                ? 'bg-[#2F4F4F] border-[#2F4F4F] text-white'
                                                : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                                                }`}
                                        >
                                            {offering}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Assets Card */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <ImageIcon size={14} /> Visual Assets
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Cover Image */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Cover Image
                                </label>
                                <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center hover:bg-slate-50 transition-colors relative">
                                    {formData.imageUrl ? (
                                        <div className="relative aspect-video w-full rounded-md overflow-hidden mb-2">
                                            <Image
                                                src={formData.imageUrl}
                                                alt="Cover"
                                                fill
                                                className="object-cover"
                                            />
                                            <button
                                                onClick={() => setFormData({ ...formData, imageUrl: '' })}
                                                className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-rose-500 transition-colors"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="py-8">
                                            <Upload className="mx-auto text-slate-300 mb-2" size={24} />
                                            <span className="text-xs text-slate-400">Click to upload cover</span>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, 'imageUrl')}
                                        disabled={isUploading}
                                        className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer ${isUploading ? 'cursor-wait' : ''}`}
                                    />
                                </div>
                            </div>

                            {/* Logo/Icon */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Icon / Logo
                                </label>
                                <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center hover:bg-slate-50 transition-colors relative">
                                    {formData.logoUrl ? (
                                        <div className="relative w-24 h-24 mx-auto rounded-md overflow-hidden mb-2 bg-slate-100 flex items-center justify-center">
                                            <Image
                                                src={formData.logoUrl}
                                                alt="Logo"
                                                width={64}
                                                height={64}
                                                className="object-contain"
                                            />
                                            <button
                                                onClick={() => setFormData({ ...formData, logoUrl: '' })}
                                                className="absolute top-1 right-1 p-1 bg-black/50 text-white rounded-full hover:bg-rose-500 transition-colors"
                                            >
                                                <X size={10} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="py-8">
                                            <Upload className="mx-auto text-slate-300 mb-2" size={24} />
                                            <span className="text-xs text-slate-400">Upload Icon</span>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, 'logoUrl')}
                                        disabled={isUploading}
                                        className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer ${isUploading ? 'cursor-wait' : ''}`}
                                    />
                                </div>
                            </div>
                        </div>
                        {isUploading && (
                            <div className="mt-2 text-xs text-[#2F4F4F] flex items-center gap-2">
                                <Loader2 size={12} className="animate-spin" /> Uploading assets...
                            </div>
                        )}
                    </div>

                    {/* Descriptions Card */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Type size={14} /> Content & Context
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Institutional Summary (Internal)
                                </label>
                                <textarea
                                    value={formData.shortDescription}
                                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F] resize-none"
                                    placeholder="Brief summary for internal reference..."
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Public Description
                                </label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F] resize-none"
                                    placeholder="what will be displayed to the public..."
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Detailed Framework
                                </label>
                                <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                                    <RichTextEditor
                                        value={formData.detailedDescription || ''}
                                        onChange={(content) => setFormData({ ...formData, detailedDescription: content })}
                                        placeholder="Full detailed analysis and framework..."
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-8">
                    {/* Status Card */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                            Publication Status
                        </h2>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <span className={`text-xs font-bold uppercase tracking-wider ${formData.status === 'PUBLISHED' ? 'text-[#2F4F4F]' : 'text-slate-500'}`}>
                                {formData.status}
                            </span>
                            <button
                                onClick={() => setFormData({
                                    ...formData,
                                    status: formData.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED'
                                })}
                                className={`relative w-12 h-6 rounded-full transition-colors ${formData.status === 'PUBLISHED' ? 'bg-[#2F4F4F]' : 'bg-slate-300'}`}
                            >
                                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${formData.status === 'PUBLISHED' ? 'left-7' : 'left-1'}`} />
                            </button>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-3 leading-relaxed">
                            Draft items are only visible to administrators. Published items appear on the public site immediately.
                        </p>
                    </div>

                    {/* Modules Card */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <List size={14} /> Modules
                        </h2>
                        <textarea
                            value={formData.modules?.join('\n') || ''}
                            onChange={(e) => setFormData({ ...formData, modules: e.target.value.split('\n').filter(m => m.trim() !== '') })}
                            rows={6}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F] resize-none"
                            placeholder="Enter modules (one per line)..."
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleSave}
                            disabled={isSaving || isUploading}
                            className="w-full bg-[#2F4F4F] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#1F3F3F] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isSaving && <Loader2 size={16} className="animate-spin" />}
                            Create Program
                        </button>
                        <Link
                            href="/admin/programs"
                            className="w-full bg-white border border-slate-200 text-slate-500 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all text-center"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
