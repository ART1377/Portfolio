'use client';

import { useRef } from 'react';

import { useInView } from 'framer-motion';

import type { ContactInfo } from '@/data/contact';

import ContactCTA from './cta';
import ContactDetails from './details';
import ContactForm from './form';
import ContactHeader from './header';
import ContactSocials from './socials';

type ContactContentProps = {
  contactInfoData: ContactInfo;
};

const ContactContent = ({ contactInfoData }: ContactContentProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="section-container">
        <ContactHeader isInView={isInView} />

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm isInView={isInView} />
          <div className="space-y-8">
            <ContactDetails contactInfoData={contactInfoData} isInView={isInView} />
            <ContactSocials contactInfoData={contactInfoData} isInView={isInView} />
            <ContactCTA isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
