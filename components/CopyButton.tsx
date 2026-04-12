'use client';

import { useState, useCallback } from 'react';
import { Clipboard, Check } from 'lucide-react';

/**
 * Reusable copy-to-clipboard button. Shows a clipboard icon that swaps
 * to a green checkmark for 2 seconds after a successful copy.
 * Used across CodeBlock, ResourceCard, and inline link copy controls.
 */
interface CopyButtonProps {
  text: string;
  size?: number;
  className?: string;
}

export default function CopyButton({ text, size = 14, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied — fail silently
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`p-1.5 rounded-md transition-all cursor-pointer shrink-0 ${className}`}
      style={{
        backgroundColor: copied ? 'rgba(52, 211, 153, 0.1)' : 'var(--bg-tertiary)',
        color: copied ? 'var(--accent-tertiary)' : 'var(--text-tertiary)',
      }}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check size={size} /> : <Clipboard size={size} />}
    </button>
  );
}
