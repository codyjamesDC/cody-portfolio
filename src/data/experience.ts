export interface ExperienceRole {
  title: string;
  period: string;
  bullets: string[];
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  period: string;
  roles: ExperienceRole[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'uplb-css',
    organization: 'UPLB Computer Science Society',
    period: 'Sep 2024 – Present',
    roles: [
      {
        title: 'UI/UX Lead, Development Team',
        period: 'June 2026 – Present',
        bullets: [
          'Directed the end-to-end UI/UX design lifecycle by establishing scalable design systems, mentoring a design team, and collaborating directly with software engineers to deliver intuitive, user-centric applications.',
        ],
      },
      {
        title: 'External Committee Member',
        period: 'Aug 2025 – Present',
        bullets: [
          'Responsible for building and maintaining strategic partnerships with tech companies, external organizations, and other universities to expand the society\'s network.',
        ],
      },
      {
        title: 'Code Wars Head, Computer Science Week',
        period: 'Aug 2025 – Feb 2026',
        bullets: [
          'Spearheaded the end-to-end planning and execution of Code Wars 2026, overseeing event logistics, scheduling, committee coordination, and app development.',
        ],
      },
      {
        title: 'Project Committee Member',
        period: 'Jan 2025 – May 2026',
        bullets: [
          'Collaborated in the conceptualization, planning, and execution of diverse tech-focused projects and capacity-building initiatives for the student body.',
        ],
      },
      {
        title: 'Web Design Committee Member, Computer Science Week',
        period: 'Sep 2024 – Mar 2025',
        bullets: [
          'Coordinated the end-to-end logistics of the competition, managing participant registration, submission platforms, and real-time technical support.',
        ],
      },
      {
        title: 'MicroCOSSm Committee Member',
        period: 'Sep 2024 – Dec 2024',
        bullets: [
          'Documented events through media coverage and published materials for post-event documentation on the official Facebook page.',
        ],
      },
    ],
  },
  {
    id: 'uplb-chess',
    organization: 'UPLB Chess Varsity',
    period: 'Apr 2025 – July 2026',
    roles: [
      {
        title: 'Varsity Player',
        period: 'Apr 2025 – July 2026',
        bullets: [
          'Demonstrated discipline, time management, and teamwork while balancing athletic and academic responsibilities.',
        ],
      },
    ],
  },
];
