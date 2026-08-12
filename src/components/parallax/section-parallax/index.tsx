'use client';

import type React from 'react';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

type SectionParallaxProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
};

export const SectionParallax = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}: SectionParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [0, -100 * speed] : [0, 100 * speed]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export const ParallaxContainer = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-linear-to-br from-blue-500/5 to-purple-500/5 blur-3xl"
          style={{ y: y1, scale }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 h-48 w-48 rounded-full bg-linear-to-br from-pink-500/5 to-red-500/5 blur-2xl"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-linear-to-br from-green-500/5 to-blue-500/5 blur-xl"
          style={{ y: y3, rotate }}
        />
      </div>
    </div>
  );
};

export default SectionParallax;
