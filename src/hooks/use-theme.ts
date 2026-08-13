'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';
type ColorScheme =
  | 'blue'
  | 'purple'
  | 'green'
  | 'orange'
  | 'pink'
  | 'teal'
  | 'indigo'
  | 'amber';

const COLOR_SCHEMES: ColorScheme[] = [
  'blue',
  'purple',
  'green',
  'orange',
  'pink',
  'teal',
  'indigo',
  'amber',
];

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('blue');
  const [systemDark, setSystemDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load saved preferences on mount
  useEffect(() => {
    const storedMode = localStorage.getItem('theme-mode') as ThemeMode | null;
    const storedScheme = localStorage.getItem('theme-color-scheme') as ColorScheme | null;
    if (storedMode) setMode(storedMode);
    if (storedScheme) setColorScheme(storedScheme);
    setSystemDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    setMounted(true);
  }, []);

  // Apply mode: set .dark class on <html>
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const isDark = mode === 'dark' || (mode === 'system' && systemDark);
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme-mode', mode);
  }, [mode, systemDark, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  // Apply color scheme: set data-color-scheme attribute
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-color-scheme', colorScheme);
    localStorage.setItem('theme-color-scheme', colorScheme);
  }, [colorScheme, mounted]);

  const setThemeMode = (newMode: ThemeMode) => setMode(newMode);
  const setThemeColorScheme = (newScheme: ColorScheme) => setColorScheme(newScheme);

  const toggleTheme = () => {
    const isDark = mode === 'dark' || (mode === 'system' && systemDark);
    setMode(isDark ? 'light' : 'dark');
  };

  const isDark = mode === 'dark' || (mode === 'system' && systemDark);

  return {
    mode,
    colorScheme,
    mounted,
    isDark,
    setThemeMode,
    setThemeColorScheme,
    toggleTheme,
  };
}