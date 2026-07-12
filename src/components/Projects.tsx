import { useState, useEffect, useRef } from 'react';
import { projects, projectTags, type ProjectTag } from '../data/projects';

export function Projects() {
  const [activeTag, setActiveTag] = useState<ProjectTag>('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag as Exclude<ProjectTag, 'All'>));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTag]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 relative"
      aria-label="Projects"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 100% 60%, rgba(107,142,35,0.07) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="section-label">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by tag">
          {projectTags.map((tag) => (
            <button
              key={tag}
              id={`filter-${tag.toLowerCase()}`}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-moss-DEFAULT/50"
              style={
                activeTag === tag
                  ? {
                    background: 'var(--color-accent)',
                    color: '#1a0f0b',
                    boxShadow: '0 2px 12px rgba(107,142,35,0.35)',
                  }
                  : {
                    background: 'rgba(255,255,255,0.04)',
                    color: 'var(--color-text-dim)',
                    border: '1px solid var(--color-border)',
                  }
              }
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div key={activeTag} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <div key={project.id} className="reveal h-full" style={{ transitionDelay: `${idx * 0.08}s` }}>
              <article
                id={`project-${project.id}`}
                className="glass-card p-6 flex flex-col h-full"
              >
                {/* Top: event badge + period */}
                <div className="flex items-start gap-2 mb-4">
                  {project.event ? (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-md inline-block w-fit whitespace-pre-line text-left leading-tight"
                      style={{
                        background: 'rgba(107,142,35,0.12)',
                        color: 'var(--color-accent)',
                        border: '1px solid rgba(107,142,35,0.2)',
                      }}
                    >
                      {project.event}
                    </span>
                  ) : (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-md inline-block w-fit whitespace-nowrap"
                      style={{
                        background: 'rgba(121,85,72,0.15)',
                        color: 'var(--color-text-dim)',
                        border: '1px solid rgba(121,85,72,0.2)',
                      }}
                    >
                      School Project
                    </span>
                  )}
                  <span className="text-xs flex-shrink-0 ml-auto" style={{ color: 'var(--color-text-faint)' }}>
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: 'var(--color-text)' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-text-dim)' }}>
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded font-mono"
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
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                      style={{ color: 'var(--color-text-dim)' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-dim)')}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
