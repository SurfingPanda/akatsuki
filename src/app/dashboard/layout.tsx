import { redirect } from "next/navigation";

import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const discordIdentity = user.identities?.find(
    (identity) => identity.provider === "discord"
  );
  const displayName =
    discordIdentity?.identity_data?.full_name ??
    discordIdentity?.identity_data?.name ??
    user.email ??
    "Guild Member";
  const avatarUrl = discordIdentity?.identity_data?.avatar_url as
    | string
    | undefined;

  return (
    <SidebarProvider>
      <AppSidebar displayName={displayName} avatarUrl={avatarUrl} />
      <SidebarInset className="bg-transparent">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/60 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-heading text-sm font-medium tracking-wide text-foreground">
            Dashboard
          </span>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-4 sm:p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
