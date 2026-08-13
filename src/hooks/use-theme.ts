'use client';

import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ColorScheme =
  'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal' | 'indigo' | 'amber';

const getStoredMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('theme-mode') as ThemeMode | null;
  return stored ?? 'system';
};

const getStoredColorScheme = (): ColorScheme => {
  if (typeof window === 'undefined') return 'blue';
  const stored = localStorage.getItem('theme-color-scheme') as ColorScheme | null;
  return stored ?? 'blue';
};

const getSystemDark = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export function useTheme() {
  // Lazy initialization – no setState in effect
  const [mode, setMode] = useState<ThemeMode>(getStoredMode);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(getStoredColorScheme);
  const [systemDark, setSystemDark] = useState<boolean>(getSystemDark);

  // Apply mode and system dark changes
  useEffect(() => {
    const root = document.documentElement;
    const isDark = mode === 'dark' || (mode === 'system' && systemDark);
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme-mode', mode);
  }, [mode, systemDark]);

  // Apply color scheme
  useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', colorScheme);
    localStorage.setItem('theme-color-scheme', colorScheme);
  }, [colorScheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
    isDark,
    setThemeMode,
    setThemeColorScheme,
    toggleTheme,
  };
}
