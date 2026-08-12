export type HeroData = {
  name: string;
  initials: string;
  bio: string;
  roles: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export const profileData: Record<'en' | 'fa', HeroData> = {
  en: {
    name: 'John Doe',
    initials: 'JD',
    bio: 'Frontend Developer crafting modern web experiences.',
    roles: ['React Developer', 'Next.js Expert', 'UI/UX Enthusiast'],
    socials: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'john@example.com',
    },
  },
  fa: {
    name: 'جان دو',
    initials: 'ج',
    bio: 'توسعه‌دهنده فرانت‌اند و طراح تجربه کاربری.',
    roles: ['توسعه‌دهنده React', 'متخصص Next.js', 'علاقه‌مند به UI/UX'],
    socials: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'john@example.com',
    },
  },
};
