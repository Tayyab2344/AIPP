import { Metadata } from 'next';
import CPAClient from './CPAClient';

export const metadata: Metadata = {
    title: 'Communications & Public Advocacy (CPA)',
    description: 'Bridging rigorous research with public discourse. We amplify women\'s strategic voice in democratic understanding and institutional reform through reflective political praxis.',
    keywords: ['Public Advocacy', 'Political Communications', 'Democratic Discourse', 'Narrative Strategy', 'Institutional Reform'],
};

export default function CPAPage() {
    return <CPAClient />;
}
