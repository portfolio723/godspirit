'use client';
import {
  BookOpen,
  Heart,
  Target,
  Crown,
  UserCheck,
  Globe,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const foundationFeatures = [
  {
    title: 'Personal Calling',
    icon: Heart,
    description: 'Discover the personal story and divine calling that sparked the beginning of this ministry.',
  },
  {
    title: 'Mission & Vision',
    icon: Target,
    description: 'Our mission is to equip believers to prosper in their spiritual walk and fulfill their God-given destiny.',
  },
  {
    title: 'Biblical Teaching',
    icon: BookOpen,
    description: 'Grounded in biblically-sound teaching to build a strong foundation for your faith.',
  },
];

const focusFeatures = [
  {
    title: 'Divine Prosperity',
    icon: Crown,
    description: 'Learn to walk in the fullness of your God-given identity and prosper in every area.',
  },
  {
    title: 'Ministry Impact',
    icon: UserCheck,
    description: 'See the numbers and stories behind the lives being transformed across the globe.',
  },
  {
    title: 'Global Community',
    icon: Globe,
    description: 'Connect with a global community of believers growing and pursuing God together.',
  },
];

export function About() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 lg:py-32 bg-card">
      <div className="mx-auto w-full max-w-5xl space-y-16 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold text-primary">
            About The Ministry
          </h2>
          <p className="text-muted-foreground mt-6 text-base tracking-wide text-balance md:text-lg">
            To empower believers to walk in the fullness of their God-given identity and prosper in every area of their lives through biblically-sound teaching, prophetic insight, and heartfelt prayer.
          </p>
        </AnimatedContainer>

        <div className="space-y-16">
          <AnimatedContainer delay={0.2} className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-primary/90">Our Foundation</h3>
            <div
              className="grid grid-cols-1 divide-x divide-y divide-border/40 divide-dashed border border-dashed border-border/40 sm:grid-cols-2 md:grid-cols-3"
            >
              {foundationFeatures.map((feature, i) => (
                <FeatureCard key={i} feature={feature} />
              ))}
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.4} className="space-y-8">
             <h3 className="text-2xl md:text-3xl font-semibold text-center text-primary/90">Our Focus</h3>
            <div
              className="grid grid-cols-1 divide-x divide-y divide-border/40 divide-dashed border border-dashed border-border/40 sm:grid-cols-2 md:grid-cols-3"
            >
              {focusFeatures.map((feature, i) => (
                <FeatureCard key={i} feature={feature} />
              ))}
            </div>
          </AnimatedContainer>
        </div>
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
