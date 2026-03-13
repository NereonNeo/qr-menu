import { Outlet } from "@tanstack/react-router";

import { Header } from "./header.component";
import { SidebarProvider } from "./sidebar-provider.component";
import { Sidebar } from "./sidebar.component";

export const Layout = () => {
  return (
    <SidebarProvider>
      <div className="tablet:ml-60 max-tablet:pt-14 h-full">
        <Outlet />
      </div>
      <Header />
      <Sidebar />
    </SidebarProvider>
  );
};
