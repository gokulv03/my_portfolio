'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-40 bg-paper border-b-[3px] border-ink">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a
            href="#top"
            className="font-display font-black text-xl tracking-tight uppercase text-ink"
          >
            Gokul&nbsp;V.
          </a>

          {/* Desktop link row */}
          <div className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-ink-2 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-paper bg-ink px-4 py-2 border-2 border-ink hover:bg-accent hover:border-accent hover:text-accent-ink transition-colors"
            >
              Hire me
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border-2 border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden border-t-2 border-ink bg-paper">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.12em] text-ink py-4 border-b border-hairline hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
