import type { ColorVariantType, SizeVariantType } from "@/shared/types/ui.types";

export type AvatarSizeVariantType = Extract<SizeVariantType, "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl">;
export type AvatarColorVariantType = Extract<ColorVariantType, "primary" | "kelli" | "blue" | "violet" | "pink" | "yellow" | "orange">;
