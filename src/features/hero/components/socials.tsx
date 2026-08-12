'use client';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import type { HeroData } from '@/data/profile';

import { itemVariants } from '../constants';

type HeroSocialsProps = {
  socials: HeroData['socials'];
};

const HeroSocials = ({ socials }: HeroSocialsProps) => {
  return (
    <motion.div className="mb-12 flex justify-center gap-6" variants={itemVariants} role="list">
      <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} role="listitem">
        <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Button variant="ghost" size="icon" aria-label="GitHub">
            <FaGithub className="h-5 w-5" />
          </Button>
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }} role="listitem">
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Button variant="ghost" size="icon" aria-label="LinkedIn">
            <FaLinkedinIn className="h-5 w-5" />
          </Button>
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} role="listitem">
        <a href={`mailto:${socials.email}`} aria-label="Email">
          <Button variant="ghost" size="icon" aria-label="Email">
            <HiOutlineMail className="h-5 w-5" />
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroSocials;
