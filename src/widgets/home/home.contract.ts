import type { ToOptions } from "@tanstack/react-router";

import type { IconNameTypes } from "@/shared/const/icon.const";
import type { IndicatorColorTypes } from "@/shared/types/ui.contract";

export type TrendDirection = "up" | "down";

export interface HomeKpiCard {
  id: string;
  label: string;
  value: string;
  icon: IconNameTypes;
  colorVariant: IndicatorColorTypes;
  delta: string;
  trend: TrendDirection;
  sparkline: number[];
}

export interface PopularPosition {
  id: string;
  rank: string;
  name: string;
  category: string;
  colorVariant: IndicatorColorTypes;
  views: string;
  delta: string;
  progressPercent: number;
  trend: TrendDirection;
}

export type OrderStatus = "new" | "cooking" | "paid";

export interface RecentOrder {
  id: string;
  table: string;
  timeAgo: string;
  items: string;
  sum: string;
  status: OrderStatus;
}

export interface QuickActionTile {
  id: string;
  label: string;
  icon: IconNameTypes;
  href: ToOptions["to"];
  variant: "dark" | "light";
}

export interface TrafficBar {
  hour: string;
  heightPercent: number;
  highlight?: boolean;
}
