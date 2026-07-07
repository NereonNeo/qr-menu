import type { CardStyle } from "./customization.contract";

export type CustomizationTab = "appearance" | "branding" | "qr";

export const CUSTOMIZATION_TABS: { value: CustomizationTab; label: string }[] = [
  { value: "appearance", label: "Внешний вид" },
  { value: "branding", label: "Брендинг" },
  { value: "qr", label: "QR-код" },
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
