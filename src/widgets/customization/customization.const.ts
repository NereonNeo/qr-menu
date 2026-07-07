import type { ISelectType } from "@/shared/ui/select/select.entry";

export type CustomizationTab = "profile" | "theme" | "fonts" | "buttons";

export const CUSTOMIZATION_TABS: { value: CustomizationTab; label: string }[] = [
  { value: "profile", label: "Профиль" },
  { value: "theme", label: "Тема" },
  { value: "fonts", label: "Шрифты" },
  { value: "buttons", label: "Кнопки" },
];

export const FONT_OPTIONS: ISelectType[] = [
  { value: "Inter", label: "Inter" },
  { value: "Roboto", label: "Roboto" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Playfair Display", label: "Playfair Display" },
  { value: "Poppins", label: "Poppins" },
  { value: "Nunito", label: "Nunito" },
];

export const BUTTON_RADIUS_OPTIONS: ISelectType[] = [
  { value: "0", label: "Острые — 0px" },
  { value: "8", label: "Скруглённые — 8px" },
  { value: "12", label: "Округлые — 12px" },
  { value: "9999", label: "Пилюля — 9999px" },
];

export const BUTTON_STYLE_OPTIONS: ISelectType[] = [
  { value: "filled", label: "Заливка" },
  { value: "outlined", label: "Контур" },
  { value: "ghost", label: "Прозрачные" },
];
