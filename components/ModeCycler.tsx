'use client';

import { useState, useCallback } from 'react';
import { MODE_CYCLE_ORDER } from '@/lib/constants';

export default function ModeCycler() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cycle = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % MODE_CYCLE_ORDER.length);
  }, []);

  return (
    <div className="card">
      <p
        className="text-xs uppercase tracking-wider mb-4"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
      >
        Interactive Demo — Shift+Tab Cycling
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {MODE_CYCLE_ORDER.map((mode, i) => (
          <span
            key={mode}
            className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              fontFamily: 'var(--font-mono)',
              backgroundColor: i === activeIndex ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
              color: i === activeIndex ? 'var(--bg-primary)' : 'var(--text-secondary)',
              boxShadow: i === activeIndex ? '0 0 16px var(--border-glow)' : 'none',
            }}
          >
            {mode}
          </span>
        ))}
      </div>
      <button
        onClick={cycle}
        className="px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          color: 'var(--accent-primary)',
          border: '1px solid var(--border-primary)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        Shift+Tab ↹
      </button>
    </div>
  );
}
