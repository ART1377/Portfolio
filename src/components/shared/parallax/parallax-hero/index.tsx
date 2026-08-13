'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-linear-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
        style={{ y: y1, opacity, scale }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-linear-to-br from-pink-600/10 to-red-600/10 blur-3xl"
        style={{ y: y2, opacity }}
      />
      <motion.div
        className="bg-primary/30 absolute top-20 left-20 h-2 w-2 rounded-full"
        style={{ y: y3 }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-primary/40 absolute top-40 right-32 h-1 w-1 rounded-full"
        style={{ y: y1 }}
        animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="bg-primary/20 absolute bottom-32 left-1/3 h-3 w-3 rounded-full"
        style={{ y: y2 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 2 }}
      />
      <FloatingLines />
    </div>
  );
};

const FloatingLines = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.3, 0.1]);

  return (
    <>
      <motion.div
        className="via-primary/10 absolute top-0 left-1/5 h-screen w-px bg-linear-to-b from-transparent to-transparent"
        style={{ y: y1, opacity }}
      />
      <motion.div
        className="via-primary/5 absolute top-0 right-1/4 h-screen w-px bg-linear-to-b from-transparent to-transparent"
        style={{ y: y2, opacity }}
      />
    </>
  );
};

export default ParallaxHero;
