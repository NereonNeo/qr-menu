import { useContext } from "react";
import { SidebarContextHandler, SidebarContextValue } from "../../config/config-sidebar-context/config-sidebar-context";

export const useSidebarContext = () => useContext(SidebarContextValue);

export const useSidebarContextHandler = () => useContext(SidebarContextHandler);
