import { projectsData } from '@/data/projects';
import type { Locale } from '@/i18n/routing';

import ProjectsContent from './components/content';

type ProjectsProps = {
  locale: Locale;
};

const Projects = ({ locale }: ProjectsProps) => {
  const data = projectsData[locale];

  return <ProjectsContent projects={data} />;
};

export default Projects;
