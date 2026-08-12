'use client';

import { useRef } from 'react';

import { useTranslations } from 'next-intl';

import { motion, useInView } from 'framer-motion';

import type { ExperienceData } from '@/data/experience';

import { cardVariants, containerVariants } from '../constants';
import CourseCard from './course-card';
import EducationCard from './education-card';
import ExperienceCard from './experience-card';
import ExperienceHeader from './header';

type ExperienceContentProps = {
  data: ExperienceData;
};

const ExperienceContent = ({ data }: ExperienceContentProps) => {
  const t = useTranslations('experience');
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="bg-muted/30 py-20" ref={ref}>
      <div className="section-container">
        <ExperienceHeader isInView={isInView} />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="mb-8 text-2xl font-semibold">{t('sections.experience')}</h3>
            <div className="space-y-6">
              {data.experiences.map((exp, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <ExperienceCard exp={exp} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Courses */}
          <div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="mb-8 text-2xl font-semibold">{t('sections.education')}</h3>
              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <EducationCard key={index} edu={edu} />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="mb-6 text-xl font-semibold">{t('sections.courses')}</h4>
              <div className="space-y-4">
                {data.courses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceContent;
