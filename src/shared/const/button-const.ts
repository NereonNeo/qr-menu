import { ButtonColorVariant, ButtonStyleVariantType } from "../types/button-types";

export const buttonStyleVariantsClassNames: Record<ButtonColorVariant, Record<ButtonStyleVariantType, string>> = {
  beige: {
    disabled: "disabled:bg-primary-50 disabled:text-primary-300 disabled:border-transparent",
    hover: "hover:bg-primary-50  hover:border-primary-300",
    element: "bg-primary-50 border border-solid border-transparent text-primary-600",
    focused:
      "focus-visible:bg-primary-50 focus-visible:ring-3 focus-visible:ring-primary-100 focus-visible:border-primary-300 active:enabled:bg-primary-50 active:enabled:ring-3 active:enabled:ring-primary-100",
  },
  "stroke-gray": {
    disabled: "disabled:bg-white  disabled:border-gray-200 disabled:text-gray-200",
    hover: "hover:bg-white  hover:border-gray-400",
    element: "bg-white border border-solid border-gray-300 text-gray-600",
    focused:
      "focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-gray-100 focus-visible:border-gray-400 active:enabled:bg-white active:enabled:ring-3 active:enabled:ring-gray-100",
  },

  "stroke-gray-red": {
    disabled: "disabled:bg-white  disabled:border-gray-200 disabled:text-gray-200",
    hover: "hover:bg-white hover:border-red-400 hover:text-red-600",
    element: "bg-white border border-solid border-gray-300 text-gray-600",
    focused:
      "focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-red-100 focus-visible:border-red-400 active:enabled:bg-white active:enabled:ring-3 active:enabled:ring-red-100",
  },

  gray: {
    disabled: "disabled:bg-gray-50  disabled:border-transparent disabled:text-gray-300",
    hover: "hover:bg-gray-50  hover:border-gray-300",
    element: "bg-gray-100 border border-solid border-transparent text-gray-600",
    focused:
      "focus-visible:bg-gray-50 focus-visible:ring-3 focus-visible:ring-gray-100 focus-visible:border-gray-300 active:enabled:bg-gray-50 active:enabled:ring-3 active:enabled:ring-gray-100",
  },

  white: {
    disabled: "disabled:text-gray-300 disabled:border-transparent",
    hover: "hover:border-gray-300",
    element: "border border-solid border-transparent text-gray-600",
    focused: "focus-visible:ring-3 focus-visible:ring-gray-100 focus-visible:border-gray-300 active:enabled:ring-3 active:enabled:ring-gray-100",
  },

  red: {
    disabled: "disabled:text-white disabled:bg-red-100",
    hover: "hover:bg-red-600",
    element: "bg-red-400 text-white",
    focused:
      "focus-visible:bg-red-600 focus-visible:ring-3 focus-visible:ring-red-100 active:enabled:bg-red-600 active:enabled:ring-3 active:enabled:ring-red-100",
  },
};
