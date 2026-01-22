import { Metadata } from 'next';
import CollaborateClient from './CollaborateClient';

export const metadata: Metadata = {
    title: 'Join Our Mission | Institutional Engagement & Volunteering',
    description: 'Lend your strategic voice to AIPP. We invite scholars, practitioners, and passionate individuals to join our mission through volunteering, fellowships, and partnerships.',
    keywords: ['Volunteer', 'Fellowship', 'Institutional Partnership', 'AIPP Engagement', 'Political Praxis'],
};

export default function CollaboratePage() {
    return <CollaborateClient />;
}
