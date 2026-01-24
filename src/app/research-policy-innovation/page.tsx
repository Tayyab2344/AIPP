import { programService } from '@/lib/services/programService';
import { publicationService } from '@/lib/services/publicationService';
import RPIClient from './RPIClient';
import { Metadata } from 'next';
import { Program, Publication } from '@/types';

export const metadata: Metadata = {
    title: 'Research, Policy & Innovation (RPI) | Athena Institute',
    description: 'Transforming political structures through rigorous data-driven inquiry and innovation. Our RPI pillar focuses on auditing transparency and reimagining public service.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function RPIPage() {
    let rpiPrograms: Program[] = [];
    let rpiOutputs: Publication[] = [];

    try {
        const [programs, outputs] = await Promise.all([
            programService.getPublished(),
            publicationService.getPublished()
        ]);

        rpiPrograms = programs.filter(p => p.coreOffering === 'RPI');
        rpiOutputs = outputs.slice(0, 3);
    } catch (error) {
        console.error("Error fetching RPI data on server:", error);
        // Fallbacks for critical UI stability
        rpiPrograms = [
            {
                id: 'fallback-1',
                title: 'Strategic Governance Initiative',
                description: 'A comprehensive framework for analyzing and restructuring governance models to be more inclusive and effective.',
                coreOffering: 'RPI' as const,
                status: 'PUBLISHED',
                modules: ['Institutional Analysis', 'Policy Design', 'Implementation Strategy'],
                shortDescription: 'A comprehensive framework for analyzing and restructuring governance models.',
                detailedDescription: 'A comprehensive framework for analyzing and restructuring governance models to be more inclusive and effective.',
                connectedEntities: [],
                createdDate: new Date()
            }
        ];
    }

    return <RPIClient initialPrograms={rpiPrograms} initialOutputs={rpiOutputs} />;
}
