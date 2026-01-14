import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Publications | Athena Institute for Political Praxis',
    description: 'Formal research outputs shaping political thought and strategic intellect for women\'s political transformation.',
};

export default function PublicationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
