import type { Metadata } from "next";
import { Swords, Users } from "lucide-react";

import { AddMemberDialog } from "@/components/dashboard/add-member-dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/lib/supabase/server";
import type { GuildMember } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Roster | Akatsuki",
};

const LEADERSHIP_RANKS = new Set(["Guild Leader", "Vice Leader"]);

export default async function RosterPage() {
  const supabase = await createClient();
  const { data: members, error } = await supabase
    .from("guild_members")
    .select("*")
    .order("level", { ascending: false, nullsFirst: false })
    .order("name", { ascending: true })
    .returns<GuildMember[]>();

  const tableMissing = error?.code === "PGRST205";

  const jobBreakdown = Object.entries(
    (members ?? []).reduce<Record<string, number>>((counts, member) => {
      counts[member.job] = (counts[member.job] ?? 0) + 1;
      return counts;
    }, {})
  ).sort(([jobA, countA], [jobB, countB]) =>
    countB !== countA ? countB - countA : jobA.localeCompare(jobB)
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Guild Roster
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {members?.length
              ? `${members.length} member${members.length === 1 ? "" : "s"} in Akatsuki.`
              : "See who's fighting under the red cloud."}
          </p>
        </div>
        <AddMemberDialog />
      </div>

      {members && members.length > 0 && (
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="border-border/60 bg-card/50 lg:col-span-1">
            <CardContent className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="size-5" />
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-primary">
                  {members.length}
                </p>
                <p className="text-xs text-muted-foreground">
                  Total Members
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/50 lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Swords className="size-4 text-primary" />
                <CardTitle className="text-base">Members by Job</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {jobBreakdown.map(([job, count]) => (
                  <div
                    key={job}
                    className="flex items-center gap-1.5 rounded-md border border-border/60 bg-background/40 px-2.5 py-1.5 text-sm"
                  >
                    <span className="text-foreground">{job}</span>
                    <Badge variant="secondary" className="font-normal">
                      {count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card className="border-border/60 bg-card/50">
        <CardContent className="p-0">
          {tableMissing ? (
            <div className="p-6 text-sm text-muted-foreground">
              The roster table hasn&apos;t been created yet. Run{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                supabase/migrations/0001_guild_members.sql
              </code>{" "}
              in your Supabase SQL Editor, then reload this page.
            </div>
          ) : error ? (
            <div className="p-6 text-sm text-destructive">
              Couldn&apos;t load the roster: {error.message}
            </div>
          ) : !members || members.length === 0 ? (
            <div className="p-6 text-sm text-muted-foreground">
              No members yet.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>IGN</TableHead>
                  <TableHead>Job</TableHead>
                  <TableHead>Rank</TableHead>
                  <TableHead className="text-right">Level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium text-foreground">
                      {member.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {member.ign}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {member.job}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          LEADERSHIP_RANKS.has(member.rank)
                            ? "default"
                            : "secondary"
                        }
                        className="font-normal"
                      >
                        {member.rank}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {member.level ?? "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
