import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { ThemeToggle } from './ThemeToggle';
import { personal } from '../data/personal';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const activeId = useScrollSpy(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      ].join(' ')}
      style={scrolled ? {
        background: 'var(--color-bg-nav)',
        borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
      } : undefined}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo / name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-base tracking-tight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-moss-DEFAULT/50 rounded"
          style={{ color: 'var(--color-accent)' }}
          aria-label="Scroll to top"
        >
          {personal.name.split(' ').slice(0, 2).join(' ')}
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.id}>
                <button
                  id={`nav-${link.id}`}
                  onClick={() => scrollTo(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-DEFAULT/40',
                    isActive
                      ? 'bg-amber-DEFAULT/10'
                      : 'hover:bg-amber-DEFAULT/8',
                  ].join(' ')}
                  style={{
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-dim)',
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right side: theme toggle + cv CTA */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            id="nav-cv-cta"
            href={personal.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-DEFAULT/50"
            style={{
              background: 'var(--color-accent)',
              color: '#1a0f0b',
              boxShadow: '0 2px 10px rgba(245, 158, 11, 0.3)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View CV
          </a>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded focus:outline-none focus:ring-2 focus:ring-amber-DEFAULT/50"
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ background: 'var(--color-text)' }}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ background: 'var(--color-text)' }}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ background: 'var(--color-text)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          background: 'var(--color-bg-menu)',
          borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
          backdropFilter: 'blur(12px)',
        }}
        aria-hidden={!menuOpen}
      >
        <ul className="px-6 py-4 flex flex-col gap-1" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.id}>
                <button
                  id={`nav-mobile-${link.id}`}
                  onClick={() => scrollTo(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-dim)',
                    background: isActive ? 'rgba(245,158,11,0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <a
              href={personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-semibold"
              style={{ color: 'var(--color-accent)' }}
              onClick={() => setMenuOpen(false)}
            >
              ↗ View CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
