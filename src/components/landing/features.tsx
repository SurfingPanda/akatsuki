import { Skull, Swords, Users, Trophy, MessageSquare, ScrollText } from "lucide-react";

import { ScrollReveal } from "@/components/landing/scroll-reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FEATURES = [
  {
    icon: Swords,
    title: "War of Emperium",
    description:
      "Organized siege parties with clear roles, callouts, and consumable stocking so every WoE counts.",
  },
  {
    icon: Skull,
    title: "MVP & Mini-Boss Hunts",
    description:
      "Scheduled hunt parties for field MVPs and mini-bosses, with fair loot rules for everyone involved.",
  },
  {
    icon: Users,
    title: "Active Community",
    description:
      "A friendly, drama-free Discord where members share builds, routes, and market tips around the clock.",
  },
  {
    icon: Trophy,
    title: "Guild Progression",
    description:
      "Steady investment in guild skills, dungeons, and emblem upgrades funded by shared guild storage.",
  },
  {
    icon: ScrollText,
    title: "New Player Support",
    description:
      "Mentorship for fresh adventurers — leveling routes, class guidance, and starter gear runs.",
  },
  {
    icon: MessageSquare,
    title: "Events & Giveaways",
    description:
      "Regular in-guild events, tournaments, and zeny/item giveaways to keep things fun outside the grind.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            What We Offer
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Guild Highlights
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={(i % 3) * 0.1}>
              <Card className="group h-full border-border/60 bg-card/50 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle className="mt-4 transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
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
