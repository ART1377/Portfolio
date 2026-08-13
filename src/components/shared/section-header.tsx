'use client';

import { motion } from 'framer-motion';

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <motion.div
      className="from-foreground to-muted-foreground mt-4 bg-linear-to-b bg-clip-text pb-0.5 text-3xl font-bold tracking-tight text-transparent md:text-5xl"
      variants={{
        hidden: { y: 28, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
    >
      {title}
      <motion.div
        className="from-primary/80 via-primary/50 mx-auto mt-4 h-0.5 w-32 rounded-full bg-linear-to-r to-transparent"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
};

export default SectionHeader;
