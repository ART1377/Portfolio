'use client';

import { useRef } from 'react';

import { useInView } from 'framer-motion';

import { ParallaxContainer } from '@/components/shared/parallax/section-parallax';

import AboutFeatureCards from './feature-cards';
import AboutHeader from './header';
import AboutTextBlock from './text-block';

type AboutContentProps = {
  description: string[];
  skills: string[];
  features: {
    icon: 'Code' | 'Palette' | 'Zap';
    title: string;
    description: string;
  }[];
};

const AboutContent = ({ description, skills, features }: AboutContentProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });

  return (
    <section id="about" ref={sectionRef} aria-labelledby="about-heading">
      <ParallaxContainer>
        <div className="section-container relative z-10">
          <div className="mx-auto w-full">
            <h2 id="about-heading" className="sr-only">
              About Me
            </h2>
            <AboutHeader description={description} isInView={isInView} />
            <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
              <AboutTextBlock description={description} skills={skills} isInView={isInView} />
              <AboutFeatureCards features={features} isInView={isInView} />
            </div>
          </div>
        </div>
      </ParallaxContainer>
    </section>
  );
};

export default AboutContent;
