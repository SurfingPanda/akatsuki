import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const OFFICERS = [
  { name: "Yahiko", role: "Guild Leader", cls: "Imperial Guard" },
  { name: "Konan", role: "Vice Leader", cls: "Shadow Cross" },
  { name: "Nagato", role: "WoE Commander", cls: "Meister" },
  { name: "Itachi", role: "Officer", cls: "Shadow Chaser" },
];

function initials(name: string) {
  return name.slice(0, 2).toUpperCase();
}

export function Officers() {
  return (
    <section id="officers" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Leadership
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Guild Officers
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {OFFICERS.map((officer, i) => (
            <ScrollReveal key={officer.name} delay={i * 0.08}>
              <div className="group flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-card/50 px-4 py-8 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10">
                <Avatar className="size-16 border border-primary/30 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
                  <AvatarFallback className="bg-primary/10 font-heading text-lg text-primary">
                    {initials(officer.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                    {officer.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {officer.cls}
                  </p>
                </div>
                <Badge variant="secondary" className="font-normal">
                  {officer.role}
                </Badge>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
