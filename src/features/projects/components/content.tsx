'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import SectionParallax from '@/components/shared/parallax/section-parallax';
import type { Project } from '@/data/projects';

import { containerVariants } from '../constants';
import ProjectCard from './card';
import ProjectsHeader from './header';

type ProjectsContentProps = {
  projects: Project[];
};

const ProjectsContent = ({ projects }: ProjectsContentProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="section-container">
        <ProjectsHeader isInView={isInView} />
        <SectionParallax speed={0.4} direction="down">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
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

export default ProjectsContent;
