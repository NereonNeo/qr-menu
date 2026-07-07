import type { IconNameTypes } from "@/shared/const/icon.const";

export type StatTrend = "up" | "down";

export interface StatKpiCard {
  id: string;
  label: string;
  value: string;
  icon: IconNameTypes;
  delta: string;
  trend: StatTrend;
}

export interface StatWeekBar {
  day: string;
  heightPercent: number;
  highlight?: boolean;
}
