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
    initials: 'AT',
    bio: 'Front-end Developer with hands-on experience building responsive, user-friendly web applications using React, Next.js, and TypeScript.',
    roles: ['React Developer', 'Next.js Developer', 'Front-end Engineer'],
    socials: {
      github: 'https://github.com/ART1377',
      linkedin: 'https://www.linkedin.com/in/alireza-tahavori',
      email: 'alirezatt705@gmail.com',
    },
  },
  fa: {
    name: 'علیرضا تهوری',
    initials: 'ع',
    bio: 'توسعه‌دهنده فرانت‌اند با تجربه عملی در ساخت برنامه‌های وب واکنش‌گرا و کاربرپسند با React، Next.js و TypeScript.',
    roles: ['توسعه‌دهنده React', 'توسعه‌دهنده Next.js', 'مهندس فرانت‌اند'],
    socials: {
      github: 'https://github.com/ART1377',
      linkedin: 'https://www.linkedin.com/in/alireza-tahavori',
      email: 'alirezatt705@gmail.com',
    },
  },
};
