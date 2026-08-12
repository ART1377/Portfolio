'use client';

import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/data/projects';

import { cardVariants } from '../constants';

type ProjectCardProps = {
  project: Project;
  index: number;
  isInView: boolean;
};

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  const t = useTranslations('projects');
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 10;
    const rx = (0.5 - py) * 10;
    setTilt({ rx, ry });
  };

  const handleLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div variants={cardVariants}>
      <Card
        className="group h-full overflow-hidden break-words transition-shadow hover:shadow-lg"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
      >
        <motion.div
          className="relative h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={`${project.title} project preview image`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="flex gap-2">
              {project.liveUrl && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="secondary"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </a>
                </motion.div>
              )}
              {project.githubUrl && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        <div className="flex h-[calc(100%-192px)] min-w-0 flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-xl break-words">{project.title}</CardTitle>
            <CardDescription className="break-words">{project.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <motion.div
              className="mb-4 flex min-w-0 flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {project.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="secondary" className="text-xs break-words">
                    <span className="font-medium">{tech}</span>
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex min-w-0 gap-2">
              {project.liveUrl && (
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full min-w-0">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('buttons.liveDemo')}
                    </Button>
                  </a>
                </motion.div>
              )}
              {project.githubUrl && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </a>
                </motion.div>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
