import { useEffect, useRef } from 'react';
import { personal } from '../data/personal';

export function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="About Cody James Dela Cruz"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(107,142,35,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(121,85,72,0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(107,142,35,0.25) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text content ── */}
          <div ref={textRef} className="flex-1 text-center lg:text-left">


            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 leading-tight">
              <span style={{ color: 'var(--color-text)' }}>
                {personal.name.split(' ').slice(0, 2).join(' ')}
              </span>
              <br />
              <span className="gradient-text">
                {personal.name.split(' ').slice(2).join(' ')}
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="text-lg sm:text-xl font-medium mb-2"
              style={{ color: 'var(--color-accent)' }}
            >
              {personal.tagline}
            </p>
            <p
              className="text-sm font-medium mb-6"
              style={{ color: 'var(--color-text-dim)' }}
            >
              {personal.subTagline}
            </p>

            {/* Bio */}
            <p
              className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
              style={{ color: 'var(--color-text-dim)' }}
            >
              {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <button
                id="hero-view-projects"
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-moss-DEFAULT/50"
                style={{
                  background: 'var(--color-accent)',
                  color: '#1a0f0b',
                  boxShadow: '0 4px 20px rgba(107,142,35,0.3)',
                }}
              >
                View Projects →
              </button>

              <a
                id="hero-download-cv"
                href={personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-moss-DEFAULT/50"
                style={{
                  background: 'transparent',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-accent)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text)';
                }}
              >
                ↗ View CV
              </a>

              {/* Social quick-links */}
              <a
                id="hero-github"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10"
                style={{ color: 'var(--color-text-dim)', border: '1px solid var(--color-border)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                id="hero-linkedin"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10"
                style={{ color: 'var(--color-text-dim)', border: '1px solid var(--color-border)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Avatar ── */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div
              className="relative"
              style={{
                filter: 'drop-shadow(0 0 32px rgba(107,142,35,0.25))',
              }}
            >
              {/* Glow ring */}
              <div
                className="absolute -inset-1 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-text-dim), var(--color-accent))',
                  animation: 'spin 8s linear infinite',
                  opacity: 0.5,
                }}
                aria-hidden="true"
              />
              <div
                className="absolute -inset-0.5 rounded-full"
                style={{ background: 'var(--color-bg)' }}
                aria-hidden="true"
              />
              <img
                src={`${import.meta.env.BASE_URL}avatar.png`}
                alt="Cody James Dela Cruz — profile illustration"
                className="relative w-90 h-90 lg:w-90 lg:h-90 rounded-full object-cover"
                style={{ border: '3px solid var(--color-accent-dim)' }}
              />
            </div>

            {/* Status badge */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(107,142,35,0.1)',
                border: '1px solid rgba(107,142,35,0.2)',
                color: 'var(--color-accent)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: 'var(--color-accent)' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: 'var(--color-accent)' }}
                />
              </span>
              Open to opportunities
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-dim)' }}>scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-dim)' }} className="animate-bounce">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* CSS for spinning ring */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
