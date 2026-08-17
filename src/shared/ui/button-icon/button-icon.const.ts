import type { ButtonColorVariant, ButtonSizeVariant } from "@/shared/types/button.contract";

export const iconButtonSizeVariantClassNames: Record<ButtonSizeVariant, string> = {
  xs: "h-8 px-2",
  s: "h-9 px-2.5",
  m: "h-10 px-3",
  l: "h-11 px-3.5",
};

export const iconButtonBadgeStyleVariantsClassNames: Record<ButtonColorVariant, string> = {
  beige: "shadow-white",
  "stroke-gray": "shadow-white",
  "stroke-gray-red": "shadow-white",
  gray: "shadow-white",
  white: "shadow-white",
  red: "shadow-white",
  dark: "shadow-white",
};
