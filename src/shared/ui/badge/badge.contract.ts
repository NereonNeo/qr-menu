import type { ColorVariantType, IndicatorColorTypes, SizeVariantType } from "@/shared/types/ui.types";

export type BadgeSizeVariantType = Extract<SizeVariantType, "xs" | "s" | "m">;
export type BadgeColorVariantType = Extract<ColorVariantType, "white"> | IndicatorColorTypes;
export type BadgeStyleVariantType = "element";
