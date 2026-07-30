import { DiscordIcon } from "@/components/landing/icons";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-28 text-center sm:px-6 lg:px-8 lg:py-36">
        <ScrollReveal className="flex flex-col items-center gap-8">
          <h1 className="font-heading text-6xl font-bold tracking-wide text-foreground sm:text-7xl lg:text-8xl">
            AKATSUKI
          </h1>

          <p className="max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
            A guild forged in the shadows, risen to the light. We hunt MVPs,
            dominate War of Emperium, and stand together as one clan &mdash;
            every dawn, every battle.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#join" />}
              nativeButton={false}
              size="lg"
              className="h-14 px-10 text-lg"
            >
              Join the Guild
            </Button>
            <Button
              render={
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                />
              }
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-14 gap-2 px-10 text-lg"
            >
              <DiscordIcon className="size-5" />
              Join our Discord
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
