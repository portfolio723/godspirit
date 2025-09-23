import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: "insight-post-1",
    title: "5 Keys to Spiritual Growth",
    category: "Discipleship",
    readingTime: "7 min read",
  },
  {
    id: "insight-post-2",
    title: "Unlocking the Parables",
    category: "Bible Study",
    readingTime: "12 min read",
  },
  {
    id: "insight-post-3",
    title: "Finding Your Divine Purpose",
    category: "Calling",
    readingTime: "9 min read",
  },
];

export function SpiritualInsights() {
  return (
    <section id="insights" className="w-full py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Spiritual Insights
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Explore articles that delve deeper into scripture, offer practical wisdom, and encourage a closer walk with God.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => {
            const image = PlaceHolderImages.find((img) => img.id === insight.id);
            return (
              <Card key={insight.id} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 hover:border-primary/50">
                {image && (
                  <CardHeader className="p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </CardHeader>
                )}
                <CardContent className="flex-1 p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Badge variant="outline">{insight.category}</Badge>
                    <span>{insight.readingTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight">{insight.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" asChild className="text-primary hover:text-primary/80 p-0 font-semibold">
                    <Link href="#" className="flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
