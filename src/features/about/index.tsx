import { aboutData } from '@/data/about';
import type { Locale } from '@/i18n/routing';

import AboutContent from './components/content';

type AboutProps = {
  locale: Locale;
};

const About = ({ locale }: AboutProps) => {
  const data = aboutData[locale];

  return <AboutContent {...data} />;
};

export default About;
