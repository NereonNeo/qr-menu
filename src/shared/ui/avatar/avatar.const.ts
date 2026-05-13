import type { IndicatorSizeVariantType } from "../indicator/indicator.entry";
import type { AvatarColorVariantType, AvatarSizeVariantType } from "./avatar.contract";

export const avatarSizeVariantClassNames: Record<AvatarSizeVariantType, string> = {
  xxxs: "size-3.5 text-[6px]/[7.8px]",
  xxs: "size-4 text-[6px]/[7.8px]",
  xs: "size-6 text-xxs",
  s: "size-8 text-sm",
  m: "size-10 text-lg",
  l: "size-14 text-xxl",
  xl: "size-16 text-xxl",
};

export const avatarStyleVariantClassNames: Record<AvatarColorVariantType, string> = {
  primary: "text-primary-600 bg-primary-50",
  kelli: "text-kelli-600 bg-kelli-50",
  blue: "text-blue-600 bg-blue-50",
  violet: "text-violet-600 bg-violet-50",
  pink: "text-pink-600 bg-pink-50",
  yellow: "text-yellow-600 bg-yellow-50",
  orange: "text-orange-600 bg-orange-50",
};

export const iconSizeByAvatarClassNames: Record<AvatarSizeVariantType, string> = {
  xxxs: "size-2.5",
  xxs: "size-2.5",
  xs: "size-4",
  s: "size-5",
  m: "size-6",
  l: "size-7",
  xl: "size-8",
};

export const indicatorSizeByAvatarClassNames: Record<AvatarSizeVariantType, IndicatorSizeVariantType> = {
  xxxs: "xs",
  xxs: "xs",
  xs: "xs",
  s: "s",
  m: "m",
  l: "xl",
  xl: "xxl",
};

export const averageAvatarStyle = "rounded-full flex justify-center items-center font-medium relative";
