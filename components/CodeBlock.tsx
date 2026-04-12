'use client';

import CopyButton from './CopyButton';

/**
 * Terminal-styled code block with macOS-style chrome (three colored dots),
 * a gradient top-edge accent, optional language label, and a copy button.
 * All code blocks on the site render through this component.
 */
interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="terminal-chrome group">
      <div className="terminal-bar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        {language && (
          <span
            className="ml-auto text-[0.625rem] uppercase tracking-wider"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {language}
          </span>
        )}
        <CopyButton
          text={code}
          className={`opacity-0 group-hover:opacity-100 ${language ? '' : 'ml-auto'}`}
        />
      </div>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
}
