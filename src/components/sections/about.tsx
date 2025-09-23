import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Video, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Lives Touched" },
  { icon: Video, value: "500+", label: "Messages Shared" },
  { icon: Star, value: "1,200+", label: "Testimonies Received" },
];

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-h2 font-bold tracking-tighter text-primary">
              Our Calling & Mission
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-body/relaxed">
              Divine Echoes began with a single, clear whisper from God. Our journey is a testament to His faithfulness, a story of stepping out in faith to build a platform for His voice to be heard across the nations.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-h3 font-bold tracking-tighter">Mission Statement</h3>
            <p className="max-w-[600px] text-muted-foreground text-body/relaxed">
              To empower believers to walk in the fullness of their God-given identity and prosper in every area of their lives through biblically-sound teaching, prophetic insight, and heartfelt prayer.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-h3 font-bold tracking-tighter text-center lg:text-left">Ministry Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center bg-card hover:bg-primary/10 transition-colors">
                <CardHeader className="items-center pb-2">
                  <stat.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-h1 font-bold">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
