import type { StatKpiCard, StatWeekBar } from "./statistics.contract";

export const STAT_KPI_CARDS: StatKpiCard[] = [
  { id: "views", label: "Просмотры меню", value: "12 847", icon: "eye", delta: "+18% за месяц", trend: "up" },
  { id: "orders", label: "Заказы", value: "1 284", icon: "package", delta: "+12% за месяц", trend: "up" },
  { id: "revenue", label: "Выручка", value: "₽ 284 320", icon: "wallet", delta: "+24% за месяц", trend: "up" },
  { id: "conversion", label: "Конверсия", value: "9.98%", icon: "percent", delta: "−2% за месяц", trend: "down" },
];

export const STAT_WEEK_BARS: StatWeekBar[] = [
  { day: "Пн", heightPercent: 48 },
  { day: "Вт", heightPercent: 64 },
  { day: "Ср", heightPercent: 81 },
  { day: "Чт", heightPercent: 58 },
  { day: "Пт", heightPercent: 100, highlight: true },
  { day: "Сб", heightPercent: 71 },
  { day: "Вс", heightPercent: 36 },
];
