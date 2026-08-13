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
  const currentLocale = locale as Locale;

  return (
    <main className="relative">
      <Hero locale={currentLocale} />
      <About locale={currentLocale} />
      <Skills locale={currentLocale} />
      <Experience locale={currentLocale} />
      <Projects locale={currentLocale} />
      <Contact locale={currentLocale} />
    </main>
  );
};

export default HomePage;
