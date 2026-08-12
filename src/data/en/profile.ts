import { Profile } from '../types';

export const profile: Profile = {
  name: 'Alex Johnson',
  title: 'Creative Frontend Developer',
  bio: `I craft beautiful, performant web experiences with modern technologies. 
        With a passion for clean code and stunning design, I transform complex 
        problems into elegant solutions. When I'm not coding, you'll find me 
        exploring new tech or contributing to open-source projects.`,
  shortBio: 'Frontend developer passionate about creating exceptional digital experiences.',
  avatar: '/images/avatar.jpg',
  location: 'San Francisco, CA',
  yearsOfExperience: 5,
  completedProjects: 50,
  happyClients: 30,
};

export const skills = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Next.js', level: 92, category: 'Framework' },
  { name: 'Tailwind CSS', level: 95, category: 'Styling' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Database' },
  { name: 'Figma', level: 85, category: 'Design' },
  { name: 'Git', level: 90, category: 'Tools' },
];
