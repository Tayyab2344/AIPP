import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Institutional Inquiry | Athena Institute for Political Praxis',
    description: 'Connect with AIPP for research collaborations, strategic partnerships, and institutional inquiries regarding political praxis and governance reform.',
    keywords: ['Contact AIPP', 'Institutional Inquiry', 'Research Collaboration', 'Political Strategy Contact'],
};

export default function ContactPage() {
    return <ContactClient />;
}
