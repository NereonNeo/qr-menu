import type { ToOptions } from "@tanstack/react-router";

import { IconNameTypes } from "@/shared/const/icon.const";

export type ChildLinkType = { href: ToOptions["to"]; text: string; icon: IconNameTypes };
export type LinkType = { icon: IconNameTypes; href: ToOptions["to"]; text: string; children?: Array<ChildLinkType> };

export const listLink: Array<LinkType> = [
  {
    icon: "shop",
    href: "/",
    text: "Главная",
  },
  {
    icon: "box",
    text: "Продукты",
    href: "/products",
    children: [
      { href: "/products/menu", text: "Меню", icon: "layers" },
      { href: "/products/positions", text: "Позиции", icon: "layout-list" },
    ],
  },
  {
    icon: "monitor-cog",
    text: "Кастомизация",
    href: "/customization",
  },
  {
    href: "/statistics",
    text: "Статистика",
    icon: "chart-column-increasing",
  },
  {
    icon: "bolt",
    text: "Настройки",
    href: "/settings",
  },
];
