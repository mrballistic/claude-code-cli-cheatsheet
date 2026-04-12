'use client';

import { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

/**
 * Fixed top navigation bar with backdrop blur. Uses Intersection Observer
 * to highlight the active section on scroll. Collapses to a hamburger
 * menu on mobile (< 768px).
 */
export default function Navbar() {
  const [activeId, setActiveId] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => {
      const id = item.href.replace('#', '');
      return document.getElementById(id);
    }).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-primary)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          className="text-sm font-bold"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
        >
          CC CLI
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer"
                style={{
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: 'var(--text-secondary)' }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 space-y-1"
          style={{ backgroundColor: 'rgba(10, 10, 15, 0.95)' }}
        >
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors cursor-pointer"
                style={{
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
