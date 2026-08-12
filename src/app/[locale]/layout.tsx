import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Toaster } from 'sonner';

import Footer from '@/components/layout/footer';
import Navigation from '@/components/layout/navigation';
import ParallaxBackground from '@/components/parallax/parallax-background';
import Providers from '@/components/shared/providers';
import ScrollProgress from '@/components/shared/scroll-progress';
import ScrollToTop from '@/components/shared/scroll-to-top';
import { routing } from '@/i18n/routing';

import '../../styles/globals.css';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<LocaleLayoutProps, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dir = locale === 'fa' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Providers>
            <ParallaxBackground />
            <ScrollProgress />
            <ScrollToTop />
            <Navigation />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
            <Toaster position="top-center" richColors />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
