'use client';

import { useLocale, useTranslations } from 'next-intl';

import { motion } from 'framer-motion';

import Typewriter from '@/components/shared/typewriter';
import type { HeroData } from '@/data/profile';

import { itemVariants } from '../constants';

type HeroIntroProps = {
  hero: HeroData;
};

const HeroIntro = ({ hero }: HeroIntroProps) => {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <motion.div className="mb-8" variants={itemVariants}>
      <motion.div
        className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-4xl font-bold text-white"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {hero.initials}
      </motion.div>
      <motion.h1
        className="mb-4 text-5xl font-bold md:text-5xl lg:text-6xl"
        variants={itemVariants}
      >
        {t('intro')} <span className="text-primary">{hero.name}</span>
        {locale === 'fa' && <span> هستم </span>}
      </motion.h1>
      <motion.div className="text-muted-foreground mb-8" variants={itemVariants}>
        <Typewriter
          words={hero.roles}
          typingSpeed={100}
          deletingSpeed={50}
          pauseTime={1000}
          postDeletePause={200}
          loop
          className="text-primary text-xl font-medium md:text-2xl"
        />
      </motion.div>
      <motion.p
        className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg"
        variants={itemVariants}
      >
        {hero.bio}
      </motion.p>
    </motion.div>
  );
};

export default HeroIntro;
