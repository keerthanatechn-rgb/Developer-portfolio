export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  accentLetter: string; // used for the placeholder preview tile
}

// Replace this array with your own projects.
// accentLetter is shown large on the preview tile when no image is used.
export const projects: Project[] = [
  {
    id: 'ai-student-assistant',
    name: 'AI-Powered Student Assistant',
    description:
      'A conversational assistant that helps students plan study schedules, summarize lecture notes, and answer coursework questions using an LLM-backed API.',
    tags: ['React', 'Python', 'OpenAI API', 'FastAPI'],
    githubUrl: 'https://github.com/yourusername/ai-student-assistant',
    liveUrl: 'https://your-demo-link.com',
    accentLetter: 'A',
  },
  {
    id: 'household-maintenance',
    name: 'Smart Household Maintenance Reminder',
    description:
      'A web app that tracks appliances and chores, predicts maintenance windows, and sends timely reminders so nothing in the house gets forgotten.',
    tags: ['React', 'Node.js', 'MongoDB', 'Cron'],
    githubUrl: 'https://github.com/yourusername/household-maintenance',
    liveUrl: 'https://your-demo-link.com',
    accentLetter: 'H',
  },
  {
    id: 'diabetes-prediction',
    name: 'Diabetes Prediction & Management',
    description:
      'A machine learning tool that estimates diabetes risk from health metrics and offers a dashboard for tracking glucose trends over time.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Flask'],
    githubUrl: 'https://github.com/yourusername/diabetes-prediction',
    accentLetter: 'D',
  },
  {
    id: 'govt-scheme-discovery',
    name: 'Government Scheme Discovery Platform',
    description:
      'A platform that matches citizens with eligible government welfare schemes based on a short guided questionnaire, in multiple languages.',
    tags: ['React', 'Java', 'Spring Boot', 'SQL'],
    githubUrl: 'https://github.com/yourusername/scheme-discovery',
    liveUrl: 'https://your-demo-link.com',
    accentLetter: 'G',
  },
];
