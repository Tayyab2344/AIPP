'use client';

import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Heading3,
    Quote,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Link as LinkIcon,
    Unlink,
    Redo,
    Undo,
    RemoveFormatting
} from 'lucide-react';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Underline,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-[#2F4F4F] underline cursor-pointer',
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Placeholder.configure({
                placeholder: placeholder || 'Begin your writing...',
            }),
        ],
        content: value,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange(html === '<p></p>' ? '' : html);
        },
        editorProps: {
            attributes: {
                class: 'prose prose-slate prose-lg max-w-none focus:outline-none min-h-[500px] p-8 prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#2F4F4F] prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-li:text-slate-600 prose-ol:list-decimal prose-ul:list-disc',
            },
        },
    });

    // Update editor content if value changes externally
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            // Update if the content is different and either:
            // 1. The editor is not focused (external update)
            // 2. The editor is empty but we have a value (initial load)
            if (!editor.isFocused || editor.isEmpty) {
                editor.commands.setContent(value, { emitUpdate: false });
            }
        }
    }, [value, editor]);

    if (!editor) {
        return null;
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        // cancelled
        if (url === null) {
            return;
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        // update
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    const ToolbarButton = ({
        onClick,
        icon: Icon,
        title,
        active = false,
        disabled = false
    }: {
        onClick: () => void,
        icon: any,
        title: string,
        active?: boolean,
        disabled?: boolean
    }) => (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            disabled={disabled}
            title={title}
            className={`p-2 rounded hover:bg-slate-200 transition-colors disabled:opacity-50 ${active ? 'bg-slate-200 text-[#2F4F4F]' : 'text-slate-500'}`}
        >
            <Icon suppressHydrationWarning size={16} />
        </button>
    );

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col bg-white shadow-sm h-full">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-100 bg-slate-50/50 sticky top-0 z-20">
                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm mr-2">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        icon={Heading1}
                        title="Heading 1"
                        active={editor.isActive('heading', { level: 1 })}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        icon={Heading2}
                        title="Heading 2"
                        active={editor.isActive('heading', { level: 2 })}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        icon={Heading3}
                        title="Heading 3"
                        active={editor.isActive('heading', { level: 3 })}
                    />
                </div>

                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm mr-2">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        icon={Bold}
                        title="Bold"
                        active={editor.isActive('bold')}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        icon={Italic}
                        title="Italic"
                        active={editor.isActive('italic')}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        icon={UnderlineIcon}
                        title="Underline"
                        active={editor.isActive('underline')}
                    />
                </div>

                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm mr-2">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        icon={List}
                        title="Bullet List"
                        active={editor.isActive('bulletList')}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        icon={ListOrdered}
                        title="Numbered List"
                        active={editor.isActive('orderedList')}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        icon={Quote}
                        title="Blockquote"
                        active={editor.isActive('blockquote')}
                    />
                </div>

                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm mr-2">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        icon={AlignLeft}
                        title="Align Left"
                        active={editor.isActive({ textAlign: 'left' })}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        icon={AlignCenter}
                        title="Align Center"
                        active={editor.isActive({ textAlign: 'center' })}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        icon={AlignRight}
                        title="Align Right"
                        active={editor.isActive({ textAlign: 'right' })}
                    />
                </div>

                <div className="flex items-center bg-white border border-slate-200 rounded p-0.5 shadow-sm mr-2">
                    <ToolbarButton
                        onClick={setLink}
                        icon={LinkIcon}
                        title="Set Link"
                        active={editor.isActive('link')}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().unsetLink().run()}
                        icon={Unlink}
                        title="Unset Link"
                        disabled={!editor.isActive('link')}
                    />
                </div>

                <div className="flex-grow" />

                <div className="flex items-center gap-1">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().undo().run()}
                        icon={Undo}
                        title="Undo"
                        disabled={!editor.can().undo()}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().redo().run()}
                        icon={Redo}
                        title="Redo"
                        disabled={!editor.can().redo()}
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().unsetAllMarks().run()}
                        icon={RemoveFormatting}
                        title="Clear Formatting"
                    />
                </div>
            </div>

            {/* Editable Area */}
            <div className="flex-grow relative overflow-auto">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
