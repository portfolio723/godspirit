import { PlaceHolderImages } from "@/lib/placeholder-images";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";

const messages = [
  {
    id: "message-video-1",
    title: "The Unshakeable Kingdom",
    category: "Sermon",
    description: "Discover the stability and security found only in God's eternal kingdom.",
    videoUrl: "https://www.youtube.com/embed/ScfQDc0M_3c",
  },
  {
    id: "message-video-2",
    title: "A Word for the Season",
    category: "Prophetic",
    description: "A timely and encouraging prophetic word to navigate the current times.",
    videoUrl: "https://www.youtube.com/embed/u_juhS63wS4",
  },
  {
    id: "message-video-3",
    title: "Intercession for Breakthrough",
    category: "Prayer",
    description: "Join in a powerful time of prayer for breakthrough in your life and family.",
    videoUrl: "https://www.youtube.com/embed/n_34-saN2oM",
  },
];

export function LatestMessages() {
  return (
    <section id="messages" className="w-full py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-6 text-center">
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
                image && <VideoPlayer
                    key={message.id}
                    thumbnailUrl={image.imageUrl}
                    videoUrl={message.videoUrl}
                    title={message.title}
                    description={message.description}
                    category={message.category}
                />
            );
          })}
        </div>
      </div>
    </section>
  );
}
