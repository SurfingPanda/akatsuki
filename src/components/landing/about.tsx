import { ScrollReveal } from "@/components/landing/scroll-reveal";

const STATS = [
  { label: "Founded", value: "2026" },
  { label: "Active Members", value: "70+" },
  { label: "Server", value: "Sakura Vows" },
  { label: "WoE Castles", value: "3" },
];

export function About() {
  return (
    <section id="about" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
              About the Guild
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Born from the Shadows
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Akatsuki started as a small band of adventurers who refused to
              grind alone. Today we&apos;re a close-knit guild on Ragnarok
              Origin Classic built around MVP hunts, War of Emperium sieges,
              and helping every member &mdash; new or veteran &mdash; get
              stronger together.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We run organized parties, share farming routes, pool zeny for
              guild upgrades, and show up for each other in siege. If you want
              a guild that plays seriously but never forgets it&apos;s a game,
              you&apos;ve found your clan.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.15}
            className="grid grid-cols-2 gap-6 self-start rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
