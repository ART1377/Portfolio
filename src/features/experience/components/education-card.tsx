'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Education } from '@/data/experience';
import { useTilt } from '@/hooks/use-tilt';

type EducationCardProps = {
  edu: Education;
};

const EducationCard = ({ edu }: EducationCardProps) => {
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
            <CardTitle className="text-xl">{edu.degree}</CardTitle>
            <CardDescription className="text-primary mt-1 text-lg font-medium">
              {edu.school}
            </CardDescription>
          </div>
          <Badge className="min-w-fit">
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
