import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: FaLinkedinIn },
  { name: 'Email', url: 'mailto:your@email.com', icon: HiOutlineMail },
  { name: 'WhatsApp', url: 'https://wa.me/1234567890', icon: FaWhatsapp },
  { name: 'Telegram', url: 'https://t.me/yourusername', icon: FaTelegramPlane },
  { name: 'Phone', url: 'tel:+1234567890', icon: HiOutlinePhone },
];
