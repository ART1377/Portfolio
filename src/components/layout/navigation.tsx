'use client';

import { useRef, useState } from 'react';

import { useTranslations } from 'next-intl';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import LanguageSwitcher from '@/components/shared/language-switcher';
import ThemeToggle from '@/components/shared/theme-toggle';
import { Button } from '@/components/ui/button';
import { useClickOutside } from '@/hooks/use-click-outside';
import { useScrollFromTop } from '@/hooks/use-scroll-from-top';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollFromTop = useScrollFromTop();
  const t = useTranslations('nav');

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  useClickOutside([mobileMenuRef, toggleButtonRef], () => setIsOpen(false), isOpen);

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'skills', label: t('skills') },
    { id: 'projects', label: t('projects') },
    { id: 'experience', label: t('experiences') },
    { id: 'contact', label: t('contact') },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);

    // Wait for menu to close before scrolling
    setTimeout(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }, 100);
  };

  // Background logic:
  // - If scrolled: always show background on all sizes.
  // - If at top and menu open: show background on mobile only (desktop stays transparent).
  // - If at top and menu closed: transparent on all sizes.
  const navBackground = scrollFromTop
    ? isOpen
      ? 'border-border/50 bg-background/80 backdrop-blur-md md:border-transparent md:bg-transparent md:backdrop-blur-none'
      : 'border-transparent bg-transparent'
    : 'border-border/50 bg-background/80 backdrop-blur-md';

  return (
    <nav className={`fixed top-0 z-50 w-full border-b transition-colors ${navBackground}`}>
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

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              ref={toggleButtonRef}
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-border/50 flex flex-col gap-1 border-t py-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`hover:bg-muted rounded-lg px-4 py-3 text-start text-base font-medium transition-colors ${
                      activeSection === item.id ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
