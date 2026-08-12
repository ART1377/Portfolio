'use client';

import { useEffect, useState } from 'react';

export function useScrollFromTop() {
  const [scrollFromTop, setScrollFromTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollFromTop(window.scrollY < 50);
    };

    handleScroll(); // initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollFromTop;
}
