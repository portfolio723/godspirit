import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: "insight-post-1",
    title: "5 Keys to Spiritual Growth",
    summary:
      "Discover practical steps and biblical principles to deepen your relationship with God and foster spiritual maturity in your daily walk.",
    category: "Discipleship",
    readingTime: "7 min read",
    url: "#",
  },
  {
    id: "insight-post-2",
    title: "Unlocking the Parables",
    summary:
      "Dive into the rich teachings of Jesus' parables. This study unveils hidden meanings and applies ancient wisdom to contemporary life.",
    category: "Bible Study",
    readingTime: "12 min read",
    url: "#",
  },
  {
    id: "insight-post-3",
    title: "Finding Your Divine Purpose",
    summary:
      "A guide to discovering your unique calling. Learn how to identify your spiritual gifts and align your life with God's plan.",
    category: "Calling",
    readingTime: "9 min read",
    url: "#",
  },
];

export function SpiritualInsights() {
  return (
    <section id="insights" className="w-full py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Deeper Understanding
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl text-primary">
            Spiritual Insights
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Explore articles that delve deeper into scripture, offer practical
            wisdom, and encourage a closer walk with God.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {insights.map((post) => {
            const image = PlaceHolderImages.find((img) => img.id === post.id);
            return (
              <Card
                key={post.id}
                className="grid grid-rows-[auto_1fr_auto] overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 hover:border-primary/50"
              >
                {image && (
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <Link
                      href={post.url}
                      className="transition-opacity duration-200"
                    >
                      <Image
                        src={image.imageUrl}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                )}
                <CardHeader>
                  <h3 className="text-lg font-semibold hover:underline md:text-xl">
                    <Link href={post.url}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{post.summary}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={post.url}
                    className="flex items-center text-primary font-semibold hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}