import { Metadata } from 'next';
import RPIClient from './RPIClient';

export const metadata: Metadata = {
    title: 'Research, Policy & Innovation (RPI)',
    description: 'Transforming political structures through rigorous data-driven inquiry and innovation. Our RPI pillar focuses on auditing transparency and reimagining public service.',
    keywords: ['Policy Innovation', 'Institutional Audit', 'Gender-Responsive Governance', 'Public Policy', 'Political Research'],
};

export default function RPIPage() {
    return <RPIClient />;
}
