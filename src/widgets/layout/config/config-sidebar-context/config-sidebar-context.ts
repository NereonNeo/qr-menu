import { createContext } from "react";

export interface SidebarContextHandlerValue {
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
}

export const SidebarContextValue = createContext<boolean>(false);
export const SidebarContextHandler = createContext<SidebarContextHandlerValue | null>(null);
