'use client';

import { useRef, useEffect } from 'react';
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Type,
    AlignLeft,
    AlignCenter,
    AlignRight
} from 'lucide-react';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);

    // Initial content load
    useEffect(() => {
        if (editorRef.current && value !== editorRef.current.innerHTML) {
            editorRef.current.innerHTML = value || '';
        }
    }, []);

    const execCommand = (command: string, value: string = '') => {
        document.execCommand(command, false, value);
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const handleInput = () => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const ToolbarButton = ({
        onClick,
        icon: Icon,
        title,
        active = false
    }: {
        onClick: () => void,
        icon: any,
        title: string,
        active?: boolean
    }) => (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            title={title}
            className={`p-2 rounded hover:bg-slate-200 transition-colors ${active ? 'bg-slate-200 text-[#2F4F4F]' : 'text-slate-500'}`}
        >
            <Icon suppressHydrationWarning size={16} />
        </button>
    );

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col bg-white shadow-sm h-full">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-100 bg-slate-50/50 sticky top-0 z-20">
                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm mr-2">
                    <ToolbarButton onClick={() => execCommand('formatBlock', 'H1')} icon={Heading1} title="Heading 1" />
                    <ToolbarButton onClick={() => execCommand('formatBlock', 'H2')} icon={Heading2} title="Heading 2" />
                    <ToolbarButton onClick={() => execCommand('formatBlock', 'H3')} icon={Heading3} title="Heading 3" />
                    <ToolbarButton onClick={() => execCommand('formatBlock', 'H4')} icon={Heading4} title="Heading 4" />
                    <ToolbarButton onClick={() => execCommand('formatBlock', 'H5')} icon={Heading5} title="Heading 5" />
                    <ToolbarButton onClick={() => execCommand('formatBlock', 'H6')} icon={Heading6} title="Heading 6" />
                </div>

                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm mr-2">
                    <ToolbarButton onClick={() => execCommand('bold')} icon={Bold} title="Bold" />
                    <ToolbarButton onClick={() => execCommand('italic')} icon={Italic} title="Italic" />
                </div>

                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm mr-2">
                    <ToolbarButton onClick={() => execCommand('insertUnorderedList')} icon={List} title="Bullet List" />
                    <ToolbarButton onClick={() => execCommand('insertOrderedList')} icon={ListOrdered} title="Numbered List" />
                </div>

                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm">
                    <ToolbarButton onClick={() => execCommand('justifyLeft')} icon={AlignLeft} title="Align Left" />
                    <ToolbarButton onClick={() => execCommand('justifyCenter')} icon={AlignCenter} title="Align Center" />
                    <ToolbarButton onClick={() => execCommand('justifyRight')} icon={AlignRight} title="Align Right" />
                </div>

                <div className="flex-grow" />

                <div className="flex items-center px-3 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    WYSIWYG Mode
                </div>
            </div>

            {/* Editable Area */}
            <div className="flex-grow relative">
                <div
                    ref={editorRef}
                    contentEditable
                    onInput={handleInput}
                    className="w-full min-h-[500px] p-8 focus:outline-none prose prose-slate prose-lg max-w-none 
                        prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#2F4F4F] 
                        prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 
                        prose-li:text-slate-600 prose-ol:list-decimal prose-ul:list-disc
                        empty:before:content-['Begin_your_analytical_discourse...'] empty:before:text-slate-300 empty:before:italic"
                />
            </div>
        </div>
    );
}
