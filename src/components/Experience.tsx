import { useEffect, useRef } from 'react';
import { experienceData } from '../data/experience.ts';

export function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll('.reveal');
        items?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-12 relative"
            aria-label="Work experience"
        >
            {/* Subtle background gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 50% 40% at 0% 50%, rgba(121,85,72,0.07) 0%, transparent 60%)',
                }}
                aria-hidden="true"
            />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="reveal mb-16">
                    <p className="section-label">Experience</p>
                    <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                        Where I've{' '}
                        <span className="gradient-text">Contributed</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="flex flex-col gap-16">
                    {experienceData.map((org, orgIdx) => (
                        <div key={org.id} className="reveal" style={{ transitionDelay: `${orgIdx * 0.1}s` }}>
                            {/* Org header */}
                            <div className="flex items-start gap-4 mb-8">
                                {/* Org dot */}
                                <div className="flex flex-col items-center pt-1 flex-shrink-0">
                                    <div
                                        className="w-4 h-4 rounded-full flex-shrink-0"
                                        style={{
                                            background: 'var(--color-accent)',
                                            boxShadow: '0 0 12px rgba(107,142,35,0.5)',
                                        }}
                                    />
                                    {/* Vertical line extending down */}
                                    <div
                                        className="w-px flex-1 mt-2"
                                        style={{
                                            background: 'linear-gradient(to bottom, var(--color-accent-dim), transparent)',
                                            minHeight: '2rem',
                                        }}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                                        {org.organization}
                                    </h3>
                                    <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-dim)' }}>
                                        {org.period}
                                    </p>
                                </div>
                            </div>

                            {/* Roles */}
                            <div className="ml-8 flex flex-col gap-4">
                                {org.roles.map((role, roleIdx) => (
                                    <div
                                        key={roleIdx}
                                        className="reveal glass-card p-5"
                                        style={{ transitionDelay: `${orgIdx * 0.1 + roleIdx * 0.07}s` }}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                                            <h4 className="font-semibold text-base" style={{ color: 'var(--color-text)' }}>
                                                {role.title}
                                            </h4>
                                            <span
                                                className="text-xs font-style: italic font-medium px-2.5 py-1 rounded-full flex-shrink-0"
                                                style={{
                                                    color: 'var(--color-accent)'
                                                }}
                                            >
                                                {role.period}
                                            </span>
                                        </div>
                                        <ul className="flex flex-col gap-2">
                                            {role.bullets.map((bullet, bIdx) => (
                                                <li
                                                    key={bIdx}
                                                    className="flex gap-2.5 text-sm leading-relaxed"
                                                    style={{ color: 'var(--color-text-dim)' }}
                                                >
                                                    <span
                                                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                        style={{ background: 'var(--color-accent-dim)' }}
                                                        aria-hidden="true"
                                                    />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
