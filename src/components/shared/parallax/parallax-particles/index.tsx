'use client';

import { useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
};

const generateParticles = (): Particle[] =>
  Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.3 + 0.1,
    delay: Math.random() * 5,
  }));

const ParallaxParticles = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [particles] = useState(() => {
    if (typeof window === 'undefined') return [];
    return generateParticles();
  });

  if (particles.length === 0) return null;

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="bg-primary/20 absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxParticles;
