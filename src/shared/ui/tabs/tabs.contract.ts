import type { IconNameTypes } from "@/shared/const/icon.const";

export interface ITab<T extends string> {
  value: T;
  label: string;
  icon: IconNameTypes;
}

export interface ITabsProps<T extends string> {
  tabs: ITab<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}
