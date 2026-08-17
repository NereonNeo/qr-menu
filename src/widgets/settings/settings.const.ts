import type { IconNameTypes } from "@/shared/const/icon.const";
import type { ITab } from "@/shared/ui/tabs/tabs.entry";

import type { IChecklistItem, IConnector, IFormatTag, IQrTable, QrModuleStyle } from "./settings.contract";

export type SettingsTab = "profile" | "notifications" | "security" | "menu-import" | "qr";

export const SETTINGS_TABS: ITab<SettingsTab>[] = [
  { value: "profile", label: "Профиль", icon: "user" },
  { value: "notifications", label: "Уведомления", icon: "bell" },
  { value: "security", label: "Безопасность", icon: "shield" },
  { value: "menu-import", label: "Импорт меню", icon: "arrow-down-to-line" },
  { value: "qr", label: "QR-код", icon: "scan-line" },
];

export const IMPORT_FORMAT_TAGS: IFormatTag[] = [{ label: "PDF" }, { label: "CSV" }, { label: "XLSX" }, { label: "JSON" }];

export const MENU_CONNECTORS: IConnector[] = [
  { name: "iiko", initials: "ii", color: "#2563eb" },
  { name: "R-Keeper", initials: "RK", color: "#dc2626" },
  { name: "Poster", initials: "Po", color: "#7c3aed" },
  { name: "Syrve", initials: "Sy", color: "#059669" },
  { name: "Jowi", initials: "Jo", color: "#d97706" },
  { name: "Другой QR", initials: "?", color: "#6b7280" },
];

export const MENU_IMPORT_CHECKLIST: IChecklistItem[] = [
  { label: "Названия и описания позиций", state: "included" },
  { label: "Категории и структура меню", state: "included" },
  { label: "Цены и единицы измерения", state: "included" },
  { label: "Теги и метки позиций", state: "included" },
  { label: "Фотографии (при наличии в источнике)", state: "partial" },
  { label: "История заказов и отзывы", state: "excluded" },
];

export const QR_CODE_COLOR_PRESETS: string[] = ["#131313", "#FF8400", "#1D4ED8", "#0E7A4B", "#7C3AED", "#B91C1C"];

export const QR_BG_COLOR_PRESETS: string[] = ["#FFFFFF", "#F9F5EF", "#F2F3F0", "#111111"];

export const QR_MODULE_STYLE_OPTIONS: { value: QrModuleStyle; label: string; icon: IconNameTypes }[] = [
  { value: "square", label: "Квадраты", icon: "square" },
  { value: "rounded", label: "Скруглённые", icon: "squircle" },
  { value: "dots", label: "Точки", icon: "circle-dot" },
];

export const MOCK_QR_TABLES: IQrTable[] = [
  { id: "1", number: 1, seats: 4, url: "shopnext.menu/t/1", active: true },
  { id: "2", number: 2, seats: 2, url: "shopnext.menu/t/2", active: true },
  { id: "3", number: 3, seats: 6, url: "shopnext.menu/t/3", active: true },
  { id: "4", number: 4, seats: 4, url: "shopnext.menu/t/4", active: false },
  { id: "5", number: 5, seats: 2, url: "shopnext.menu/t/5", active: true },
  { id: "6", number: 6, seats: 8, url: "shopnext.menu/t/6", active: true },
];
