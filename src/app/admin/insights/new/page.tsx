'use client';

import InsightEditor from '@/components/admin/InsightEditor';

export default function NewInsightPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] pt-8">
            <InsightEditor isNew={true} />
        </div>
    );
}
