'use client';

import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

type ThemeToggleProps = {
  expanded?: boolean;
};

const ThemeToggle = ({ expanded = false }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('theme');

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size={expanded ? 'default' : 'icon'}
        className={expanded ? 'w-full' : 'h-9 w-9'}
      >
        <div className="bg-muted h-4 w-4 animate-pulse rounded-full" />
      </Button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant={expanded ? 'ghost' : 'outline'}
      size={expanded ? 'default' : 'icon'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={expanded ? 'w-full justify-start gap-2 rounded-lg' : 'h-10 w-10 rounded-full'}
      aria-label={isDark ? t('options.light') : t('options.dark')}
    >
      <motion.span
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex h-4 w-4 items-center justify-center"
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-blue-400" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </motion.span>
      {expanded && (
        <span className="text-sm font-medium">
          {isDark ? t('options.dark') : t('options.light')}
        </span>
      )}
    </Button>
  );
};

export default ThemeToggle;
