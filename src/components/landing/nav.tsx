"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#officers", label: "Officers" },
  { href: "#join", label: "Join" },
  { href: "#news", label: "News" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold tracking-wide text-foreground">
            阿<span className="text-primary">カツキ</span>
          </span>
          <span className="font-heading text-lg font-semibold tracking-[0.2em] text-foreground">
            AKATSUKI
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href="#join" />}
            nativeButton={false}
            className="font-medium"
          >
            Join the Guild
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="font-heading tracking-wide">
                AKATSUKI
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className="rounded-md px-2 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                render={<a href="#join" />}
                className="mt-2 rounded-md bg-primary px-2 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Join the Guild
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
