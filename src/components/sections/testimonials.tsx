import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

const testimonials = [
  {
    avatarId: "testimonial-avatar-1",
    name: "Sarah L.",
    location: "Texas, USA",
    testimony: "The prophetic messages have been a light in a dark season for me and my family. We've experienced so much breakthrough. Thank you!",
  },
  {
    avatarId: "testimonial-avatar-2",
    name: "David O.",
    location: "Lagos, Nigeria",
    testimony: "I've grown so much in my understanding of the Word. The teachings are so rich and practical. I am truly being equipped to prosper.",
  },
  {
    avatarId: "testimonial-avatar-3",
    name: "Maria G.",
    location: "São Paulo, Brazil",
    testimony: "Through this ministry, I found my calling. The encouragement and prayers gave me the strength to step into what God has for me.",
  },
];

const Rating = ({ count = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Lives Being Transformed
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from some of the many people whose lives have been touched and changed by the power of God through this ministry.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const avatar = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
            return (
              <Card key={index} className="bg-background p-6 flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <CardContent className="p-0 space-y-4">
                  <Rating />
                  <blockquote className="text-lg">
                    "{testimonial.testimony}"
                  </blockquote>
                </CardContent>
                <div className="mt-6 flex items-center gap-4">
                  {avatar && (
                     <Avatar>
                        <AvatarImage src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#">Share Your Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
