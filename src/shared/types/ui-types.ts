export type SizeVariantType = "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type StyleVariantType = "bordered" | "default";

export type ColorVariantType =
  | "white"
  | "primary"
  | "gray"
  | "kelli"
  | "lime"
  | "green"
  | "teal"
  | "cyan"
  | "blue"
  | "indigo"
  | "violet"
  | "fuchsia"
  | "pink"
  | "red"
  | "rose"
  | "orange"
  | "yellow"
  | "beige";

export type IndicatorColorTypes = Extract<ColorVariantType, "blue" | "orange" | "yellow" | "lime" | "gray" | "fuchsia" | "kelli" | "red" | "green">;

export type AverageSizeVariantType = Extract<SizeVariantType, "m" | "s">;

export type TabStyleVariantTypes = "filled" | "bordered" | "base";

//! l = Large
//! m = Medium
//! s = Small
//! xs = Extra Small
