'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import InsightEditor from '@/components/admin/InsightEditor';
import { blogService } from '@/lib/services/blogService';
import { BlogPost } from '@/types';
import { Loader2 } from 'lucide-react';

export default function EditInsightPage() {
    const { id } = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            if (!id) return;
            try {
                const data = await blogService.getById(id as string);
                if (data) {
                    setBlog(data);
                } else {
                    router.push('/admin/insights');
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
                router.push('/admin/insights');
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] space-y-4">
                <Loader2 className="animate-spin text-[#2F4F4F]" size={32} />
                <p className="text-slate-400 font-serif italic text-sm">Retrieving Manuscript...</p>
            </div>
        );
    }

    if (!blog) return null;

    return (
        <div className="min-h-screen bg-[#F8F9FA] pt-8">
            <InsightEditor initialData={blog} isNew={false} />
        </div>
    );
}
