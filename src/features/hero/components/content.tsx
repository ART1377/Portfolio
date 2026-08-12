'use client';

import { motion } from 'framer-motion';

import ParallaxHero from '@/components/parallax/parallax-hero';
import type { HeroData } from '@/data/profile';

import { containerVariants } from '../constants';
import HeroActions from './actions';
import HeroIntro from './intro';
import HeroScrollArrow from './scroll-arrow';
import HeroSocials from './socials';

type HeroContentProps = {
  hero: HeroData;
};

const HeroContent = ({ hero }: HeroContentProps) => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center pt-16"
      aria-labelledby="hero-heading"
    >
      <ParallaxHero />
      <motion.div
        className="section-container relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 id="hero-heading" className="sr-only">
          Welcome to my portfolio
        </h1>
        <HeroIntro hero={hero} />
        <HeroActions />
        <HeroSocials socials={hero.socials} />
        <HeroScrollArrow />
      </motion.div>
    </section>
  );
};

export default HeroContent;
