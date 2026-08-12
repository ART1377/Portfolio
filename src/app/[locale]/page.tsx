import { setRequestLocale } from 'next-intl/server';

import About from '@/features/about';
import Contact from '@/features/contact';
import Experience from '@/features/experience';
import Hero from '@/features/hero';
import Projects from '@/features/projects';
import Skills from '@/features/skills';
import type { Locale } from '@/i18n/routing';

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = locale as Locale;

  return (
    <main>
      <Hero locale={currentLocale} />
      <About locale={currentLocale} />
      <Experience locale={currentLocale} />
      <Projects locale={currentLocale} />
      <Skills locale={currentLocale} />
      <Contact locale={currentLocale} />

      {/* Other sections will be added here */}
    </main>
  );
};

export default HomePage;
