"use client";
import React from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    avatarId: "testimonial-avatar-1",
    name: "Sarah L.",
    role: "Texas, USA",
    text: "The prophetic messages have been a light in a dark season for me and my family. We've experienced so much breakthrough. Thank you!",
  },
  {
    avatarId: "testimonial-avatar-2",
    name: "David O.",
    role: "Lagos, Nigeria",
    text: "I've grown so much in my understanding of the Word. The teachings are so rich and practical. I am truly being equipped to prosper.",
  },
  {
    avatarId: "testimonial-avatar-3",
    name: "Maria G.",
    role: "São Paulo, Brazil",
    text: "Through this ministry, I found my calling. The encouragement and prayers gave me the strength to step into what God has for me.",
  },
  {
    avatarId: "testimonial-avatar-1",
    name: "Sarah L.",
    role: "Texas, USA",
    text: "The prophetic messages have been a light in a dark season for me and my family. We've experienced so much breakthrough. Thank you!",
  },
  {
    avatarId: "testimonial-avatar-2",
    name: "David O.",
    role: "Lagos, Nigeria",
    text: "I've grown so much in my understanding of the Word. The teachings are so rich and practical. I am truly being equipped to prosper.",
  },
  {
    avatarId: "testimonial-avatar-3",
    name: "Maria G.",
    role: "São Paulo, Brazil",
    text: "Through this ministry, I found my calling. The encouragement and prayers gave me the strength to step into what God has for me.",
  },
];

const enrichedTestimonials = testimonials.map(testimonial => {
    const image = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
    return { ...testimonial, image: image?.imageUrl || '' };
});

const firstColumn = enrichedTestimonials.slice(0, 2);
const secondColumn = enrichedTestimonials.slice(2, 4);
const thirdColumn = enrichedTestimonials.slice(4, 6);

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <Badge variant="outline" className="border-accent text-accent">Testimonials</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Lives Touched by the Spirit
          </h2>
          <p className="text-center mt-5 opacity-75">
            Discover the transformative power of faith through the stories of our community members.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="#">Share Your Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
