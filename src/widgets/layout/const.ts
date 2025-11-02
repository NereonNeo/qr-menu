import { IconNameTypes } from "@/shared/types/icon-name-types";
import type { ToSubOptions } from "@tanstack/react-router";

type LinkType = { icon: IconNameTypes; href: ToSubOptions["to"]; text: string };

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
