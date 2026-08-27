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
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'React Query', level: 85 },
      ],
    },
    {
      title: 'Backend & Full-Stack',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
        { name: 'Prisma', level: 80 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'NextAuth.js', level: 60 },
        { name: 'JWT', level: 65 },
      ],
    },
    {
      title: 'Tools & Libraries',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'Framer Motion', level: 80 },
        { name: 'React Hook Form', level: 75 },
        { name: 'Zod', level: 70 },
        { name: 'Axios', level: 80 },
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
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Redux Toolkit', level: 80 },
        { name: 'React Query', level: 75 },
      ],
    },
    {
      title: 'بک‌اند و فول‌استک',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
        { name: 'Prisma', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'NextAuth.js', level: 60 },
        { name: 'JWT', level: 65 },
        { name: 'Cloudinary', level: 55 },
      ],
    },
    {
      title: 'ابزارها و کتابخانه‌ها',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'Framer Motion', level: 80 },
        { name: 'React Hook Form', level: 75 },
        { name: 'Zod', level: 70 },
        { name: 'Axios', level: 80 },
        { name: 'SWR', level: 70 },
      ],
    },
  ],
};
