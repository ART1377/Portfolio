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
      'I am a passionate frontend developer with a strong focus on building modern, responsive, and performant web applications.',
      'Over the years, I have honed my skills in React, Next.js, and TypeScript, delivering high-quality user experiences that balance aesthetics and functionality.',
      'I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.',
    ],
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'REST API',
      'Git',
    ],
    features: [
      {
        icon: 'Code',
        title: 'Clean Code',
        description:
          'Writing maintainable, scalable, and self-documenting code is my top priority.',
      },
      {
        icon: 'Palette',
        title: 'UI/UX Focused',
        description: 'I create intuitive and visually appealing interfaces that delight users.',
      },
      {
        icon: 'Zap',
        title: 'Performance',
        description: 'Optimizing for speed and efficiency to ensure a smooth experience.',
      },
    ],
  },
  fa: {
    description: [
      'من یک توسعه‌دهنده فرانت‌اند پرشور هستم که بر ساخت برنامه‌های وب مدرن، واکنش‌گرا و با کارایی بالا تمرکز دارم.',
      'در طول سال‌ها، مهارت‌های خود را در React، Next.js و TypeScript تقویت کرده‌ام و تجربه‌های کاربری با کیفیتی ارائه می‌دهم که تعادل بین زیبایی و عملکرد را برقرار می‌کنند.',
      'من به نوشتن کد تمیز و قابل نگهداری اعتقاد دارم و همیشه با آخرین روندها و بهترین شیوه‌های صنعت به‌روز هستم.',
    ],
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'REST API',
      'Git',
    ],
    features: [
      {
        icon: 'Code',
        title: 'کد تمیز',
        description: 'نوشتن کد قابل نگهداری، مقیاس‌پذیر و خودمستند اولویت اصلی من است.',
      },
      {
        icon: 'Palette',
        title: 'تمرکز بر UI/UX',
        description: 'رابط‌های کاربری بصری و جذابی ایجاد می‌کنم که کاربران را خوشحال می‌کند.',
      },
      {
        icon: 'Zap',
        title: 'کارایی',
        description: 'بهینه‌سازی سرعت و کارایی برای تجربه‌ای روان و لذت‌بخش.',
      },
    ],
  },
};
