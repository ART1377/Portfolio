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
        title: 'Frontend Developer',
        company: 'TechCorp',
        period: '2023 – Present',
        description:
          'Building modern web applications with React, Next.js, and TypeScript. Led migration to App Router and improved performance scores.',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'Junior Web Developer',
        company: 'WebStudio',
        period: '2021 – 2023',
        description:
          'Developed responsive websites and e-commerce platforms. Collaborated with design team to implement UI/UX improvements.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Computer Science',
        school: 'University of Technology',
        period: '2017 – 2021',
        description: 'Focused on software engineering, algorithms, and web technologies.',
      },
    ],
    courses: [
      {
        name: 'Advanced React and Next.js',
        org: 'Frontend Masters',
        year: '2022',
      },
      {
        name: 'TypeScript for Professionals',
        org: 'Udemy',
        year: '2021',
      },
    ],
  },
  fa: {
    experiences: [
      {
        title: 'توسعه‌دهنده فرانت‌اند',
        company: 'تک‌کورپ',
        period: '۱۴۰۲ – اکنون',
        description:
          'ساخت برنامه‌های وب مدرن با React، Next.js و TypeScript. رهبری مهاجرت به App Router و بهبود امتیازات عملکرد.',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'توسعه‌دهنده وب',
        company: 'وب‌استودیو',
        period: '۱۴۰۰ – ۱۴۰۲',
        description:
          'توسعه وب‌سایت‌های واکنش‌گرا و پلتفرم‌های فروشگاهی. همکاری با تیم طراحی برای بهبود UI/UX.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      },
    ],
    education: [
      {
        degree: 'کارشناسی علوم کامپیوتر',
        school: 'دانشگاه صنعتی',
        period: '۱۳۹۶ – ۱۴۰۰',
        description: 'تمرکز بر مهندسی نرم‌افزار، الگوریتم‌ها و فناوری‌های وب.',
      },
    ],
    courses: [
      {
        name: 'React و Next.js پیشرفته',
        org: 'Frontend Masters',
        year: '۱۴۰۱',
      },
      {
        name: 'TypeScript برای حرفه‌ای‌ها',
        org: 'Udemy',
        year: '۱۴۰۰',
      },
    ],
  },
};
