export interface SkillCategory {
  category: string;
  items: string[];
}

// Replace with your own stack. Grouped by category for the Skills section.
export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'Three.js', 'HTML', 'CSS', 'Material UI'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Flask', 'REST APIs'],
  },
  {
    category: 'Programming',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    category: 'Database',
    items: ['SQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Vite', 'Figma'],
  },
  {
    category: 'AI / ML',
    items: ['scikit-learn', 'Pandas', 'NumPy', 'OpenAI API'],
  },
];
