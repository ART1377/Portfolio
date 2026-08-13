'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Code, FolderGit2, Home, Mail, Menu, User, X } from 'lucide-react';

import LanguageSwitcher from '@/components/shared/language-switcher';
import ThemeSwitcher from '@/components/shared/theme-switcher';
import { Button } from '@/components/ui/button';
import { useScrollFromTop } from '@/hooks/use-scroll-from-top';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollFromTop = useScrollFromTop();
  const t = useTranslations('nav');

  const navItems = [
    { id: 'home', label: t('home'), icon: Home },
    { id: 'about', label: t('about'), icon: User },
    { id: 'skills', label: t('skills'), icon: Code },
    { id: 'projects', label: t('projects'), icon: FolderGit2 },
    { id: 'experience', label: t('experiences'), icon: Briefcase },
    { id: 'contact', label: t('contact'), icon: Mail },
  ];

  // Scroll spy with IntersectionObserver
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // trigger when section is in the middle of viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navItems]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);

    setTimeout(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }, 100);
  };

  const navBackground = scrollFromTop
    ? isOpen
      ? 'border-border/50 bg-background/80 backdrop-blur-md'
      : 'border-transparent bg-transparent'
    : 'border-border/50 bg-background/80 backdrop-blur-md';

  return (
    <>
      <nav className={`fixed top-0 z-40 w-full border-b transition-colors ${navBackground}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="text-lg font-bold md:text-xl"
              aria-label={t('home')}
            >
              {t('name')}
            </button>

            {/* Desktop nav */}
            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`hover:text-primary relative text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="active-nav"
                      className="bg-primary absolute right-0 -bottom-1.5 left-0 h-0.5 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right controls (desktop) */}
            <div className="hidden items-center gap-2 md:flex">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile bottom sheet overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-background/95 flex h-full flex-col backdrop-blur-lg"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4">
                <span className="text-lg font-bold">{t('name')}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation items */}
              <div className="flex-1 overflow-y-auto px-4 pb-8">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                        activeSection === item.id ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Footer controls */}
              <div className="flex items-center gap-4 border-t p-4">
                <ThemeSwitcher placement="top" />
                <LanguageSwitcher />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
