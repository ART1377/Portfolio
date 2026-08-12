import { experienceData } from '@/data/experience';
import type { Locale } from '@/i18n/routing';

import ExperienceContent from './components/content';

type ExperienceProps = {
  locale: Locale;
};

const Experience = ({ locale }: ExperienceProps) => {
  const data = experienceData[locale];

  return <ExperienceContent data={data} />;
};

export default Experience;
