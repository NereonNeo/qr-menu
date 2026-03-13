import { useMemo, useState } from "react";

import { SidebarContextHandler, SidebarContextHandlerValue, SidebarContextValue } from "../config/config-sidebar-context/config-sidebar-context";

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarProvider = (props: SidebarProviderProps) => {
  const { children } = props;
  const [isSidebarOpen, setIsOpenSidebar] = useState<boolean>(false);

  const handlers = useMemo<SidebarContextHandlerValue>(
    () => ({
      onOpen: () => setIsOpenSidebar(true),
      onClose: () => setIsOpenSidebar(false),
      onToggle: () => setIsOpenSidebar((prev) => !prev),
    }),
    [],
  );

  return (
    <SidebarContextHandler.Provider value={handlers}>
      <SidebarContextValue.Provider value={isSidebarOpen}>{children}</SidebarContextValue.Provider>
    </SidebarContextHandler.Provider>
  );
};
