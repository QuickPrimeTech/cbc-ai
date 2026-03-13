"use client";
import * as React from "react";
import { NavMain } from "@/layouts/dashboard/nav-main";
import { NavSecondary } from "@/layouts/dashboard/nav-secondary";
import { NavUser } from "@/layouts/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  FilePlusIcon,
  CalendarDaysIcon,
  ClipboardCheckIcon,
  CircleHelpIcon,
  Settings,
} from "lucide-react";
import { Logo } from "@/components/logo";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Lesson Plans",
      url: "/lesson-plans",
      icon: <FilePlusIcon />,
    },
    {
      title: "Schemes of Work",
      url: "/schemes",
      icon: <CalendarDaysIcon />,
    },
    {
      title: "Assessments",
      url: "/assessments",
      icon: <ClipboardCheckIcon />,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings />,
    },
    {
      title: "Help & Support",
      url: "/help",
      icon: <CircleHelpIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link href="#" />}
            >
              <Logo className="size-8!" />
              <span className="text-base font-semibold">CBC AI.</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
