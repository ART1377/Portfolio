'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/routing';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div dir="ltr" className="bg-muted flex items-center gap-1 rounded-full p-1">
      {['en', 'fa'].map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={`h-8 min-w-10 flex-1 rounded-full px-2 text-xs font-medium transition-all ${
            locale === loc
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-pressed={locale === loc}
        >
          {loc === 'en' ? 'EN' : 'فا'}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
