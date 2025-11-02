import { LinkSizeVariantTypes, LinkStateVariantTypes, LinkStyleVariantTypes } from "./link-types";

export const linkSizeVariantClassNames: Record<LinkSizeVariantTypes, string> = {
  xs: "text-xs",
  s: "text-s",
  m: "text-m",
  l: "text-l",
  xl: "text-xl",
};

export const linkStyleVariantClassNames: Record<LinkStyleVariantTypes, Record<LinkStateVariantTypes, string>> = {
  primary: {
    element: "text-primary-500",
    hover: "hover:text-primary-600 hover:decoration-primary-300 hover:underline",
    focus: "active:decoration-primary-600 active:underline",
  },

  gray: {
    element: "text-gray-600",
    hover: "hover:decoration-gray-300 hover:underline",
    focus: "active:decoration-gray-600 active:underline",
  },
};
