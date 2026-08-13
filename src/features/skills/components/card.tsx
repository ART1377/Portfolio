'use client';

import { motion } from 'framer-motion';
import {
  BarChart,
  BrainCircuit,
  Cloud,
  Code,
  Database,
  GitBranch,
  LayoutDashboard,
  type LucideIcon,
  Palette,
  Server,
  Settings,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import type { SkillCategory } from '@/data/skills';
import { useTilt } from '@/hooks/use-tilt';

import { cardVariants } from '../constants';

type SkillCardProps = {
  category: SkillCategory;
  index: number;
  isInView: boolean;
};

const getCategoryIcon = (title: string): LucideIcon => {
  switch (title.toLowerCase()) {
    case 'frontend':
    case 'فرانت‌اند':
      return Code;
    case 'backend':
    case 'بک‌اند':
      return Server;
    case 'cloud & devops':
      return Cloud;
    case 'data science':
      return BarChart;
    case 'tools':
    case 'ابزارها':
      return Settings;
    case 'version control':
      return GitBranch;
    case 'design':
      return Palette;
    case 'ai/ml':
      return BrainCircuit;
    case 'databases':
      return Database;
    default:
      return LayoutDashboard;
  }
};

const SkillCard = ({ category, index, isInView }: SkillCardProps) => {
  const { handleMouseMove, handleMouseLeave, style } = useTilt();
  const Icon = getCategoryIcon(category.title);

  return (
    <motion.div
      variants={cardVariants}
      className="transform transition-transform duration-300 ease-in-out hover:-translate-y-3"
      aria-label={`Skill category: ${category.title}`}
      tabIndex={0}
    >
      <Card
        className="bg-card/80 flex h-full flex-col rounded-2xl border border-transparent shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        <CardContent className="flex flex-1 flex-col p-8">
          <motion.div
            className="mb-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
          >
            <Icon className="text-primary mb-4 h-12 w-12" aria-hidden="true" />
            <h3 className="text-foreground text-3xl leading-tight font-extrabold">
              {category.title}
            </h3>
          </motion.div>

          <div className="flex-1 space-y-5" role="list" aria-label={`Skills in ${category.title}`}>
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6 + index * 0.1 + skillIndex * 0.07,
                }}
                role="listitem"
              >
                <div className="mb-1 flex items-end justify-between">
                  <span className="text-foreground text-lg font-medium">{skill.name}</span>
                  <span className="text-foreground text-base font-semibold">{skill.level}%</span>
                </div>
                <div
                  className="bg-muted-foreground/30 h-2.5 w-full overflow-hidden rounded-full"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    className="from-primary to-primary/70 h-full rounded-full bg-linear-to-r shadow-sm"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.9 + index * 0.1 + skillIndex * 0.07,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
