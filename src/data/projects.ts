export type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  featured: boolean;
  year: number;
};

export const projectsData: Record<'en' | 'fa', Project[]> = {
  en: [
    {
      title: 'Voyage — Travel Booking Platform',
      description:
        'A bilingual travel booking platform with hotel/flight search, booking flow, admin workspace, real-time notifications, and analytics dashboard.',
      longDescription:
        'Voyage is a full-stack travel booking platform featuring hotel and flight search with URL-driven filters, complete booking flow with guest details and payment simulation, full admin workspace for managing hotels, flights, users, and bookings, real-time notifications via Pusher, business analytics dashboard with revenue tracking, Cloudinary media upload, bilingual English/Persian support with full RTL, and role-based access control.',
      image: '/images/projects/voyage-1.png',
      images: [
        '/images/projects/voyage-1.png',
        '/images/projects/voyage-2.png',
        '/images/projects/voyage-3.png',
        '/images/projects/voyage-4.png',
        '/images/projects/voyage-5.png',
        '/images/projects/voyage-6.png',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Pusher',
        'Tailwind CSS',
        'shadcn/ui',
        'React Query',
        'React Hook Form',
        'Zod',
        'Cloudinary',
      ],
      liveUrl: 'https://voyage-amber-ten.vercel.app/',
      githubUrl: 'https://github.com/ART1377/voyage-travel-booking',
      featured: true,
      year: 2026,
    },
    {
      title: 'Task Manager — Project Management',
      description:
        'A full-stack project management app with Kanban board, real-time chat, RBAC, and analytics dashboard.',
      longDescription:
        'Task Manager Pro is a comprehensive project management application featuring a drag-and-drop Kanban board, real-time chat with typing indicators and read receipts, role-based access control (Owner/Admin/Manager/Member), multi-assignee tasks with status tracking, dashboard analytics with ECharts, push notifications via Pusher + SSE, 6 color themes with dark mode, and a mobile-first responsive design. Includes demo login with pre-seeded data for instant exploration.',
      image: '/images/projects/task-manager-1.png',
      images: [
        '/images/projects/task-manager-1.png',
        '/images/projects/task-manager-2.png',
        '/images/projects/task-manager-3.png',
        '/images/projects/task-manager-4.png',
        '/images/projects/task-manager-5.png',
        '/images/projects/task-manager-6.png',
        '/images/projects/task-manager-7.png',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma ORM',
        'PostgreSQL',
        'NextAuth.js',
        'Pusher',
        'Tailwind CSS',
        'shadcn/ui',
        'React Query',
        'Framer Motion',
        'React Hook Form',
        'Zod',
      ],
      liveUrl: 'https://task-manager-seven-nine.vercel.app/dashboard',
      githubUrl: 'https://github.com/ART1377/Task-Manager',
      featured: true,
      year: 2026,
    },
    {
      title: 'Humtto City — Full-stack E-commerce',
      description: 'Designed in Figma and built full Next.js storefront & admin panel.',
      longDescription:
        'A complete e-commerce solution with product management, cart, checkout, payment integration, and a robust admin panel. Features include user authentication, role-based access, image upload with Cloudinary, and state management with Redux Toolkit.',
      image: '/images/projects/ecommerce-1.png',
      images: [
        '/images/projects/ecommerce-1.png',
        '/images/projects/ecommerce-2.png',
        '/images/projects/ecommerce-3.png',
        '/images/projects/ecommerce-4.png',
        '/images/projects/ecommerce-5.png',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Auth.js',
        'Redux Toolkit',
        'Cloudinary',
        'Prisma',
      ],
      liveUrl: 'https://fullstack-e-commerce-rosy.vercel.app/',
      githubUrl: 'https://github.com/ART1377/fullstack-e-commerce',
      figmaUrl: '',
      featured: false,
      year: 2024,
    },

    {
      title: 'Ana Parvaz - Travel Agency',
      description:
        'Mobile-first, accessible frontend for Ana Parvaz Iranian Travel Agency using Tailwind CSS and Vanilla JavaScript.',
      longDescription:
        'Built the frontend for Ana Parvaz Iranian Travel Agency using Tailwind CSS and Vanilla JavaScript. Converted Figma designs into interactive, responsive UI components and delivered production-ready interfaces under deadlines. Focused on a mobile-first and accessible experience, with close collaboration in a team environment.',
      image: '/images/projects/ana-parvaz-1.png',
      images: ['/images/projects/ana-parvaz-1.png'],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Figma'],
      liveUrl: 'https://www.ana-parvaz.ir/',
      githubUrl: '',
      featured: false,
      year: 2024,
    },
    {
      title: 'Nakhoda — Travel Agency',
      description:
        'Frontend development of a tourism website for Nakhoda Travel Agency with responsive, pixel-perfect UI.',
      longDescription:
        'Built the frontend of a tourism website for Nakhoda Travel Agency using HTML, CSS, JavaScript, and Tailwind CSS. Translated Figma designs into responsive, clean interfaces and collaborated with a team to ensure cross-browser compatibility and performance optimization. Focused on layout structure, component reusability, and pixel-perfect design.',
      image: '/images/projects/nakhoda-1.png',
      images: ['/images/projects/nakhoda-1.png'],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Figma'],
      liveUrl: 'https://nakhoda.travel/',
      githubUrl: '',
      featured: false,
      year: 2024,
    },
    {
      title: 'Portfolio — Full-stack Personal Website',
      description:
        'Building fullstack multilingual React/Next.js apps with TypeScript, TailwindCSS, Framer Motion, and Swiper.',
      longDescription:
        'A personal portfolio with multilingual support (English/Persian), dark mode, animations, and a contact form. The backend is built with Node.js and Express, using Prisma ORM and SWR for data fetching.',
      image: '/images/projects/portfolio-1.png',
      images: [
        '/images/projects/portfolio-1.png',
        '/images/projects/portfolio-2.png',
        '/images/projects/portfolio-3.png',
        '/images/projects/portfolio-4.png',
        '/images/projects/portfolio-5.png',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Shadcn',
        'SWR',
        'Node.js',
        'Express.js',
        'Prisma',
      ],
      liveUrl: 'https://alireza-tahavori1.vercel.app/',
      githubUrl: 'https://github.com/ART1377/portfolio-frontend',
      featured: false,
      year: 2025,
    },
  ],
  fa: [
    {
      title: 'ویاژ - سامانه رزرو سفر',
      description:
        'پلتفرم دوزبانه رزرو سفر با جست‌وجوی هتل و پرواز، فرایند رزرو، پنل مدیریت، اعلان‌های بی‌درنگ و داشبورد تحلیلی.',
      longDescription:
        'ویاژ یک پلتفرم فول‌استک رزرو سفر است که شامل جست‌وجو و فیلتر هتل و پرواز با فیلترهای مبتنی بر URL، فرایند کامل رزرو با اطلاعات مهمان و شبیه‌سازی پرداخت، پنل مدیریت کامل برای مدیریت هتل‌ها، پروازها، کاربران و رزروها، اعلان‌های بی‌درنگ با Pusher، داشبورد تحلیلی با ردیابی درآمد، آپلود تصویر با Cloudinary، پشتیبانی دوزبانه انگلیسی/فارسی با RTL کامل و کنترل دسترسی نقش‌محور است.',
      image: '/images/projects/voyage-1.png',
      images: [
        '/images/projects/voyage-1.png',
        '/images/projects/voyage-2.png',
        '/images/projects/voyage-3.png',
        '/images/projects/voyage-4.png',
        '/images/projects/voyage-5.png',
        '/images/projects/voyage-6.png',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Pusher',
        'Tailwind CSS',
        'shadcn/ui',
        'React Query',
        'React Hook Form',
        'Zod',
        'Cloudinary',
      ],
      liveUrl: 'https://voyage-amber-ten.vercel.app/',
      githubUrl: 'https://github.com/ART1377/voyage-travel-booking',
      featured: true,
      year: 2026,
    },
    {
      title: 'تسک منیجر — اپلیکیشن مدیریت پروژه',
      description:
        'ابزار مدیریت پروژه فول‌استک با برد کانبان، چت بی‌درنگ، کنترل سطح دسترسی و داشبورد آماری.',
      longDescription:
        'Task Manager Pro یک اپلیکیشن جامع مدیریت پروژه با برد کانبان drag & drop، چت بی‌درنگ با نمایش تایپینگ و وضعیت خواندن، کنترل سطح دسترسی (مالک/مدیر/عضو)، تسک‌های چندنفره با پیگیری وضعیت، داشبورد آماری با ECharts، اعلان‌های فوری از طریق Pusher و SSE، ۶ تم رنگی با حالت تاریک، و طراحی واکنش‌گرا موبایل-فرست است. شامل ورود دمو با داده‌های آماده برای بررسی سریع.',
      image: '/images/projects/task-manager-1.png',
      images: [
        '/images/projects/task-manager-1.png',
        '/images/projects/task-manager-2.png',
        '/images/projects/task-manager-3.png',
        '/images/projects/task-manager-4.png',
        '/images/projects/task-manager-5.png',
        '/images/projects/task-manager-6.png',
        '/images/projects/task-manager-7.png',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma ORM',
        'PostgreSQL',
        'NextAuth.js',
        'Pusher',
        'Tailwind CSS',
        'shadcn/ui',
        'React Query',
        'Framer Motion',
        'React Hook Form',
        'Zod',
      ],
      liveUrl: 'https://task-manager-seven-nine.vercel.app/dashboard',
      githubUrl: 'https://github.com/ART1377/Task-Manager',
      featured: true,
      year: 2026,
    },
    {
      title: 'هامتو سیتی — فروشگاه اینترنتی فول‌استک',
      description: 'طراحی شده در Figma و پیاده‌سازی کامل فروشگاه آنلاین و پنل ادمین با Next.js.',
      longDescription:
        'راه‌حل کامل تجارت الکترونیک با مدیریت محصولات، سبد خرید، تسویه حساب، درگاه پرداخت و پنل ادمین قدرتمند. شامل احراز هویت کاربران، کنترل دسترسی نقش‌محور، آپلود تصویر با Cloudinary و مدیریت state با Redux Toolkit.',
      image: '/images/projects/ecommerce-1.png',
      images: [
        '/images/projects/ecommerce-1.png',
        '/images/projects/ecommerce-2.png',
        '/images/projects/ecommerce-3.png',
        '/images/projects/ecommerce-4.png',
        '/images/projects/ecommerce-5.png',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Auth.js',
        'Redux Toolkit',
        'Cloudinary',
        'Prisma',
      ],
      liveUrl: 'https://fullstack-e-commerce-rosy.vercel.app/',
      githubUrl: 'https://github.com/ART1377/fullstack-e-commerce',
      figmaUrl: '',
      featured: false,
      year: 2024,
    },

    {
      title: 'آناپرواز ایرانیان - آژانس مسافرتی',
      description:
        'فرانت‌اند موبایل-فرست و دسترس‌پذیر برای آژانس مسافرتی آناپرواز ایرانیان با Tailwind CSS و جاوااسکریپت.',
      longDescription:
        'فرانت‌اند آژانس مسافرتی آناپرواز ایرانیان را با Tailwind CSS و Vanilla JavaScript ساختم. طراحی‌های Figma را به کامپوننت‌های تعاملی و واکنش‌گرا تبدیل کردم و رابط‌های آماده‌ی تولید را در بازه‌های زمانی مشخص تحویل دادم. تمرکز روی تجربه موبایل-فرست، دسترس‌پذیری و همکاری تیمی بود.',
      image: '/images/projects/ana-parvaz-1.png',
      images: ['/images/projects/ana-parvaz-1.png'],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Figma'],
      liveUrl: 'https://www.ana-parvaz.ir/',
      githubUrl: '',
      featured: false,
      year: 2024,
    },
    {
      title: 'ناخدا - آژانس مسافرتی',
      description:
        'توسعه فرانت‌اند وب‌سایت گردشگری آژانس ناخدا با رابط کاربری واکنش‌گرا و پیاده‌سازی دقیق طراحی.',
      longDescription:
        'فرانت‌اند وب‌سایت گردشگری آژانس مسافرتی ناخدا را با HTML، CSS، JavaScript و Tailwind CSS پیاده‌سازی کردم. طراحی‌های Figma را به رابط‌های تمیز و واکنش‌گرا تبدیل کردم و برای اطمینان از سازگاری بین‌مرورگری و بهینه‌سازی عملکرد با تیم همکاری داشتم. تمرکز اصلی روی ساختار چیدمان، قابلیت استفاده مجدد از کامپوننت‌ها و پیاده‌سازی دقیق طراحی بود.',
      image: '/images/projects/nakhoda-1.png',
      images: ['/images/projects/nakhoda-1.png'],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Figma'],
      liveUrl: 'https://nakhoda.travel/',
      githubUrl: '',
      featured: false,
      year: 2024,
    },
    {
      title: 'پورتفولیو — وب‌سایت شخصی فول‌استک',
      description:
        'توسعه اپلیکیشن‌های فول‌استک چندزبانه با React/Next.js، همراه با TypeScript، TailwindCSS، Framer Motion.',
      longDescription:
        'نمونه‌کار شخصی با پشتیبانی چندزبانه (انگلیسی/فارسی)، حالت تاریک، انیمیشن‌ها و فرم تماس. بک‌اند با Node.js و Express ساخته شده و از Prisma ORM و SWR برای دریافت داده استفاده می‌کند.',
      image: '/images/projects/portfolio-1.png',
      images: [
        '/images/projects/portfolio-1.png',
        '/images/projects/portfolio-2.png',
        '/images/projects/portfolio-3.png',
        '/images/projects/portfolio-4.png',
        '/images/projects/portfolio-5.png',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Shadcn',
        'SWR',
        'Node.js',
        'Express.js',
        'Prisma',
      ],
      liveUrl: 'https://alireza-tahavori1.vercel.app/',
      githubUrl: 'https://github.com/ART1377/portfolio-frontend',
      featured: false,
      year: 2025,
    },
  ],
};
