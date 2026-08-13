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
    name: 'Alireza Tahavori',
    initials: 'ART',
    bio: 'Frontend Developer crafting modern web experiences with React, Next.js, and TypeScript.',
    roles: ['React Developer', 'Next.js Expert', 'UI/UX Enthusiast'],
    socials: {
      github: 'https://github.com/ART1377',
      linkedin: 'https://www.linkedin.com/in/alireza-tahavori',
      email: 'alirezatt705@gmail.com',
    },
  },
  fa: {
    name: 'علیرضا تهوری',
    initials: 'ع',
    bio: 'توسعه‌دهنده فرانت‌اند و طراح تجربه کاربری با React، Next.js و TypeScript.',
    roles: ['توسعه‌دهنده React', 'متخصص Next.js', 'علاقه‌مند به UI/UX'],
    socials: {
      github: 'https://github.com/ART1377',
      linkedin: 'https://www.linkedin.com/in/alireza-tahavori',
      email: 'alirezatt705@gmail.com',
    },
  },
};
