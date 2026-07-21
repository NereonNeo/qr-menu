import { SizeVariantType } from "./ui.types";

export type ButtonStyleVariantType = "element" | "hover" | "focused" | "disabled";
export type ButtonColorVariant = "beige" | "stroke-gray" | "stroke-gray-red" | "gray" | "white" | "red" | "dark";
export type ButtonSizeVariant = Extract<SizeVariantType, "xs" | "s" | "m" | "l">;
