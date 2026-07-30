import { ScrollReveal } from "@/components/landing/scroll-reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ANNOUNCEMENTS = [
  {
    date: "Jul 24, 2026",
    tag: "WoE",
    title: "Castle defense schedule for August",
    excerpt:
      "New siege lineup and role assignments are up. Check the #woe channel for your party and gear checklist.",
  },
  {
    date: "Jul 15, 2026",
    tag: "Event",
    title: "Guild-wide MVP hunt this weekend",
    excerpt:
      "We're running a coordinated hunt across three maps. Sign up in Discord to reserve a party slot.",
  },
  {
    date: "Jul 02, 2026",
    tag: "Recruitment",
    title: "Now recruiting Priests & Bards",
    excerpt:
      "We're short on support for WoE. Know a good support player? Send them our way.",
  },
];

export function Announcements() {
  return (
    <section id="news" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Latest
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Guild Announcements
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ANNOUNCEMENTS.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <Card className="h-full border-border/60 bg-card/50">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="font-normal">
                      {post.tag}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="mt-3 text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
