import { useTranslations } from 'next-intl';

import { socialLinks } from '@/data/social';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="section-container border-border border-t">
      <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-muted-foreground text-sm">{t('copyright')}</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
