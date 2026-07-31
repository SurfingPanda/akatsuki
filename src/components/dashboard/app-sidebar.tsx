"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Megaphone,
  Settings,
  Swords,
  Users,
} from "lucide-react";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const NAV_ITEMS = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Roster", href: "/dashboard/roster", icon: Users },
  { title: "Siege Schedule", href: "#", icon: Swords, soon: true },
  { title: "Announcements", href: "#", icon: Megaphone, soon: true },
  { title: "Settings", href: "#", icon: Settings, soon: true },
];

export function AppSidebar({
  displayName,
  avatarUrl,
}: {
  displayName: string;
  avatarUrl?: string;
}) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link
          href="/"
          className="flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:justify-center"
        >
          <span className="font-heading text-lg font-bold text-primary">
            阿
          </span>
          <span className="font-heading text-sm font-semibold tracking-[0.2em] text-foreground group-data-[collapsible=icon]:hidden">
            AKATSUKI
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Guild</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.soon ? (
                    <SidebarMenuButton
                      disabled
                      tooltip={`${item.title} (coming soon)`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton
                      render={<Link href={item.href} />}
                      isActive={pathname === item.href}
                      tooltip={item.title}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  )}
                  {item.soon && <SidebarMenuBadge>Soon</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2 rounded-md p-2 group-data-[collapsible=icon]:justify-center">
          <Avatar className="size-8 border border-primary/30">
            {avatarUrl && <AvatarImage src={avatarUrl} alt={displayName} />}
            <AvatarFallback className="bg-primary/10 text-xs text-primary">
              {displayName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-medium text-foreground">
              {displayName}
            </span>
            <span className="text-xs text-muted-foreground">
              Guild Member
            </span>
          </div>
        </div>
        <div className="group-data-[collapsible=icon]:hidden">
          <SignOutButton className="w-full" />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
