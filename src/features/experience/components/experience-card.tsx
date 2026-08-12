'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Experience } from '@/data/experience';

type ExperienceCardProps = {
  exp: Experience;
};

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
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
    <motion.div className="group perspective-1000">
      <Card
        className="relative overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <CardHeader className="pb-2! md:pb-0!">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{exp.title}</CardTitle>
              <CardDescription className="text-primary mt-1 text-lg font-medium">
                {exp.company}
              </CardDescription>
            </div>
            <Badge variant="outline" className="min-w-fit">
              {exp.period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies?.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
