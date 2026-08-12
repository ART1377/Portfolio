'use client';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { itemVariants } from '../constants';
import DownloadResumeButton from './download-resume-button';

const HeroActions = () => {
  const t = useTranslations('hero');
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
      variants={itemVariants}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <DownloadResumeButton />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button onClick={scrollToContact} variant="outline" size="lg">
          <Mail className="mr-2" />
          {t('getInTouch')}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroActions;
