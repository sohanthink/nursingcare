import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto bg-dark min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
