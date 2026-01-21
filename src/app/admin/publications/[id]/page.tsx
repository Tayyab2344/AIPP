'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PublicationEditor from '@/components/admin/PublicationEditor';
import { publicationService } from '@/lib/services/publicationService';
import { Publication } from '@/types';
import { Loader2 } from 'lucide-react';

export default function EditPublication() {
    const { id } = useParams();
    const router = useRouter();
    const [publication, setPublication] = useState<Publication | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPublication = async () => {
            if (!id) return;
            try {
                const data = await publicationService.getById(id as string);
                if (data) {
                    setPublication(data);
                } else {
                    router.push('/admin/publications');
                }
            } catch (error) {
                console.error("Error fetching publication:", error);
                router.push('/admin/publications');
            } finally {
                setLoading(false);
            }
        };
        fetchPublication();
    }, [id, router]);

    if (loading) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
                <Loader2 className="animate-spin text-[#2F4F4F]" size={40} />
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Consulting the Archive Record...</p>
            </div>
        );
    }

    if (!publication) return null;

    return <PublicationEditor initialData={publication} />;
}
