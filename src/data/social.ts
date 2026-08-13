import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/ART1377', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alireza-tahavori', icon: FaLinkedinIn },
  { name: 'Email', url: 'mailto:alirezatt705@gmail.com', icon: HiOutlineMail },
  { name: 'WhatsApp', url: 'https://wa.me/qr/WZ72FZC4ETDUD1', icon: FaWhatsapp },
  { name: 'Telegram', url: 'https://t.me/ART_1377', icon: FaTelegramPlane },
  { name: 'Phone', url: 'tel:+989193050762', icon: HiOutlinePhone },
];
