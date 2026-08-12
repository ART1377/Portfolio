'use client';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';

import SectionHeader from '@/components/shared/section-header';

type AboutHeaderProps = {
  description: string[];
  isInView: boolean;
};

const AboutHeader = ({ description, isInView }: AboutHeaderProps) => {
  const t = useTranslations('about');

  return (
    <motion.div
      className="mb-14 text-center"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delayChildren: 0.25, staggerChildren: 0.15 },
        },
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div
        className="text-muted-foreground inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-1 text-xs shadow-sm backdrop-blur"
        variants={{
          hidden: { y: 12, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
      >
        <span className="bg-primary mb-0.5 h-1.5 w-1.5 animate-ping rounded-full shadow-[0_0_12px_2px_rgba(52,211,153,.65)]" />
        {t('openToCollaboration')}
      </motion.div>

      <SectionHeader title={t('title')} />

      <motion.div
        className="text-muted-foreground mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed md:text-lg"
        variants={{
          hidden: { y: 24, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }}
      >
        {description.slice(0, 1).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutHeader;
