'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Experience } from '@/data/experience';
import { useTilt } from '@/hooks/use-tilt';

type ExperienceCardProps = {
  exp: Experience;
};

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  const { handleMouseMove, handleMouseLeave, style } = useTilt();

  return (
    <Card
      className="relative overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <CardHeader className="pb-2! md:pb-0!">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{exp.title}</CardTitle>
            <CardDescription className="text-primary mt-1 text-lg font-medium">
              {exp.company}
            </CardDescription>
          </div>
          <Badge className="min-w-fit">
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
  );
};

export default ExperienceCard;
