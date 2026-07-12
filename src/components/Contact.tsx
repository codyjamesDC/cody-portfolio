import { useEffect, useRef, useState } from 'react';
import { personal } from '../data/personal';

const CONTACT_LINKS = [
  {
    id: 'contact-email',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: 'Best way to reach me',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/codyjamesdelacruz',
    href: personal.linkedin,
    description: 'Connect professionally',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'github.com/codyjamesdelacruz',
    href: personal.github,
    description: 'See my code & projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      aria-label={`Copy ${text}`}
      className="opacity-0 group-hover:opacity-100 transition-all duration-200 p-1 rounded"
      style={{ color: copied ? 'var(--color-accent)' : 'var(--color-text-faint)' }}
    >
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 relative"
      aria-label="Contact"
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(107,142,35,0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="section-label mx-auto">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--color-text-dim)' }}>
            Whether you're looking to collaborate on a project, offer an internship, or just want to talk tech —
            my inbox is always open.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {CONTACT_LINKS.map((link, idx) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="reveal glass-card group p-6 flex flex-col items-center text-center gap-3 no-underline"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(107,142,35,0.1)',
                  color: 'var(--color-accent)',
                  border: '1px solid rgba(107,142,35,0.2)',
                }}
              >
                {link.icon}
              </div>
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ color: 'var(--color-text)' }}>
                  {link.label}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-text-dim)' }}>
                  {link.description}
                </p>
              </div>
              <div
                className="text-xs font-mono px-2 py-1 rounded max-w-full flex items-center justify-center gap-1.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--color-text-faint)',
                }}
              >
                <span className="truncate">{link.value}</span>
                <div className="flex-shrink-0">
                  <CopyButton text={link.href.startsWith('mailto') ? personal.email : link.href} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA row */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="contact-email-cta"
            href={`mailto:${personal.email}`}
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-moss-DEFAULT/50"
            style={{
              background: 'var(--color-accent)',
              color: '#1a0f0b',
              boxShadow: '0 4px 20px rgba(107,142,35,0.3)',
            }}
          >
            Say Hello
          </a>
          <a
            id="contact-cv-cta"
            href={personal.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-moss-DEFAULT/50"
            style={{
              background: 'transparent',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = 'var(--color-accent)';
              el.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = 'var(--color-border)';
              el.style.color = 'var(--color-text)';
            }}
          >
            ↗ View CV
          </a>
        </div>
      </div>
    </section>
  );
}
