'use client';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';

import SectionHeader from '@/components/shared/section-header';

type SkillsHeaderProps = {
  isInView: boolean;
};

const SkillsHeader = ({ isInView }: SkillsHeaderProps) => {
  const t = useTranslations('skills');

  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeader title={t('title')} />
      <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-lg">{t('description')}</p>
    </motion.div>
  );
};

export default SkillsHeader;
