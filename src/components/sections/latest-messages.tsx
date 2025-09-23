import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const messages = [
  {
    id: "message-video-1",
    title: "The Unshakeable Kingdom",
    category: "Sermon",
    description: "Discover the stability and security found only in God's eternal kingdom.",
  },
  {
    id: "message-video-2",
    title: "A Word for the Season",
    category: "Prophetic",
    description: "A timely and encouraging prophetic word to navigate the current times.",
  },
  {
    id: "message-video-3",
    title: "Intercession for Breakthrough",
    category: "Prayer",
    description: "Join in a powerful time of prayer for breakthrough in your life and family.",
  },
];

export function LatestMessages() {
  return (
    <section id="messages" className="w-full py-16 sm:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Latest Messages
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Dive into our recent teachings, prophetic words, and prayer sessions. Be blessed, encouraged, and transformed by the Word of God.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((message) => {
            const image = PlaceHolderImages.find((img) => img.id === message.id);
            return (
              <Card key={message.id} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   <Badge variant={message.category === 'Sermon' ? 'default' : 'secondary'} className="absolute top-4 right-4">{message.category}</Badge>
                </CardHeader>
                <CardContent className="flex-1 p-6 space-y-3">
                  <CardTitle className="text-xl font-bold">{message.title}</CardTitle>
                  <p className="text-muted-foreground">{message.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
