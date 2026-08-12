export type Project = {
  title: string;
  description: string;
  image: string; // path to image in /public or external URL
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projectsData: Record<'en' | 'fa', Project[]> = {
  en: [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce website with cart, checkout, and payment integration.',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task manager with real-time updates and team workspaces.',
      image: '/images/projects/taskapp.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/taskapp',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio with smooth animations and multilingual support.',
      image: '/images/projects/portfolio.jpg',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
    },
  ],
  fa: [
    {
      title: 'پلتفرم فروشگاهی',
      description: 'وب‌سایت فروشگاهی مدرن با سبد خرید، تسویه حساب و درگاه پرداخت.',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
    },
    {
      title: 'اپلیکیشن مدیریت وظایف',
      description: 'مدیریت وظایف تیمی با به‌روزرسانی بلادرنگ و فضای کاری مشترک.',
      image: '/images/projects/taskapp.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/taskapp',
    },
    {
      title: 'وب‌سایت نمونه کار',
      description: 'نمونه کار شخصی با انیمیشن‌های نرم و پشتیبانی چند زبانه.',
      image: '/images/projects/portfolio.jpg',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
    },
  ],
};
