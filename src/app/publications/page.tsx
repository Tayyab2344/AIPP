import { publicationService } from '@/lib/services/publicationService';
import PublicationsClient from './PublicationsClient';
import { Publication } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Institutional Research & Research Outputs | AIPP',
    description: 'Formal research outputs shaping political thought and strategic intellect for women\'s political transformation from the Athena Institute.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function PublicationsPage() {
    let publications: Publication[] = [];
    try {
        publications = await publicationService.getPublished();
    } catch (error) {
        console.error("Error fetching publications on server:", error);
    }

    return <PublicationsClient initialPublications={publications} />;
}
