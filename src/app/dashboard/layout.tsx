import { AppSidebar } from "@/layouts/dashboard/app-sidebar";
import { SiteHeader } from "@/layouts/dashboard/app-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { QueryProvider } from "@/components/providers/tanstack-provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <main className="p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </QueryProvider>
  );
}
