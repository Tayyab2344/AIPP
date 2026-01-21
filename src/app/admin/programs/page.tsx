'use client';

import { useState } from 'react';
import {
    Plus,
    Search,
    ChevronDown,
    X,
    Bold,
    Italic,
    List,
    Link as LinkIcon,
    FlaskConical,
    FileText,
    Info,
} from 'lucide-react';

// Mock data for programs
const programsData = [
    {
        id: 'P-9023',
        title: 'Policy Dynamics & Urbanism',
        coreOffering: 'RPI',
        status: 'PUBLISHED',
        createdDate: '2023-11-14',
        shortDescription: 'A high-level exploration of how urban planning dictates municipal policy agility.',
        detailedDescription: 'Detailed analytical framework including case studies from Singapore, Berlin, and Medellín. This program emphasizes the dialectic relationship between infrastructure and administrative governance.',
        connectedEntities: [
            { type: 'LAB RELATIONSHIP', name: 'Urban Resilience Lab' },
            { type: 'PUBLICATION', name: 'Journal of Political Architecture #42' },
        ],
    },
    {
        id: 'P-9102',
        title: 'Geopolitical Risk Analysis',
        coreOffering: 'SAS',
        status: 'DRAFT',
        createdDate: '2023-12-01',
        shortDescription: 'Comprehensive analysis of geopolitical risks affecting policy decisions.',
        detailedDescription: 'This program provides frameworks for understanding and analyzing geopolitical risks in various regions.',
        connectedEntities: [],
    },
    {
        id: 'P-8821',
        title: 'Constitutional Frameworks Lab',
        coreOffering: 'CPA',
        status: 'PUBLISHED',
        createdDate: '2023-10-22',
        shortDescription: 'Study of constitutional frameworks across different governance systems.',
        detailedDescription: 'In-depth exploration of constitutional law and its impact on governance structures.',
        connectedEntities: [],
    },
    {
        id: 'P-7601',
        title: 'Archived Legal Studies',
        coreOffering: 'SAS',
        status: 'ARCHIVED',
        createdDate: '2022-05-10',
        shortDescription: 'Historical legal studies and archived research materials.',
        detailedDescription: 'Collection of archived legal studies and historical governance research.',
        connectedEntities: [],
    },
];

const coreOfferings = ['All', 'RPI', 'SAS', 'CPA'];
const statusOptions = ['All', 'Published', 'Draft', 'Archived'];

export default function ProgramsPage() {
    const [selectedProgram, setSelectedProgram] = useState(programsData[0]);
    const [showDetails, setShowDetails] = useState(true);
    const [coreOfferingFilter, setCoreOfferingFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('Published');
    const [searchQuery, setSearchQuery] = useState('');

    const getStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            PUBLISHED: 'bg-emerald-100 text-emerald-700',
            DRAFT: 'bg-amber-100 text-amber-700',
            ARCHIVED: 'bg-slate-100 text-slate-500',
        };
        return styles[status] || styles.DRAFT;
    };

    return (
        <div className="flex h-[calc(100vh-73px)]">
            {/* Main Content */}
            <div className={`flex-grow overflow-auto ${showDetails ? 'pr-0' : ''}`}>
                {/* Header */}
                <div className="mb-6">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">
                        ADMIN / PROGRAMS & SUB-PROGRAMS
                    </div>
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 font-serif">Programs Management</h1>
                            <p className="text-slate-500 mt-1 text-sm max-w-xl">
                                Structure institutional offerings for the Athena Institute. Ensure alignment with praxis guidelines.
                            </p>
                        </div>
                        <button className="flex items-center space-x-2 bg-[#2F4F4F] text-white px-5 py-3 rounded-lg hover:bg-[#1F3F3F] transition-colors font-medium">
                            <Plus suppressHydrationWarning size={18} />
                            <span>Create Program</span>
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                        <select
                            value={coreOfferingFilter}
                            onChange={(e) => setCoreOfferingFilter(e.target.value)}
                            className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-[#2F4F4F] cursor-pointer"
                        >
                            {coreOfferings.map((offering) => (
                                <option key={offering} value={offering}>
                                    Core Offering: {offering}
                                </option>
                            ))}
                        </select>
                        <ChevronDown suppressHydrationWarning size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>

                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-[#2F4F4F] cursor-pointer"
                        >
                            {statusOptions.map((status) => (
                                <option key={status} value={status}>
                                    Status: {status}
                                </option>
                            ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>

                    <div className="relative flex-grow max-w-xs">
                        <Search suppressHydrationWarning size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search ID or title..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F]"
                        />
                    </div>
                </div>

                {/* Programs Table */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="text-left px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Program Title</th>
                                <th className="text-left px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Core Offering</th>
                                <th className="text-left px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="text-left px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Created Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programsData.map((program) => (
                                <tr
                                    key={program.id}
                                    onClick={() => {
                                        setSelectedProgram(program);
                                        setShowDetails(true);
                                    }}
                                    className={`border-b border-slate-50 cursor-pointer transition-colors ${selectedProgram?.id === program.id
                                        ? 'bg-slate-50'
                                        : 'hover:bg-slate-50/50'
                                        }`}
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-slate-800">{program.title}</div>
                                        <div className="text-xs text-slate-400 mt-0.5">ID: {program.id}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-600">{program.coreOffering}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusBadge(program.status)}`}>
                                            {program.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {program.createdDate}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Institutional Guidance */}
                <div className="mt-6 bg-slate-50 rounded-xl p-5 flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-[#2F4F4F] flex items-center justify-center text-white shrink-0">
                        <Info suppressHydrationWarning size={16} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Institutional Guidance</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            "All programmatic entries must undergo a secondary ethics review if they involve cross-border political praxis. Maintain academic neutrality and adhere to the AIPP Style Guide for internal documentation."
                        </p>
                    </div>
                </div>
            </div>

            {/* Program Details Panel */}
            {showDetails && selectedProgram && (
                <div className="w-[400px] border-l border-slate-200 bg-white flex flex-col shrink-0 ml-6">
                    {/* Panel Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                        <h2 className="font-bold text-slate-800 uppercase tracking-wider text-sm">Program Details</h2>
                        <button
                            onClick={() => setShowDetails(false)}
                            className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X suppressHydrationWarning size={18} />
                        </button>
                    </div>

                    {/* Panel Content */}
                    <div className="flex-grow overflow-auto px-6 py-5 space-y-6">
                        {/* Program Title */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Program Title
                            </label>
                            <input
                                type="text"
                                defaultValue={selectedProgram.title}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F]"
                            />
                        </div>

                        {/* Core Offering & Status */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    Core Offering
                                </label>
                                <div className="relative">
                                    <select
                                        defaultValue={selectedProgram.coreOffering}
                                        className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#2F4F4F]"
                                    >
                                        <option value="RPI">RPI</option>
                                        <option value="SAS">SAS</option>
                                        <option value="CPA">CPA</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    Status
                                </label>
                                <div className="flex items-center space-x-3 py-3">
                                    <button className={`relative w-12 h-6 rounded-full transition-colors ${selectedProgram.status === 'PUBLISHED' ? 'bg-[#2F4F4F]' : 'bg-slate-200'}`}>
                                        <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${selectedProgram.status === 'PUBLISHED' ? 'left-6' : 'left-0.5'}`} />
                                    </button>
                                    <span className="text-sm font-medium text-slate-600">PUBLISHED</span>
                                </div>
                            </div>
                        </div>

                        {/* Short Description */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Short Description
                            </label>
                            <textarea
                                defaultValue={selectedProgram.shortDescription}
                                rows={3}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#2F4F4F] resize-none"
                            />
                        </div>

                        {/* Detailed Description */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Detailed Description
                            </label>
                            <div className="border border-slate-200 rounded-lg overflow-hidden">
                                <div className="flex items-center space-x-1 px-3 py-2 border-b border-slate-100 bg-slate-50">
                                    <button className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded">
                                        <Bold suppressHydrationWarning size={14} />
                                    </button>
                                    <button className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded">
                                        <Italic suppressHydrationWarning size={14} />
                                    </button>
                                    <button className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded">
                                        <List suppressHydrationWarning size={14} />
                                    </button>
                                    <div className="flex-grow" />
                                    <button className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded">
                                        <LinkIcon suppressHydrationWarning size={14} />
                                    </button>
                                </div>
                                <textarea
                                    defaultValue={selectedProgram.detailedDescription}
                                    rows={5}
                                    className="w-full px-4 py-3 text-sm focus:outline-none resize-none"
                                />
                            </div>
                        </div>

                        {/* Connected Entities */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    Connected Entities
                                </label>
                                <button className="flex items-center space-x-1 text-xs font-semibold text-[#2F4F4F] hover:text-[#1F3F3F]">
                                    <LinkIcon size={12} />
                                    <span>Link Entity</span>
                                </button>
                            </div>
                            <div className="space-y-3">
                                {selectedProgram.connectedEntities.length > 0 ? (
                                    selectedProgram.connectedEntities.map((entity, i) => (
                                        <div key={i} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                                            <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center text-slate-500">
                                                {entity.type === 'LAB RELATIONSHIP' ? <FlaskConical suppressHydrationWarning size={16} /> : <FileText suppressHydrationWarning size={16} />}
                                            </div>
                                            <div className="flex-grow">
                                                <div className="font-semibold text-sm text-slate-700">{entity.name}</div>
                                                <div className="text-xs text-slate-400">{entity.type}</div>
                                            </div>
                                            <button className="p-1 text-slate-400 hover:text-slate-600">
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-slate-400 py-3">No connected entities</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Panel Footer */}
                    <div className="px-6 py-4 border-t border-slate-100 flex items-center space-x-3">
                        <button className="flex-grow bg-[#2F4F4F] text-white py-3 rounded-lg font-semibold hover:bg-[#1F3F3F] transition-colors">
                            Save Changes
                        </button>
                        <button className="px-6 py-3 text-slate-500 font-semibold hover:text-slate-700 transition-colors">
                            Discard
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
