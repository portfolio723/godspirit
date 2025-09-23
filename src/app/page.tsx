import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { LatestMessages } from "@/components/sections/latest-messages";
import { SpiritualInsights } from "@/components/sections/spiritual-insights";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <LatestMessages />
        <SpiritualInsights />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
