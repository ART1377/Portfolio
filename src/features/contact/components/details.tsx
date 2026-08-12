'use client';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

import type { ContactInfo } from '@/data/contact';

import { containerVariants, itemVariants } from '../constants';

type ContactDetailsProps = {
  contactInfoData: ContactInfo;
  isInView: boolean;
};

const ContactDetails = ({ contactInfoData, isInView }: ContactDetailsProps) => {
  const t = useTranslations('contact');

  return (
    <div>
      <h3 className="mb-6 text-2xl font-semibold">{t('contactInfoTitle')}</h3>
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {[
          { icon: Mail, text: contactInfoData.email },
          { icon: Phone, text: contactInfoData.phone },
          { icon: MapPin, text: contactInfoData.location },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-x-3"
            variants={itemVariants}
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <item.icon className="text-primary h-5 w-5" />
            <span>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactDetails;
