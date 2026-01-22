import { Metadata } from 'next';
import SASClient from './SASClient';

export const metadata: Metadata = {
    title: 'Strategic Action & Simulation (SAS)',
    description: 'The operational expression of political praxis. Simulated tactical engagement labs designed for leadership under stress and real-world strategic execution.',
    keywords: ['Strategic Simulation', 'Crisis Management', 'Policy Warfare', 'Leadership Labs', 'Political Strategy'],
};

export default function SASPage() {
    return <SASClient />;
}
