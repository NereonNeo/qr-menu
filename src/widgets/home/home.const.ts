import type { IndicatorColorTypes } from "@/shared/types/ui.types";

import type { HomeKpiCard, OrderStatus, PopularPosition, RecentOrder, TrafficBar } from "./home.contract";

export const HOME_ACCENT_COLOR_CLASSNAMES: Record<IndicatorColorTypes, { chipBg: string; chipText: string; barBg: string }> = {
  orange: { chipBg: "bg-primary-50", chipText: "text-primary-500", barBg: "bg-primary-400" },
  blue: { chipBg: "bg-blue-50", chipText: "text-blue-500", barBg: "bg-blue-400" },
  green: { chipBg: "bg-green-50", chipText: "text-green-500", barBg: "bg-green-400" },
  fuchsia: { chipBg: "bg-fuchsia-50", chipText: "text-fuchsia-500", barBg: "bg-fuchsia-400" },
  yellow: { chipBg: "bg-yellow-50", chipText: "text-yellow-500", barBg: "bg-yellow-400" },
  lime: { chipBg: "bg-lime-50", chipText: "text-lime-500", barBg: "bg-lime-400" },
  kelli: { chipBg: "bg-kelli-50", chipText: "text-kelli-500", barBg: "bg-kelli-400" },
  gray: { chipBg: "bg-gray-100", chipText: "text-gray-500", barBg: "bg-gray-400" },
  red: { chipBg: "bg-red-50", chipText: "text-red-500", barBg: "bg-red-400" },
};

export const HOME_ACCENT_CHART_COLORS: Record<IndicatorColorTypes, { stroke: string; fill: string }> = {
  orange: { stroke: "#f3b99d", fill: "#fdf6f3" },
  blue: { stroke: "#53b1fd", fill: "#eff8ff" },
  green: { stroke: "#32d583", fill: "#ecfdf3" },
  fuchsia: { stroke: "#e879f9", fill: "#fdf4ff" },
  yellow: { stroke: "#fdb022", fill: "#fffaeb" },
  lime: { stroke: "#a3e635", fill: "#f7fee7" },
  kelli: { stroke: "#92d672", fill: "#eaf8e4" },
  gray: { stroke: "#98a2b3", fill: "#f3f3f1" },
  red: { stroke: "#f87171", fill: "#fef2f2" },
};

export const HOME_KPI_CARDS: HomeKpiCard[] = [
  {
    id: "views",
    label: "Просмотры меню",
    value: "7 412",
    icon: "eye",
    colorVariant: "orange",
    delta: "+18%",
    trend: "up",
    sparkline: [53, 65, 50, 74, 62, 85, 79, 100],
  },
  {
    id: "customers",
    label: "Клиенты",
    value: "1 729",
    icon: "user",
    colorVariant: "blue",
    delta: "+6%",
    trend: "up",
    sparkline: [71, 62, 74, 65, 82, 79, 91, 100],
  },
];

export const HOME_POPULAR_POSITIONS: PopularPosition[] = [
  {
    id: "coffee",
    rank: "01",
    name: "Основной кофе",
    category: "Напитки",
    colorVariant: "orange",
    views: "4820",
    delta: "+12%",
    progressPercent: 100,
    trend: "up",
  },
  {
    id: "soup",
    rank: "02",
    name: "Борщ украинский",
    category: "Основные блюда",
    colorVariant: "blue",
    views: "3270",
    delta: "+8%",
    progressPercent: 78,
    trend: "up",
  },
  {
    id: "lunch",
    rank: "03",
    name: "Бизнес-ланч",
    category: "Меню дня",
    colorVariant: "green",
    views: "2640",
    delta: "+5%",
    progressPercent: 63,
    trend: "up",
  },
  {
    id: "bar",
    rank: "04",
    name: "Бар и напитки",
    category: "Напитки",
    colorVariant: "fuchsia",
    views: "1840",
    delta: "+3%",
    progressPercent: 44,
    trend: "up",
  },
  {
    id: "kids",
    rank: "05",
    name: "Детское меню",
    category: "Для детей",
    colorVariant: "yellow",
    views: "896",
    delta: "−2%",
    progressPercent: 22,
    trend: "down",
  },
];

export const HOME_ORDER_STATUS_META: Record<OrderStatus, { label: string; colorVariant: IndicatorColorTypes }> = {
  new: { label: "Новый", colorVariant: "orange" },
  cooking: { label: "Готовится", colorVariant: "blue" },
  paid: { label: "Оплачен", colorVariant: "green" },
};

export const HOME_RECENT_ORDERS: RecentOrder[] = [
  { id: "12", table: "Стол 12", timeAgo: "только что", items: "Борщ, Пельмени, Компот", sum: "₽1 240", status: "new" },
  { id: "04", table: "Стол 04", timeAgo: "2 мин", items: "Бизнес-ланч ×2", sum: "₽980", status: "cooking" },
  { id: "21", table: "Стол 21", timeAgo: "5 мин", items: "Кофе, Десерт", sum: "₽540", status: "paid" },
  { id: "08", table: "Стол 08", timeAgo: "8 мин", items: "Стейк, Вино, Салат", sum: "₽3 120", status: "paid" },
  { id: "15", table: "Стол 15", timeAgo: "12 мин", items: "Детское меню, Сок", sum: "₽430", status: "paid" },
];

export const HOME_TRAFFIC_BARS: TrafficBar[] = [
  { hour: "9:00", heightPercent: 31 },
  { hour: "10:00", heightPercent: 44 },
  { hour: "11:00", heightPercent: 63 },
  { hour: "12:00", heightPercent: 86 },
  { hour: "13:00", heightPercent: 100, highlight: true },
  { hour: "14:00", heightPercent: 77 },
  { hour: "15:00", heightPercent: 54 },
  { hour: "16:00", heightPercent: 49 },
  { hour: "17:00", heightPercent: 68 },
  { hour: "18:00", heightPercent: 94 },
  { hour: "19:00", heightPercent: 81 },
  { hour: "20:00", heightPercent: 58 },
];

export const HOME_TRAFFIC_LABELS = ["10:00", "13:00", "16:00", "19:00", "22:00"];
