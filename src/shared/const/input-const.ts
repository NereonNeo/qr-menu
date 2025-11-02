import { AverageSizeVariantType } from "../types/ui-types";

export const inputSizeVariantClassNames: Record<AverageSizeVariantType, string> = {
  m: "h-11 text-m",
  s: "h-10 text-s font-medium",
};

export const inputPlaceholderClassName = "placeholder:text-gray-400";

// Input Pseudo className
export const inputInvalidClassName = "border-red-300 focus-within:ring-3 focus-within:ring-red-100";
export const inputDefaultClassName = "border-gray-300 focus-within:ring-3 focus-within:ring-gray-100 text-gray-700";

//  NotDisabled styles
export const inputDisabledClassName = "disabled:bg-white cursor-not-allowed text-gray-300";
