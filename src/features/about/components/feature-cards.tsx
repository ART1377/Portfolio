'use client';

import { useMemo } from 'react';

import { motion } from 'framer-motion';
import { Code, type LucideIcon, Palette, Zap } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import type { AboutFeature } from '@/data/about';
import { useTilt } from '@/hooks/use-tilt';
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
  const { handleMouseMove, handleMouseLeave, style } = useTilt();

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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
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
