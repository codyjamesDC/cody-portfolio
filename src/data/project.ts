export type ProjectTag =
    | 'All'
    | 'Hackathon'
    | 'School'
    | 'AI'
    | 'Mobile'
    | 'Fullstack'
    | 'Design';

export interface Project {
    id: string;
    title: string;
    description: string;
    bullets: string[];
    event?: string;
    period: string;
    tags: Exclude<ProjectTag, 'All'>[];
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const projectData: Project[] = [
    {
        id: 'ai-community-reporting',
        title: 'AI-Assisted Community Reporting Platform',
        description:
            'A multi-channel incident reporting system enabling residents to seamlessly report local hazards via mobile app or Telegram.',
        bullets: [
            'Developed a multi-channel incident reporting system using Svelte, Flutter and FastAPI, enabling residents to seamlessly report local hazards via mobile app or Telegram.',
            'Integrated an AI-powered triage engine to automatically classify incident types, prompt users for missing details, and streamline data collection for community issue tracking.',
        ],
        event: 'Hackfest Hackathon',
        period: 'Feb 2026 – Mar 2026',
        tags: ['Hackathon', 'AI', 'Mobile', 'Fullstack'],
        techStack: ['Svelte', 'Flutter', 'FastAPI', 'Python', 'Dart'],
    },
    {
        id: 'sms-agri-platform',
        title: 'SMS-Based Agricultural Platform',
        description:
            'An SMS-based service platform designed to streamline operations and provide accessible technological support for agricultural cooperatives.',
        bullets: [
            'Developing an SMS-based service platform designed to streamline operations and provide accessible technological support for agricultural cooperatives.',
        ],
        event: 'The Innovation Lab\nHackathon',
        period: 'Feb 2026 – Mar 2026',
        tags: ['Hackathon', 'Fullstack'],
        techStack: ['Node.js', 'SMS API', 'PostgreSQL'],
    },
    {
        id: 'hci-application',
        title: 'Integrated HCI Application',
        description:
            'A cohesive, user-centered application designed and prototyped by applying core Human-Computer Interaction principles.',
        bullets: [
            'Designing and prototyping a cohesive, user-centered application applying core Human-Computer Interaction (HCI) principles.',
        ],
        period: 'Jan 2026 – May 2026',
        tags: ['School', 'Design'],
        techStack: ['Figma', 'React', 'TypeScript', 'HCI Principles'],
    },
    {
        id: 'ai-legal-assistant',
        title: 'AI-Legal Compliance Assistant',
        description:
            'An AI-powered legal compliance assistant conceptualized and designed under strict hackathon time constraints.',
        bullets: [
            'Conceptualized and designed the core user flow for an AI-powered legal compliance assistant under strict time constraints.',
            'Collaborated with a team to develop the product pitch, focusing on the solution\'s technical feasibility and potential market impact.',
        ],
        event: 'ASES Manila Hackathon',
        period: 'Jun 2025 – Jul 2025',
        tags: ['Hackathon', 'AI', 'Design'],
        techStack: ['Figma', 'LLM APIs', 'Python'],
    },
];

export const projectTags: ProjectTag[] = [
    'All',
    'Hackathon',
    'School',
    'AI',
    'Mobile',
    'Fullstack',
    'Design',
];
