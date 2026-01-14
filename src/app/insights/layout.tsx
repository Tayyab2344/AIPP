import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insights | Athena Institute for Political Praxis',
    description: 'Public reflections and analytical commentary extending the boundaries of political praxis through rigorous reflection and strategic intellect.',
};

export default function InsightsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
