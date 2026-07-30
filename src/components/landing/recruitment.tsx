import { DiscordIcon } from "@/components/landing/icons";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const REQUIREMENTS = [
  {
    q: "Level & progression",
    a: "Base level 50+ on your main character. We help lower-level members catch up through guided farming and party leveling.",
  },
  {
    q: "Activity expectations",
    a: "Log in a few times a week and join siege when you're available. We track activity loosely — we care about presence, not perfection.",
  },
  {
    q: "Classes we need",
    a: "Currently prioritizing support classes (Priest, Bard/Dancer) and tanks for WoE, but all classes are welcome to apply.",
  },
  {
    q: "Voice & Discord",
    a: "Discord is required for coordination during siege and events. Mic is optional but appreciated for officers and party leads.",
  },
];

export function Recruitment() {
  return (
    <section id="join" className="border-b border-border/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Recruitment
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Join Akatsuki
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Ready to fight under the red cloud? Hop into our Discord and reach
            out to any officer &mdash; tell us your class, your level, and
            what you&apos;re looking for in a guild. We&apos;ll take it from
            there.
          </p>
          <div className="mt-8">
            <Button
              render={
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                />
              }
              nativeButton={false}
              size="lg"
              className="gap-2 px-8 text-base"
            >
              <DiscordIcon className="size-4" />
              Apply on Discord
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Accordion defaultValue={["item-0"]} className="self-start">
            {REQUIREMENTS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
