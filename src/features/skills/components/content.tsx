'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import SectionParallax from '@/components/parallax/section-parallax';
import type { SkillCategory } from '@/data/skills';

import { containerVariants } from '../constants';
import SkillCard from './card';
import SkillsHeader from './header';

type SkillsContentProps = {
  skills: SkillCategory[];
};

const SkillsContent = ({ skills }: SkillsContentProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="bg-muted/30 py-20" ref={ref}>
      <div className="section-container">
        <SkillsHeader isInView={isInView} />
        <SectionParallax speed={0.3}>
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {skills.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </SectionParallax>
      </div>
    </section>
  );
};

export default SkillsContent;
