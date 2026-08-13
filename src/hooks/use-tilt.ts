'use client';

import { useState } from 'react';

type TiltState = {
  rx: number;
  ry: number;
  transform: string;
};

export function useTilt(maxRotation = 10) {
  const [tilt, setTilt] = useState<TiltState>({
    rx: 0,
    ry: 0,
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * maxRotation;
    const rx = (0.5 - py) * maxRotation;
    const translate = `${(px - 0.5) * 12}px, ${(py - 0.5) * 12}px, 0`;
    setTilt({
      rx,
      ry,
      transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${translate})`,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rx: 0,
      ry: 0,
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    });
  };

  return {
    tilt,
    handleMouseMove,
    handleMouseLeave,
    style: {
      transform: tilt.transform,
      transformStyle: 'preserve-3d' as const,
      transition: 'transform 0.15s ease-out',
    },
  };
}
