import { Contact, SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
    username: '@yourusername',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
    username: 'Your Name',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
    username: '@yourusername',
  },
];

export const contact: Contact = {
  email: 'hello@alexjohnson.dev',
  phone: '+1 (555) 123-4567',
  whatsapp: 'https://wa.me/15551234567',
  telegram: 'https://t.me/yourusername',
};
