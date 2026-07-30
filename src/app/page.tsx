import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Features } from "@/components/landing/features";
import { Officers } from "@/components/landing/officers";
import { Recruitment } from "@/components/landing/recruitment";
import { Announcements } from "@/components/landing/announcements";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Officers />
        <Recruitment />
        <Announcements />
      </main>
      <Footer />
    </div>
  );
}
