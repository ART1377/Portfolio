'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Course } from '@/data/experience';
import { useTilt } from '@/hooks/use-tilt';

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  const { handleMouseMove, handleMouseLeave, style } = useTilt();

  return (
    <Card
      className="relative overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-medium">{course.name}</h5>
            <p className="text-muted-foreground text-sm">{course.org}</p>
          </div>
          <Badge>{course.year}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
