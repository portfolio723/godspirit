"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const insights = [
  {
    id: "insight-post-1",
    title: "5 Keys to Spiritual Growth",
    description:
      "Discover practical steps and biblical principles to deepen your relationship with God and foster spiritual maturity in your daily walk.",
    href: "#",
  },
  {
    id: "insight-post-2",
    title: "Unlocking the Parables",
    description:
      "Dive into the rich teachings of Jesus' parables. This study unveils hidden meanings and applies ancient wisdom to contemporary life.",
    href: "#",
  },
  {
    id: "insight-post-3",
    title: "Finding Your Divine Purpose",
    description:
      "A guide to discovering your unique calling. Learn how to identify your spiritual gifts and align your life with God's plan.",
    href: "#",
  },
  {
    id: "insight-post-4",
    title: "The Power of Forgiveness",
    description:
      "Learn about the freedom and healing that comes from forgiveness, and how to apply it in your life.",
    href: "#",
  },
  {
    id: "insight-post-5",
    title: "Navigating Life's Storms",
    description:
      "Find strength and hope in God's promises when facing the trials and tribulations of life.",
    href: "#",
  },
  {
      id: "insight-post-6",
      title: "The Heart of a Worshipper",
      description: "Explore what it truly means to worship God in spirit and in truth, beyond just music and songs.",
      href: "#"
  },
  {
      id: "insight-post-7",
      title: "Hearing the Voice of God",
      description: "Practical tips to discern God's voice from the noise of everyday life.",
      href: "#"
  }
];

const items = insights.map((insight) => {
    const image = PlaceHolderImages.find((img) => img.id === insight.id);
    return { ...insight, image: image?.imageUrl || '' };
});

export function SpiritualInsights() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="insights" className="py-16 sm:py-24 lg:py-32 bg-card">
      <div className="container mx-auto">
        <div className="mb-12 flex items-end justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-primary">
              Spiritual Insights
            </h2>
            <p className="max-w-lg text-muted-foreground">
                Explore articles that delve deeper into scripture, offer practical
                wisdom, and encourage a closer walk with God.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-5 lg:max-w-[360px]"
              >
                <a href={item.href} className="group">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden md:aspect-[5/4] lg:aspect-[16/9]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
