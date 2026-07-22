import type { IconNameTypes } from "@/shared/const/icon.const";

export interface IChecklistItem {
  label: string;
  state: "included" | "partial" | "excluded";
}

export interface IConnector {
  name: string;
  initials: string;
  color: string;
}

export interface IFormatTag {
  label: string;
}

export interface ITabItem {
  value: string;
  label: string;
  icon: IconNameTypes;
}

export type QrModuleStyle = "square" | "rounded" | "dots";

export interface IQrDesignForm {
  codeColor: string;
  bgColor: string;
  bgTransparent: boolean;
  logo: File | null;
  showLogo: boolean;
  moduleStyle: QrModuleStyle;
}

export interface IQrTable {
  id: string;
  number: number;
  seats: number;
  url: string;
  active: boolean;
}
