'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

type Dot = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

const generateDots = (): Dot[] =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

const ParallaxBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.3, 0.1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.05, 0.2, 0.2, 0.05]);

  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setDots(generateDots());
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* gradient layers */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
        style={{ y: y1, opacity: opacity1 }}
      />
      <motion.div
        className="absolute inset-0 bg-linear-to-tl from-green-500/3 via-blue-500/3 to-purple-500/3"
        style={{ y: y2, opacity: opacity2 }}
      />

      {/* floating shapes */}
      <motion.div
        className="absolute top-20 left-10 h-32 w-32 rounded-full bg-linear-to-br from-blue-400/10 to-purple-400/10 blur-xl"
        style={{ y: y1, scale: scale1 }}
      />
      <motion.div
        className="absolute top-40 right-20 h-24 w-24 rounded-lg bg-linear-to-br from-pink-400/10 to-red-400/10 blur-lg"
        style={{ y: y2, rotate: rotate1 }}
      />
      <motion.div
        className="absolute top-60 left-1/3 h-16 w-16 rounded-full bg-linear-to-br from-green-400/10 to-blue-400/10 blur-md"
        style={{ y: y3, scale: scale2 }}
      />
      <motion.div
        className="absolute right-10 bottom-40 h-40 w-40 rounded-full bg-linear-to-br from-purple-400/8 to-pink-400/8 blur-2xl"
        style={{ y: y4, opacity: opacity1 }}
      />
      <motion.div
        className="absolute bottom-60 left-20 h-20 w-20 rounded-lg bg-linear-to-br from-yellow-400/10 to-orange-400/10 blur-lg"
        style={{ y: y5, rotate: rotate2 }}
      />

      <FloatingDots dots={dots} />
      <AnimatedLines />
    </div>
  );
};

const FloatingDots = ({ dots }: { dots: Dot[] }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.1, 0.3]);

  if (dots.length === 0) return null;

  return (
    <motion.div className="absolute inset-0" style={{ y, opacity }}>
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="bg-primary/20 absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: dot.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
};

const AnimatedLines = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <motion.div
        className="via-primary/10 absolute top-0 left-1/4 h-full w-px bg-linear-to-b from-transparent to-transparent"
        style={{ y: y1 }}
      />
      <motion.div
        className="via-primary/5 absolute top-0 right-1/3 h-full w-px bg-linear-to-b from-transparent to-transparent"
        style={{ y: y2 }}
      />
    </>
  );
};

export default ParallaxBackground;
