import type { ToSubOptions } from "@tanstack/react-router";

import { IconNameTypes } from "@/shared/const/icon.const";

export type ChildLinkType = { href: ToSubOptions["to"]; text: string };
export type LinkType = { icon: IconNameTypes; href: ToSubOptions["to"]; text: string; children?: Array<ChildLinkType> };

export const listLink: Array<LinkType> = [
  {
    icon: "shop",
    href: "/",
    text: "Магазин",
  },
  {
    icon: "box",
    text: "Продукты",
    href: "/products",
    children: [
      { href: "/products", text: "Категории" },
      { href: "/products/create", text: "Позиции" },
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
