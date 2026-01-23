import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RichTextEditor from '../RichTextEditor';
import React from 'react';

// Mocking window.prompt as it's used in the component
window.prompt = vi.fn();

describe('RichTextEditor Rendering', () => {
    it('renders the toolbar buttons', () => {
        const onChange = vi.fn();
        render(<RichTextEditor value="" onChange={onChange} />);

        // Check for some key toolbar buttons
        expect(screen.getByTitle('Bold')).toBeInTheDocument();
        expect(screen.getByTitle('Italic')).toBeInTheDocument();
        expect(screen.getByTitle('Heading 1')).toBeInTheDocument();
        expect(screen.getByTitle('Bullet List')).toBeInTheDocument();
    });

    it('renders the placeholder when no value is provided', async () => {
        const onChange = vi.fn();
        const placeholderText = "Custom Placeholder";
        render(<RichTextEditor value="" onChange={onChange} placeholder={placeholderText} />);

        // The placeholder is often applied to the first empty paragraph
        const editorElement = document.querySelector('.tiptap');
        expect(editorElement).toBeInTheDocument();

        // In recent Tiptap, data-placeholder might be on the editor itself or the first paragraph
        // Let's check both
        const p = editorElement?.querySelector('p');
        const hasPlaceholder = editorElement?.hasAttribute('data-placeholder') || p?.hasAttribute('data-placeholder');
        expect(hasPlaceholder).toBe(true);

        const actualPlaceholder = editorElement?.getAttribute('data-placeholder') || p?.getAttribute('data-placeholder');
        expect(actualPlaceholder).toBe(placeholderText);
    });

    it('updates content when value prop changes', async () => {
        const onChange = vi.fn();
        const { rerender } = render(<RichTextEditor value="Initial" onChange={onChange} />);

        const editorElement = document.querySelector('.tiptap');
        expect(editorElement?.innerHTML).toContain('Initial');

        // Rerender with new value
        rerender(<RichTextEditor value="Updated" onChange={onChange} />);

        // Wait for potential async update
        expect(editorElement?.innerHTML).toContain('Updated');
    });
});
