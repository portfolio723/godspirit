import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
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
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="py-16 sm:py-24 lg:py-32">
        <div className="relative">
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                delayChildren: 1,
                            },
                        },
                    },
                    item: {
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: 'spring',
                                bounce: 0.3,
                                duration: 2,
                            },
                        },
                    },
                }}
                className="absolute inset-0 -z-20">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        data-ai-hint={heroImage.imageHint}
                        fill
                        className="absolute inset-x-0 top-56 -z-20 hidden object-cover lg:top-32 dark:block"
                        priority
                    />
                )}
            </AnimatedGroup>
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
                        className="mt-12 flex justify-center">
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/4RJDF7epzblJDsPwKx9XXl?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="max-w-5xl"
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
