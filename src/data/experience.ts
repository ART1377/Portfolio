export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  description: string;
};

export type Course = {
  name: string;
  org: string;
  year: string;
};

export type ExperienceData = {
  experiences: Experience[];
  education: Education[];
  courses: Course[];
};

export const experienceData: Record<'en' | 'fa', ExperienceData> = {
  en: {
    experiences: [
      {
        title: 'Front-end Developer',
        company: 'Dadeh Pardaz Novin',
        period: 'Feb 2025 – Present',
        description:
          'Worked with Next.js, TypeScript, React Query, and SWR. Applied Clean Code principles and Design Patterns. Converted Figma designs into responsive, functional code.',
        technologies: ['Next.js', 'TypeScript', 'React Query', 'SWR'],
      },
      {
        title: 'Front-end Developer',
        company: 'Manzoome Negaran',
        period: 'Oct 2023 – Oct 2024',
        description:
          'Built UIs using TailwindCSS and JavaScript, converting Figma designs. Developed travel agency websites: Nakhoda Travel and Ana Parvaz.',
        technologies: ['TailwindCSS', 'JavaScript', 'Figma'],
      },
      {
        title: 'Front-end Developer',
        company: 'Nasr Telecommunications',
        period: 'Feb 2023 – Jul 2023',
        description:
          'Working with Next.js, Bootstrap, React, and Figma. Converting Figma designs into code and building UI components.',
        technologies: ['Next.js', 'React', 'Bootstrap', 'Figma'],
      },
    ],
    education: [
      {
        degree: "Bachelor's in Computer Engineering",
        school: 'University of Tehran South',
        period: '2018 – 2022',
        description:
          'Studied computer engineering with focus on software development and web technologies.',
      },
    ],
    courses: [
      {
        name: 'Next.js & React – Complete Guide',
        org: 'Udemy',
        year: '2023',
      },
      {
        name: 'React – Complete Guide',
        org: 'Udemy',
        year: '2022',
      },
      {
        name: 'Complete JavaScript Course',
        org: 'Udemy',
        year: '2021',
      },
    ],
  },
  fa: {
    experiences: [
      {
        title: 'توسعه‌دهنده فرانت‌اند',
        company: 'شرکت داده‌پرداز نوین',
        period: 'بهمن ۱۴۰۳ – اکنون',
        description:
          'کار با Next.js، TypeScript، React Query و SWR. استفاده از اصول Clean Code و Design Patterns. تبدیل طراحی‌های Figma به کدهای واکنش‌گرا و کاربردی.',
        technologies: ['Next.js', 'TypeScript', 'React Query', 'SWR'],
      },
      {
        title: 'توسعه‌دهنده فرانت‌اند',
        company: 'شرکت منظومه‌نگاران',
        period: 'آبان ۱۴۰۲ – آبان ۱۴۰۳',
        description:
          'ساخت رابط‌های کاربری با TailwindCSS و JavaScript و تبدیل طراحی‌های Figma به کد. توسعه وب‌سایت آژانس‌های مسافرتی ناخدا تراول و آنا پرواز.',
        technologies: ['TailwindCSS', 'JavaScript', 'Figma'],
      },
      {
        title: 'توسعه‌دهنده فرانت‌اند',
        company: 'شرکت مخابرات و الکترونیک نصر',
        period: 'مرداد ۱۴۰۱ – اسفند ۱۴۰۱',
        description:
          'کار با Next.js، Bootstrap، React و Figma. تبدیل طراحی‌های Figma به کد و ساخت کامپوننت‌های رابط کاربری.',
        technologies: ['Next.js', 'React', 'Bootstrap', 'Figma'],
      },
    ],
    education: [
      {
        degree: 'کارشناسی مهندسی کامپیوتر',
        school: 'دانشگاه تهران جنوب',
        period: '۱۳۹۷ – ۱۴۰۱',
        description: 'تحصیل در رشته مهندسی کامپیوتر با تمرکز بر توسعه نرم‌افزار و فناوری‌های وب.',
      },
    ],
    courses: [
      {
        name: 'راهنمای کامل Next.js و React',
        org: 'Udemy',
        year: '۱۴۰۲',
      },
      {
        name: 'راهنمای کامل React',
        org: 'Udemy',
        year: '۱۴۰۱',
      },
      {
        name: 'دوره کامل JavaScript',
        org: 'Udemy',
        year: '۱۴۰۰',
      },
    ],
  },
};
