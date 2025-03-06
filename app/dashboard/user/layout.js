"use client";

import useAuthStore from "@/store/authStore";
import { useEffect, useRef } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function RootLayout({ children }) {
  // const loadUser = useAuthStore((state) => state.loadUser);
  // const isLoaded = useRef(false);

  // useEffect(() => {
  //   if (!isLoaded.current) {
  //     console.log("🔄 Loading user from localStorage...");
  //     loadUser();
  //     isLoaded.current = true;
  //   }
  // }, []);

  return (
    <html lang="en">
      <body className="container mx-auto">
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
        ;
      </body>
    </html>
  );
}
