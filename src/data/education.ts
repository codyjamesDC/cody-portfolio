export interface Honor {
  label: string;
  description: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  expectedGrad: string;
  honors: Honor[];
  relevantCoursework?: string[];
}

export const education: EducationEntry[] = [
  {
    id: 'uplb',
    institution: 'University of the Philippines Los Baños',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    period: 'Aug 2024 – Jun 2028',
    expectedGrad: 'Jun 2028 (Expected)',
    honors: [
      {
        label: '3× Honor Roll',
        description: 'General Weighted Average above 2.0',
      },
      {
        label: '1× University Scholar',
        description: 'General Weighted Average above 1.45',
      },
    ],
    relevantCoursework: [
      'Data Structures & Algorithms',
      'Human-Computer Interaction',
      'Software Engineering',
      'Database Management',
      'Computer Networks',
    ],
  },
];
