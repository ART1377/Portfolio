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
      'Front-end developer with hands-on experience building responsive, user-friendly web applications. Skilled in modern frameworks and best practices, with a strong passion for creating clean, efficient code.',
      'Eager to keep learning, adapt to new technologies, and contribute to building impactful products as part of your team.',
      'I specialize in React, Next.js, and TypeScript, with experience in full-stack technologies like Node.js and Prisma.',
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
      'Git',
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
      'توسعه‌دهنده فرانت‌اند با تجربه عملی در ساخت برنامه‌های وب واکنش‌گرا و کاربرپسند. مسلط به فریم‌ورک‌های مدرن و بهترین شیوه‌ها، با علاقه‌مندی به نوشتن کد تمیز و بهینه.',
      'مشتاق به یادگیری مداوم، تسلط بر تکنولوژی‌های جدید و آماده همکاری در ساخت محصولات باکیفیت به عنوان عضوی از تیم.',
      'متخصص در React، Next.js و TypeScript با تجربه در تکنولوژی‌های فول‌استک مانند Node.js و Prisma.',
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
      'Git',
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
