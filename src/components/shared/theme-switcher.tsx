'use client';

import { useRef, useState } from 'react';

import { useTranslations } from 'next-intl';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Monitor, Moon, Palette, Settings, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useClickOutside } from '@/hooks/use-click-outside';
import { type ColorScheme, type ThemeMode, useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

const colorSchemes = [
  { id: 'blue', color: '#1e90ff' },
  { id: 'purple', color: '#8b5cf6' },
  { id: 'green', color: '#22c55e' },
  { id: 'orange', color: '#f97316' },
  { id: 'pink', color: '#ec4899' },
  { id: 'teal', color: '#14b8a6' },
  { id: 'indigo', color: '#6366f1' },
  { id: 'amber', color: '#f59e0b' },
];

type ThemeSwitcherProps = {
  placement?: 'bottom' | 'top';
};

const ThemeSwitcher = ({ placement = 'bottom' }: ThemeSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, colorScheme, setThemeMode, setThemeColorScheme } = useTheme();
  const t = useTranslations('theme');

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useClickOutside([menuRef, buttonRef], () => setIsOpen(false), isOpen);

  const modeOptions: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
    { value: 'light', label: t('options.light'), icon: Sun },
    { value: 'dark', label: t('options.dark'), icon: Moon },
    { value: 'system', label: t('options.system'), icon: Monitor },
  ];

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-10 cursor-pointer rounded-full"
        aria-label={t('title')}
      >
        <Palette className="h-4 w-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className={cn(
              // Fixed position for mobile
              'fixed left-1/2 z-50 w-[calc(100vw-2rem)] max-w-xs -translate-x-1/2',
              // Desktop: absolute relative to button
              'sm:absolute sm:right-0 sm:left-auto sm:w-72 sm:translate-x-0',
              placement === 'bottom' ? 'top-16 sm:top-12' : 'bottom-16 sm:bottom-12'
            )}
            initial={{ opacity: 0, scale: 0.9, y: placement === 'bottom' ? -10 : 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: placement === 'bottom' ? -10 : 10 }}
            transition={{ duration: 0.15 }}
          >
            <Card className="border-2 shadow-xl">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Settings className="text-primary h-4 w-4" />
                  {t('title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-5">
                {/* Mode selector */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {modeOptions.map((option) => {
                    const Icon = option.icon;
                    const isActive = mode === option.value;
                    return (
                      <Button
                        key={option.value}
                        variant={isActive ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setThemeMode(option.value)}
                        className={cn(
                          'h-auto flex-col gap-1 px-1 py-2 sm:px-2',
                          isActive ? 'cursor-default' : 'cursor-pointer'
                        )}
                      >
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="text-[10px] sm:text-xs">{option.label}</span>
                      </Button>
                    );
                  })}
                </div>

                {/* Color scheme selector */}
                <div>
                  <h3 className="mb-2 text-xs font-medium sm:mb-3 sm:text-sm">
                    {t('color_schemes')}
                  </h3>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {colorSchemes.map((scheme) => {
                      const isActive = colorScheme === scheme.id;
                      return (
                        <button
                          key={scheme.id}
                          type="button"
                          onClick={() => setThemeColorScheme(scheme.id as ColorScheme)}
                          title={t(`schemes.${scheme.id}.name`)}
                          aria-label={t(`schemes.${scheme.id}.name`)}
                          aria-pressed={isActive}
                          className={cn(
                            'group relative flex flex-col items-center gap-1 rounded-lg border p-1.5 transition-all sm:gap-1.5 sm:p-2',
                            isActive
                              ? 'border-primary bg-primary/10 shadow-sm'
                              : 'hover:border-border hover:bg-muted/50 border-transparent',
                            'cursor-pointer'
                          )}
                        >
                          <span
                            className="relative h-6 w-6 rounded-full shadow-inner transition-transform group-hover:scale-110 sm:h-8 sm:w-8"
                            style={{ backgroundColor: scheme.color }}
                          >
                            {isActive && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <Check className="h-3 w-3 text-white drop-shadow sm:h-4 sm:w-4" />
                              </motion.span>
                            )}
                          </span>
                          <span className="text-muted-foreground group-hover:text-foreground text-[8px] font-medium sm:text-[10px]">
                            {t(`schemes.${scheme.id}.name`)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
