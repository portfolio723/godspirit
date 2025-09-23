

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}


export function Hero() {

  return (
    <section className="py-16 sm:py-24 lg:py-32">
        <div className="relative">
             <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                <video
                    className="absolute min-h-full min-w-full object-cover"
                    src="https://cdn.pixabay.com/video/2024/05/20/212625_large.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
            </div>
            <div aria-hidden className="absolute inset-0 -z-10 size-full bg-gradient-to-b from-black/60 to-background" />
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                    <AnimatedGroup variants={transitionVariants}>
                        <h1 className="hero-title mt-8 max-w-4xl mx-auto text-balance text-foreground">
                            "She prospers in all that she does"
                            <span className="scripture-quote text-accent ml-4">- Psalms 1:3</span>
                        </h1>
                        <p
                            className="mx-auto mt-8 max-w-4xl text-balance text-lg text-foreground/80">
                            Welcome to a space of spiritual nourishment and divine encounter. Discover messages that inspire, insights that enlighten, and a community that uplifts.
                        </p>
                    </AnimatedGroup>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        delayChildren: 0.5,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="mt-12 flex justify-center max-w-5xl mx-auto">
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/4RJDF7epzblJDsPwKx9XXl?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </AnimatedGroup>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                        
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                                <Link href="#messages">
                                    <span className="text-nowrap">Latest Messages</span>
                                </Link>
                            </Button>
                        
                        <Button
                            asChild
                            size="lg"
                            variant="ghost">
                            <Link href="#about">
                                <span className="text-nowrap">Our Mission</span>
                            </Link>
                        </Button>
                    </AnimatedGroup>
                </div>
            </div>
        </div>
    </section>
  );
}
