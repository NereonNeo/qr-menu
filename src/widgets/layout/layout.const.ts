import type { ToOptions } from "@tanstack/react-router";

import { IconNameTypes } from "@/shared/const/icon.const";

export type ChildLinkType = { href: ToOptions["to"]; text: string; icon: IconNameTypes };

export type LinkType =
  | { viewType: "link"; icon: IconNameTypes; href: ToOptions["to"]; text: string }
  | { viewType: "sub-link"; children?: Array<ChildLinkType>; icon: IconNameTypes; parentHref: ToOptions["to"]; text: string };

export const listLink: Array<LinkType> = [
  {
    viewType: "link",
    icon: "shop",
    href: "/",
    text: "Главная",
  },
  {
    icon: "box",
    viewType: "sub-link",
    text: "Продукты",
    parentHref: "/products",
    children: [
      { href: "/products/menu", text: "Меню", icon: "layers" },
      { href: "/products/position", text: "Позиции", icon: "layout-list" },
    ],
  },
  {
    viewType: "link",

    icon: "monitor-cog",
    text: "Кастомизация",
    href: "/customization",
  },
  {
    viewType: "link",

    href: "/statistics",
    text: "Статистика",
    icon: "chart-column-increasing",
  },
  {
    viewType: "link",
    icon: "bolt",
    text: "Настройки",
    href: "/settings",
  },
];
