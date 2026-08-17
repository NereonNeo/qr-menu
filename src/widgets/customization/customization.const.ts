import type { ISelectType } from "@/shared/ui/select/select.entry";
import type { ITab } from "@/shared/ui/tabs/tabs.entry";

import type { CardStyle } from "./customization.contract";

export type CustomizationTab = "appearance" | "branding";

export const CUSTOMIZATION_TABS: ITab<CustomizationTab>[] = [
  { value: "appearance", label: "Внешний вид", icon: "palette" },
  { value: "branding", label: "Брендинг", icon: "image" },
];

export const ACCENT_COLOR_PRESETS: string[] = [
  "#111111",
  "#2563EB",
  "#16A34A",
  "#DC2626",
  "#7C3AED",
  "#0891B2",
  "#D97706",
  "#BE185D",
  "#059669",
  "#FF8400",
];

export const FONT_STYLE_OPTIONS: { value: string; label: string; sub: string }[] = [
  { value: "Inter", label: "Inter", sub: "Современный · Читаемый" },
  { value: "Playfair Display", label: "Playfair Display", sub: "Классический · Элегантный" },
  { value: "JetBrains Mono", label: "JetBrains Mono", sub: "Технический · Уникальный" },
];

export const CARD_STYLE_OPTIONS: { value: CardStyle; label: string; radius: number }[] = [
  { value: "sharp", label: "Острые", radius: 0 },
  { value: "soft", label: "Мягкие", radius: 8 },
  { value: "round", label: "Круглые", radius: 20 },
];

export const VENUE_TYPE_OPTIONS: ISelectType[] = [
  { value: "cafe", label: "Кафе" },
  { value: "restaurant", label: "Ресторан" },
  { value: "bar", label: "Бар" },
  { value: "bakery", label: "Пекарня" },
];
