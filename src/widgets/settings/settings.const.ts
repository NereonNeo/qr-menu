import type { IChecklistItem, IConnector, IFormatTag, ITabItem } from "./settings.contract";

export type SettingsTab = "profile" | "notifications" | "security" | "menu-import";

export const SETTINGS_TABS: ITabItem[] = [
  { value: "profile", label: "Профиль", icon: "user" },
  { value: "notifications", label: "Уведомления", icon: "bell" },
  { value: "security", label: "Безопасность", icon: "shield" },
  { value: "menu-import", label: "Импорт меню", icon: "arrow-down-to-line" },
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
