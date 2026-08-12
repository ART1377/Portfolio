import { contactData } from '@/data/contact';
import type { Locale } from '@/i18n/routing';

import ContactContent from './components/content';

type ContactProps = {
  locale: Locale;
};

const Contact = ({ locale }: ContactProps) => {
  const data = contactData[locale];

  return <ContactContent contactInfoData={data} />;
};

export default Contact;
