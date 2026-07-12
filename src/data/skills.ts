export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'C', 'HTML', 'CSS'],
  },
  {
    id: 'frontend-mobile',
    label: 'Frontend & Mobile',
    icon: '⬡',
    skills: ['React', 'Next.js', 'Svelte', 'Tailwind CSS', 'Flutter'],
  },
  {
    id: 'backend-database',
    label: 'Backend & Database',
    icon: '⌗',
    skills: ['Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Google Script'],
  },
  {
    id: 'tools',
    label: 'Tools & Tech',
    icon: '⚙',
    skills: ['Git', 'LLM APIs', 'AI Integration', 'Linux'],
  },
  {
    id: 'design',
    label: 'Design & HCI',
    icon: '◈',
    skills: ['UI/UX Design', 'Design Systems', 'Rapid Prototyping', 'Wireframing', 'Figma Motion'],
  },
  {
    id: 'media',
    label: 'Video & Media',
    icon: '▶',
    skills: ['CapCut', 'Canva'],
  },
];
