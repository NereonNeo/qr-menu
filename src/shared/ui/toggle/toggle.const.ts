import { AverageSizeVariantType } from "@/shared/types/ui.contract";

import { ToggleElementTypes } from "./toggle.contract";

export const toggleSizeVariantClassNames: Record<AverageSizeVariantType, Record<ToggleElementTypes, string>> = {
  s: {
    label: "text-s",
    support: "text-s",
    toggler: "w-9 h-5 after:size-4",
  },
  m: {
    label: "text-l",
    support: "text-s",
    toggler: "w-11 h-6 after:size-5",
  },
};
