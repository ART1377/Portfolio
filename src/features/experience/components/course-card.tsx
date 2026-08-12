'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Course } from '@/data/experience';

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
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
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-medium">{course.name}</h5>
            <p className="text-muted-foreground text-sm">{course.org}</p>
          </div>
          <Badge variant="outline">{course.year}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
