"use client";

import * as React from "react";
import { useState } from "react";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Monitor,
  LogOut,
  User,
  Settings,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ============================================
// COMPOSED NAVBAR
// ============================================
function AppNavbar({
  onThemeChange,
  currentTheme = "system",
  notificationCount = 4,
}: {
  onThemeChange: (theme: "light" | "dark" | "system") => void;
  currentTheme?: "light" | "dark" | "system";
  notificationCount?: number;
}) {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      {/* Sidebar Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="h-8 w-8"
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>

      <Separator orientation="vertical" className="mr-2 h-4" />

      {/* Breadcrumb */}
      <nav className="flex flex-1 items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Dashboard</span>
        <span>/</span>
        <span>Overview</span>
      </nav>

      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={(props) => (
              <Button
                {...props}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                {currentTheme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : currentTheme === "light" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Monitor className="h-4 w-4" />
                )}
              </Button>
            )}
          />
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onThemeChange("light")}>
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onThemeChange("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onThemeChange("system")}>
              <Monitor className="mr-2 h-4 w-4" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={(props) => (
              <Button
                {...props}
                variant="ghost"
                size="icon"
                className="h-8 w-8 relative"
              >
                <Bell className="h-4 w-4" />
                {notificationCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                )}
              </Button>
            )}
          />
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Notifications</span>
              <Button variant="ghost" size="sm" className="h-auto text-xs">
                Mark all read
              </Button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-64 overflow-auto">
              {[1, 2, 3].map((i) => (
                <DropdownMenuItem
                  key={i}
                  className="flex flex-col items-start gap-1 p-3"
                >
                  <p className="text-sm font-medium">New lesson plan created</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-muted-foreground">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="mx-2 h-4" />

        {/* User Profile in Navbar */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={(props) => (
              <Button {...props} variant="ghost" className="h-8 gap-2 px-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="/avatars/jane.jpg" alt="Jane Muthoni" />
                  <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs font-bold">
                    JM
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium leading-none">
                    Jane Muthoni
                  </span>
                  <span className="text-xs text-muted-foreground leading-none mt-0.5">
                    Pro
                  </span>
                </div>
              </Button>
            )}
          />
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Jane Muthoni</p>
                <p className="text-xs text-muted-foreground">
                  Kiambu Primary School
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

// ============================================
// ENHANCED SIDEBAR WITH USER PROFILE
// ============================================
function EnhancedSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <SidebarFooter className="p-2">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={(props) => (
                <SidebarMenuButton
                  {...props}
                  tooltip={collapsed ? "Jane Muthoni" : undefined}
                  className="h-auto p-2 data-[active=true]:bg-transparent"
                >
                  <Avatar className="h-6 w-6 shrink-0">
                    <AvatarImage src="/avatars/jane.jpg" alt="Jane Muthoni" />
                    <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs font-bold">
                      JM
                    </AvatarFallback>
                  </Avatar>
                  {!collapsed && (
                    <div className="flex flex-1 flex-col items-start gap-0.5 min-w-0">
                      <span className="text-sm font-medium truncate w-full">
                        Jane Muthoni
                      </span>
                      <span className="text-xs text-muted-foreground truncate w-full">
                        Kiambu Primary School
                      </span>
                    </div>
                  )}
                  {!collapsed && (
                    <Badge
                      variant="secondary"
                      className="bg-sidebar-primary text-sidebar-primary-foreground text-[10px] px-1.5 shrink-0"
                    >
                      Pro
                    </Badge>
                  )}
                </SidebarMenuButton>
              )}
            />
            <DropdownMenuContent
              side={collapsed ? "right" : "top"}
              align={collapsed ? "start" : "end"}
              className="w-56"
            >
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Jane Muthoni</p>
                  <p className="text-xs text-muted-foreground">
                    Kiambu Primary School
                  </p>
                  <p className="text-[10px] text-muted-foreground/60">
                    jane@kiambu.ac.ke
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

// ============================================
// MAIN LAYOUT COMPOSITION
// ============================================
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        {/* Left Sidebar - Icon collapsible */}
        <EnhancedSidebar />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top Navbar */}
          <AppNavbar onThemeChange={setTheme} currentTheme={theme} />

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

// ============================================
// USAGE
// ============================================
