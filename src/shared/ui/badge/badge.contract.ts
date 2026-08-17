import type { ColorVariantType, IndicatorColorTypes, SizeVariantType } from "@/shared/types/ui.contract";

export type BadgeSizeVariantType = Extract<SizeVariantType, "xs" | "s" | "m">;
export type BadgeColorVariantType = Extract<ColorVariantType, "white"> | IndicatorColorTypes;
export type BadgeStyleVariantType = "element";
