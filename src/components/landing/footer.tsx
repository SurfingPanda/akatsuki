import Link from "next/link";

import { DiscordIcon } from "@/components/landing/icons";

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <span className="font-heading text-lg font-semibold tracking-[0.2em] text-foreground">
          AKATSUKI
        </span>
        <p className="max-w-md text-sm text-muted-foreground">
          A Ragnarok Origin Classic guild. Forged in the shadows, risen to the
          light.
        </p>
        <Link
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <DiscordIcon className="size-4" />
          Discord
        </Link>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Akatsuki Guild. Not affiliated
          with Gravity Co., Ltd.
        </p>
      </div>
    </footer>
  );
}
