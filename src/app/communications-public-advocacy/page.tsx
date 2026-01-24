import { publicationService } from '@/lib/services/publicationService';
import CPAClient from './CPAClient';
import { Publication } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Communications & Public Advocacy (CPA) | Athena Institute',
    description: 'Bridging rigorous research with public discourse. We amplify women\'s strategic voice in democratic understanding and institutional reform through reflective political praxis.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function CPAPage() {
    let recentOutputs: Publication[] = [];
    try {
        const data = await publicationService.getPublished();
        recentOutputs = data.slice(0, 3);
    } catch (error) {
        console.error("Error fetching CPA outputs on server:", error);
    }

    return <CPAClient initialOutputs={recentOutputs} />;
}
