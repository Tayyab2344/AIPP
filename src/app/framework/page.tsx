import { publicationService } from '@/lib/services/publicationService';
import FrameworkClient from './FrameworkClient';
import { Publication } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research & Policy Framework | Athena Institute',
    description: 'Advancing women\'s strategic intellect to transform global political praxis through rigorous, interdisciplinary, and evidence-based inquiry.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function FrameworkPage() {
    let recentOutputs: Publication[] = [];
    try {
        const data = await publicationService.getPublished();
        recentOutputs = data.slice(0, 2);
    } catch (error) {
        console.error("Error fetching framework outputs on server:", error);
    }

    return <FrameworkClient initialOutputs={recentOutputs} />;
}
