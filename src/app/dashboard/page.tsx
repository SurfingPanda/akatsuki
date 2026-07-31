import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Megaphone, Settings, Swords, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Dashboard | Akatsuki",
};

const STATS = [
  { label: "Founded", value: "2026" },
  { label: "Active Members", value: "70+" },
  { label: "Server", value: "Sakura Vows" },
  { label: "WoE Castles", value: "3" },
];

const UPCOMING = [
  {
    icon: Swords,
    title: "Siege Schedule",
    description: "Sign up for WoE parties and see your assigned role.",
  },
  {
    icon: Megaphone,
    title: "Announcements",
    description: "Post and manage guild news right from the dashboard.",
  },
  {
    icon: Settings,
    title: "Settings",
    description: "Manage your profile and notification preferences.",
  },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const discordIdentity = user?.identities?.find(
    (identity) => identity.provider === "discord"
  );
  const displayName =
    discordIdentity?.identity_data?.full_name ??
    discordIdentity?.identity_data?.name ??
    user?.email ??
    "Guild Member";

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Welcome back, {displayName}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening with Akatsuki.
        </p>
      </div>

      <Link href="/dashboard/roster" className="group block">
        <Card className="border-border/60 bg-card/50 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10">
          <CardContent className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
              <Users className="size-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                Guild Roster
              </p>
              <p className="text-sm text-muted-foreground">
                See every member&apos;s name, IGN, job, and rank.
              </p>
            </div>
            <ArrowRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </CardContent>
        </Card>
      </Link>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label} className="border-border/60 bg-card/50">
            <CardContent className="py-2">
              <p className="font-heading text-2xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="font-heading text-lg font-semibold text-foreground">
          Coming Soon
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {UPCOMING.map((item) => (
            <Card
              key={item.title}
              className="group border-border/60 bg-card/50 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
                    <item.icon className="size-4" />
                  </div>
                  <Badge variant="secondary" className="font-normal">
                    Soon
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-base transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
