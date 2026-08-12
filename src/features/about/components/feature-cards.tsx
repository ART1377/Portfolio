'use client';

import { useMemo, useState } from 'react';

import { motion } from 'framer-motion';
import { Code, type LucideIcon, Palette, Zap } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import type { AboutFeature } from '@/data/about';
import { cn } from '@/lib/utils';

type AboutFeatureCardsProps = {
  features: AboutFeature[];
  isInView: boolean;
};

const iconMap: Record<AboutFeature['icon'], LucideIcon> = {
  Code,
  Palette,
  Zap,
};

const AboutFeatureCards = ({ features, isInView }: AboutFeatureCardsProps) => {
  return (
    <motion.div
      className="grid gap-5 md:gap-6"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {features.map((item, index) => (
        <FeatureCard key={index} feature={item} index={index} />
      ))}
    </motion.div>
  );
};

const FeatureCard = ({ feature, index }: { feature: AboutFeature; index: number }) => {
  const Icon = useMemo(() => iconMap[feature.icon], [feature.icon]);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, t: '0,0,0' });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 10;
    const rx = (0.5 - py) * 10;
    setTilt({ rx, ry, t: `${(px - 0.5) * 12}px, ${(py - 0.5) * 12}px, 0` });
  };

  const handleLeave = () => setTilt({ rx: 0, ry: 0, t: '0,0,0' });

  return (
    <motion.div
      variants={{
        hidden: { x: 0, y: 20, opacity: 0 },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: 'easeOut', delay: 0.05 * index },
        },
      }}
      className="group perspective-1000"
    >
      <Card
        className={cn('relative overflow-hidden rounded-2xl transition-shadow hover:shadow-lg')}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <CardContent className="relative p-6 md:p-7">
          <motion.div
            className="mb-4 flex items-center"
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <div className="border-primary/20 bg-primary/15 text-primary me-3 grid h-10 w-10 place-items-center rounded-xl border">
              <Icon className="h-5.5 w-5.5" />
            </div>
            <h3 className="text-foreground text-lg font-semibold md:text-xl">{feature.title}</h3>
          </motion.div>
          <p className="text-muted-foreground/90 text-sm leading-relaxed md:text-base">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutFeatureCards;
