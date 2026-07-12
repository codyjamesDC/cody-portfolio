import { useEffect, useRef } from 'react';
import { skillGroups } from '../data/skills';

export function Skills() {
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
            id="skills"
            ref={sectionRef}
            className="py-12 relative"
            aria-label="Skills"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 50% 40% at 0% 40%, rgba(107,142,35,0.06) 0%, transparent 60%)',
                }}
                aria-hidden="true"
            />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="reveal mb-14">
                    <p className="section-label">Skills</p>
                    <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                        What I{' '}
                        <span className="gradient-text">Work With</span>
                    </h2>
                </div>
            </div>

            {/* Skill groups (Full Width Carousel) */}
            <div
                className="relative flex overflow-hidden group w-full"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
            >
                <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] gap-6 pr-6">
                    {[...skillGroups, ...skillGroups, ...skillGroups, ...skillGroups].map((group, i) => (
                        <div
                            key={`track1-${group.id}-${i}`}
                            className="glass-card p-6 w-[320px] md:w-[380px] shrink-0"
                        >
                            {/* Group header */}
                            <div className="flex items-center gap-3 mb-5">
                                <span
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-bold flex-shrink-0"
                                    style={{
                                        background: 'rgba(107,142,35,0.12)',
                                        color: 'var(--color-accent)',
                                        border: '1px solid rgba(107,142,35,0.2)',
                                    }}
                                >
                                    {group.icon}
                                </span>
                                <h3 className="font-semibold text-base" style={{ color: 'var(--color-text)' }}>
                                    {group.label}
                                </h3>
                            </div>

                            {/* Skill badges */}
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center px-3 py-1 rounded text-xs font-medium transition-all duration-200 cursor-default"
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
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] gap-6 pr-6" aria-hidden="true">
                    {[...skillGroups, ...skillGroups, ...skillGroups, ...skillGroups].map((group, i) => (
                        <div
                            key={`track2-${group.id}-${i}`}
                            className="glass-card p-6 w-[320px] md:w-[380px] shrink-0"
                        >
                            {/* Group header */}
                            <div className="flex items-center gap-3 mb-5">
                                <span
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-bold flex-shrink-0"
                                    style={{
                                        background: 'rgba(107,142,35,0.12)',
                                        color: 'var(--color-accent)',
                                        border: '1px solid rgba(107,142,35,0.2)',
                                    }}
                                >
                                    {group.icon}
                                </span>
                                <h3 className="font-semibold text-base" style={{ color: 'var(--color-text)' }}>
                                    {group.label}
                                </h3>
                            </div>

                            {/* Skill badges */}
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center px-3 py-1 rounded text-xs font-medium transition-all duration-200 cursor-default"
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
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
