import type { Metadata } from "next";
import Link from "next/link";

import { DiscordSignInButton } from "@/components/auth/discord-sign-in-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign In | Akatsuki",
  description: "Sign in to the Akatsuki guild with Discord.",
};

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-24">
      <Card className="w-full max-w-sm border-border/60 bg-card/70 backdrop-blur">
        <CardHeader className="items-center text-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold tracking-wide text-foreground">
              阿<span className="text-primary">カツキ</span>
            </span>
            <span className="font-heading text-base font-semibold tracking-[0.2em] text-foreground">
              AKATSUKI
            </span>
          </Link>
          <h1 className="mt-4 font-heading text-2xl font-bold text-foreground">
            Guild Sign In
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Use your Discord account to access the guild dashboard.
          </p>
        </CardHeader>
        <CardContent>
          <DiscordSignInButton />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Not a member yet?{" "}
            <Link href="/#join" className="text-primary hover:underline">
              Learn how to join
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
