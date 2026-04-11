'use client';

import { useState, useCallback } from 'react';
import { Clipboard, Check } from 'lucide-react';

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
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
