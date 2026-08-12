'use client';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';

type ContactCTAProps = {
  isInView: boolean;
};

const ContactCTA = ({ isInView }: ContactCTAProps) => {
  const t = useTranslations('contact');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="transition-shadow hover:shadow-lg">
        <CardContent className="p-6">
          <h4 className="mb-2 font-semibold">{t('ctaTitle')}</h4>
          <p className="text-muted-foreground text-sm">{t('ctaDescription')}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactCTA;
