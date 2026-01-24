import { programService } from '@/lib/services/programService';
import SASClient from './SASClient';
import { Program } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Strategic Action & Simulation (SAS) | AIPP',
    description: 'The operational expression of political praxis. Simulated tactical engagement labs designed for leadership under stress and real-world strategic execution.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function SASPage() {
    let sasPrograms: Program[] = [];
    try {
        const data = await programService.getPublished();
        sasPrograms = data.filter(p => p.coreOffering === 'SAS');
    } catch (error) {
        console.error("Error fetching SAS programs on server:", error);
    }

    return <SASClient initialPrograms={sasPrograms} />;
}
