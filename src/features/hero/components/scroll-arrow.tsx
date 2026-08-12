'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { itemVariants } from '../constants';

const HeroScrollArrow = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      variants={itemVariants}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToAbout}
        className="animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </Button>
    </motion.div>
  );
};

export default HeroScrollArrow;
