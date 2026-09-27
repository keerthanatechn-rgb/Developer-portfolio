export interface TimelineEntry {
  id: string;
  type: 'education' | 'internship' | 'certification' | 'achievement';
  title: string;
  organization: string;
  period: string;
  description: string;
}

// Replace with your own history. Rendered oldest-to-newest is not assumed —
// list in the order you want it displayed (usually most recent first).
export const experience: TimelineEntry[] = [
  {
    id: 'exp-1',
    type: 'education',
    title: 'B.Tech in Computer Science',
    organization: 'Your University',
    period: '2022 — 2026',
    description:
      'Coursework in data structures, algorithms, databases, and machine learning. Maintaining a strong academic record while building projects on the side.',
  },
  {
    id: 'exp-2',
    type: 'internship',
    title: 'Software Engineering Intern',
    organization: 'Company Name',
    period: 'Summer 2025',
    description:
      'Built and shipped features for an internal analytics dashboard, working across a React frontend and a Python backend.',
  },
  {
    id: 'exp-3',
    type: 'certification',
    title: 'Machine Learning Specialization',
    organization: 'Coursera / DeepLearning.AI',
    period: '2024',
    description:
      'Completed a hands-on specialization covering supervised learning, neural networks, and practical model deployment.',
  },
  {
    id: 'exp-4',
    type: 'achievement',
    title: 'Finalist, National Hackathon',
    organization: 'Smart India Hackathon',
    period: '2024',
    description:
      'Led a team of four to build a working prototype of the Government Scheme Discovery Platform in 36 hours.',
  },
];
