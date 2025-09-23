import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="relative h-[85vh] w-full">
      <div className="absolute inset-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto flex h-full items-center justify-center text-center text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
            "She prospers in all that she does"
          </h1>
          <p className="mt-4 text-2xl text-primary">
            Psalms 1:3
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
            Welcome to a space of spiritual nourishment and divine encounter. Discover messages that inspire, insights that enlighten, and a community that uplifts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#messages">Latest Messages</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <Link href="#about">Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
