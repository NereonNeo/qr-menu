import type { IndicatorColorTypes, IndicatorSizeVariantType } from "./indicator.contract";

export const indicatorColorClassNames: Record<IndicatorColorTypes, string> = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-400",
  lime: "bg-lime-500",
  gray: "bg-gray-500",
  fuchsia: "bg-fuchsia-500",
  kelli: "bg-kelli-500",
  red: "bg-red-500",
  green: "bg-green-500",
};

export const indicatorColorSizeVariant: Record<IndicatorSizeVariantType, string> = {
  xs: "size-1.5",
  s: "size-2",
  m: "size-2.5",
  l: "size-3",
  xl: "size-3.5",
  xxl: "size-4",
};
