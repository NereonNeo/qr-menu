import type { DrawerPositionType, DrawerSizeType } from "./drawer.contract";

export const drawerPositionClassNames: Record<DrawerPositionType, string> = {
  right: "fixed top-0 right-0 h-full rounded-l-2xl",
  left: "fixed top-0 left-0 h-full rounded-r-2xl",
  top: "fixed top-0 left-0 w-full rounded-b-2xl",
  bottom: "fixed bottom-0 left-0 w-full rounded-t-2xl",
};

export const drawerSizeClassNames: Record<DrawerPositionType, Record<DrawerSizeType, string>> = {
  right: { m: "w-[480px]", l: "w-[580px]" },
  left: { m: "w-[480px]", l: "w-[580px]" },
  top: { m: "h-96", l: "w-[480px]" },
  bottom: { m: "96", l: "w-[480px]" },
};
