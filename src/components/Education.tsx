import { useEffect, useRef } from 'react';
import { education } from '../data/education';

export function Education() {
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
      id="education"
      ref={sectionRef}
      className="py-12 relative"
      aria-label="Education"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(121,85,72,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-14">
          <p className="section-label">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
            Where I'm{' '}
            <span className="gradient-text">Learning</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {education.map((entry, idx) => (
            <div
              key={entry.id}
              id={`education-${entry.id}`}
              className="reveal glass-card p-8"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left: degree info */}
                <div className="flex-1">
                  {/* University badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-accent-dim), var(--color-accent))',
                        color: '#1a0f0b',
                      }}
                    >
                      UP
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight" style={{ color: 'var(--color-text)' }}>
                        {entry.institution}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--color-text-dim)' }}>
                        {entry.degree} in {entry.field}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <div
                    className="inline-flex items-center gap-2 text-sm mb-6"
                    style={{ color: 'var(--color-text-dim)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {entry.period} &nbsp;·&nbsp; {entry.expectedGrad}
                  </div>

                  {/* Relevant coursework */}
                  {entry.relevantCoursework && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text-faint)' }}>
                        Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {entry.relevantCoursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs px-2.5 py-1 rounded-md"
                            style={{
                              background: 'var(--color-bg-badge)',
                              color: 'var(--color-text-dim)',
                              border: '1px solid var(--color-border-badge)',
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget as HTMLSpanElement;
                              el.style.background = 'rgba(107,142,35,0.12)';
                              el.style.color = 'var(--color-accent)';
                              el.style.borderColor = 'rgba(107,142,35,0.3)';
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget as HTMLSpanElement;
                              el.style.background = 'var(--color-bg-badge)';
                              el.style.color = 'var(--color-text-dim)';
                              el.style.borderColor = 'var(--color-border-badge)';
                            }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: honors */}
                <div className="flex flex-col gap-3 lg:min-w-[220px]">
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-faint)' }}>
                    Academic Honors
                  </p>
                  {entry.honors.map((honor) => (
                    <div
                      key={honor.label}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: 'rgba(107,142,35,0.08)',
                        border: '1px solid rgba(107,142,35,0.18)',
                      }}
                    >
                      <div>
                        <p className="font-semibold text-sm" style={{ color: 'var(--color-accent)' }}>
                          {honor.label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-dim)' }}>
                          {honor.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
