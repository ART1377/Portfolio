'use client';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { ContactInfo } from '@/data/contact';

type ContactSocialsProps = {
  contactInfoData: ContactInfo;
  isInView: boolean;
};

const ContactSocials = ({ contactInfoData, isInView }: ContactSocialsProps) => {
  const t = useTranslations('contact');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h3 className="mb-6 text-2xl font-semibold">{t('followMeTitle')}</h3>
      <div className="flex gap-x-4">
        {[
          { icon: FaGithub, link: contactInfoData.social.github, label: 'GitHub' },
          { icon: FaLinkedinIn, link: contactInfoData.social.linkedin, label: 'LinkedIn' },
          { icon: Send, link: contactInfoData.social.telegram, label: 'Telegram' },
        ].map(({ icon: Icon, link, label }, index) => (
          <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${label}`}
            >
              <Button variant="outline" size="icon">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactSocials;
