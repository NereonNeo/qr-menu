import type { AvatarSizeVariantType } from "../avatar/avatar.entry";
import type { BadgeColorVariantType, BadgeSizeVariantType, BadgeStyleVariantType } from "./badge.contract";

export const badgesSizeVariantClassNames: Record<BadgeSizeVariantType, string> = {
  xs: "min-h-5.5 py-1 px-2 text-xxs",
  s: "min-h-6 px-2 py-1 text-xs",
  m: "min-h-6.5 py-1 px-3 text-sm",
};

export const avatarSizeVariantByBadges: Record<BadgeSizeVariantType, AvatarSizeVariantType> = {
  xs: "xxxs",
  s: "xxs",
  m: "xxs",
};

export const badgeStyleVariantsClassNames: Record<BadgeColorVariantType, Record<BadgeStyleVariantType, string>> = {
  gray: {
    element: "bg-gray-100 text-gray-600",
  },

  white: {
    element: "bg-white text-gray-600 border border-1 border-gray-100",
  },

  blue: {
    element: "bg-blue-50 text-blue-700",
  },

  orange: {
    element: "bg-orange-50 text-orange-700",
  },

  yellow: {
    element: "bg-yellow-50 text-yellow-700",
  },

  lime: {
    element: "bg-lime-50 text-lime-700",
  },

  fuchsia: {
    element: "bg-fuchsia-50 text-fuchsia-700",
  },

  kelli: {
    element: "bg-kelli-50 text-kelli-700",
  },

  red: {
    element: "bg-red-50 text-red-700",
  },

  green: {
    element: "bg-green-50 text-green-700",
  },
};
