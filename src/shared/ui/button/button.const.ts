import { ButtonSizeVariant } from "@/shared/types/button.contract";

export const buttonSizeVariantClassNames: Record<"default", Record<ButtonSizeVariant, string>> = {
  default: {
    xs: "h-8 px-2",
    s: "h-9 px-3.5",
    m: "h-10 px-4",
    l: "h-11 px-[18px] text-l font-medium",
  },
};
