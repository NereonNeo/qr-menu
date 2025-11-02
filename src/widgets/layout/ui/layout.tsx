import { Outlet } from "@tanstack/react-router";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { SidebarProvider } from "./sidebar-provider";

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
