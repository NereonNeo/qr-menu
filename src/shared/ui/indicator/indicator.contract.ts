import { ColorVariantType, SizeVariantType } from "@/shared/types/ui.types";

export type IndicatorColorTypes = Extract<ColorVariantType, "blue" | "orange" | "yellow" | "lime" | "gray" | "fuchsia" | "kelli" | "red" | "green">;
export type IndicatorSizeVariantType = Extract<SizeVariantType, "xs" | "s" | "m" | "l" | "xl" | "xxl">;
