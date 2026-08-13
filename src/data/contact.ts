export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    telegram: string;
  };
};

export const contactData: Record<'en' | 'fa', ContactInfo> = {
  en: {
    email: 'alirezatt705@gmail.com',
    phone: '+98 919 305 0762',
    location: 'Tehran, Iran',
    social: {
      github: 'https://github.com/ART1377',
      linkedin: 'https://www.linkedin.com/in/alireza-tahavori',
      telegram: 'https://t.me/ART_1377',
    },
  },
  fa: {
    email: 'alirezatt705@gmail.com',
    phone: '+98 919 305 0762',
    location: 'ایران تهران',
    social: {
      github: 'https://github.com/ART1377',
      linkedin: 'https://www.linkedin.com/in/alireza-tahavori',
      telegram: 'https://t.me/ART_1377',
    },
  },
};
