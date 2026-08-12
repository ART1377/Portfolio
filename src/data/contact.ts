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
    email: 'your.email@example.com',
    phone: '+98 912 345 6789',
    location: 'Tehran, Iran',
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      telegram: 'https://t.me/yourusername',
    },
  },
  fa: {
    email: 'your.email@example.com',
    phone: '+98 912 345 6789',
    location: 'تهران، ایران',
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      telegram: 'https://t.me/yourusername',
    },
  },
};
