export type AboutFeature = {
  icon: 'Code' | 'Palette' | 'Zap';
  title: string;
  description: string;
};

export type AboutData = {
  description: string[];
  skills: string[];
  features: AboutFeature[];
};

export const aboutData: Record<'en' | 'fa', AboutData> = {
  en: {
    description: [
      'Frontend Developer with 3+ years of experience building responsive, production-ready web applications using React.js, Next.js, TypeScript, and Tailwind CSS.',
      "I focus on clean architecture, reusable components, and performance optimization. I've built full-stack platforms including a bilingual travel booking system and a project management app with real-time features.",
      'I specialize in React, Next.js, and TypeScript, with hands-on experience in full-stack tools like Node.js, Prisma, and PostgreSQL.',
    ],
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'SWR',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'REST APIs',
      'Git',
      'Framer Motion',
    ],
    features: [
      {
        icon: 'Code',
        title: 'Clean Code',
        description:
          'Applying Clean Code principles and Design Patterns to write maintainable, scalable code.',
      },
      {
        icon: 'Palette',
        title: 'UI/UX Focused',
        description:
          'Converting Figma designs into responsive, pixel-perfect, and user-friendly interfaces.',
      },
      {
        icon: 'Zap',
        title: 'Performance',
        description:
          'Optimizing applications for speed and efficiency using modern tools and best practices.',
      },
    ],
  },
  fa: {
    description: [
      'توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در ساخت برنامه‌های وب واکنش‌گرا و آماده‌ی تولید با React.js، Next.js، TypeScript و Tailwind CSS.',
      'تمرکز من روی معماری تمیز، کامپوننت‌های قابل استفاده مجدد و بهینه‌سازی عملکرد است. پلتفرم‌های فول‌استک از جمله یک سامانه رزرو سفر دوزبانه و یک اپلیکیشن مدیریت پروژه با قابلیت‌های بی‌درنگ ساخته‌ام.',
      'متخصص در React، Next.js و TypeScript، با تجربه عملی در ابزارهای فول‌استک مانند Node.js، Prisma و PostgreSQL.',
    ],
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'SWR',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'REST APIs',
      'Git',
      'Framer Motion',
    ],
    features: [
      {
        icon: 'Code',
        title: 'کد تمیز',
        description:
          'استفاده از اصول Clean Code و Design Patterns برای نوشتن کد قابل نگهداری و مقیاس‌پذیر.',
      },
      {
        icon: 'Palette',
        title: 'تمرکز بر UI/UX',
        description: 'تبدیل طراحی‌های Figma به رابط‌های واکنش‌گرا، دقیق و کاربرپسند.',
      },
      {
        icon: 'Zap',
        title: 'کارایی',
        description:
          'بهینه‌سازی برنامه‌ها برای سرعت و کارایی با استفاده از ابزارها و بهترین شیوه‌های مدرن.',
      },
    ],
  },
};
