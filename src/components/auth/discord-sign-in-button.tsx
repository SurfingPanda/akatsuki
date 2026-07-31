"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { DiscordIcon } from "@/components/landing/icons";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export function DiscordSignInButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignIn() {
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
    // On success the browser is redirected to Discord — no further action.
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Button
        onClick={handleSignIn}
        disabled={loading}
        size="lg"
        className="h-12 w-full gap-2 text-base"
      >
        {loading ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          <DiscordIcon className="size-5" />
        )}
        Continue with Discord
      </Button>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
