'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Education } from '@/data/experience';

type EducationCardProps = {
  edu: Education;
};

const EducationCard = ({ edu }: EducationCardProps) => {
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
            <CardTitle className="text-xl">{edu.degree}</CardTitle>
            <CardDescription className="text-primary mt-1 text-lg font-medium">
              {edu.school}
            </CardDescription>
          </div>
          <Badge variant="outline" className="min-w-fit">
            {edu.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{edu.description}</p>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
