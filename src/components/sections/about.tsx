'use client';
import {
  BookOpen,
  Heart,
  Lightbulb,
  Sprout,
  UserCheck,
  Globe,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
  {
    title: 'Biblical Teaching',
    icon: BookOpen,
    description: 'Grounded in biblically-sound teaching to build a strong foundation for your faith.',
  },
  {
    title: 'Prophetic Insight',
    icon: Lightbulb,
    description: 'Receive timely prophetic insight to help you navigate the seasons of your life with clarity.',
  },
  {
    title: 'Heartfelt Prayer',
    icon: Heart,
    description: 'Experience the power of heartfelt prayer for breakthrough, healing, and restoration.',
  },
  {
    title: 'Divine Prosperity',
    icon: Sprout,
    description: 'Learn to walk in the fullness of your God-given identity and prosper in every area.',
  },
  {
    title: 'Walk in Your Calling',
    icon: UserCheck,
    description: 'Be empowered to discover and step into your unique, God-given purpose and calling.',
  },
  {
    title: 'Global Community',
    icon: Globe,
    description: 'Connect with a global community of believers growing and pursuing God together.',
  },
];

export function About() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold text-primary">
            Our Calling & Core Beliefs
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
            To empower believers to walk in the fullness of their God-given identity and prosper in every area of their lives through biblically-sound teaching, prophetic insight, and heartfelt prayer.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-border/40 divide-dashed border border-dashed border-border/40 sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
