import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Athena Institute for Political Praxis',
    description: 'Engage with AIPP for research collaboration, strategic partnerships, and institutional inquiries.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
