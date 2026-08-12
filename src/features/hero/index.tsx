import type { Locale } from '@/i18n/routing';
import { profileData } from '@/data/profile';
import HeroContent from './components/content';

type HeroProps = {
  locale: Locale;
};

const Hero = ({ locale }: HeroProps) => {
  const hero = profileData[locale];

  return <HeroContent hero={hero} />;
};

export default Hero;