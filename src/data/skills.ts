export type Skill = {
  name: string;
  level: number; // percentage
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillsData: Record<'en' | 'fa', SkillCategory[]> = {
  en: [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'REST API', level: 75 },
        { name: 'GraphQL', level: 60 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 55 },
        { name: 'Figma', level: 70 },
        { name: 'Vite', level: 80 },
      ],
    },
  ],
  fa: [
    {
      title: 'فرانت‌اند',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      title: 'بک‌اند',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'REST API', level: 75 },
        { name: 'GraphQL', level: 60 },
      ],
    },
    {
      title: 'ابزارها',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 55 },
        { name: 'Figma', level: 70 },
        { name: 'Vite', level: 80 },
      ],
    },
  ],
};
