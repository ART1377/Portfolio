import { skillsData } from '@/data/skills';
import type { Locale } from '@/i18n/routing';

import SkillsContent from './components/content';

type SkillsProps = {
  locale: Locale;
};

const Skills = ({ locale }: SkillsProps) => {
  const data = skillsData[locale];

  return <SkillsContent skills={data} />;
};

export default Skills;
