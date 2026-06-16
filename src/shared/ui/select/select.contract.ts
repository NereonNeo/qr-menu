import { IconNameTypes } from "@/shared/const/icon.const";

export interface ISelectType<T = string> {
  value: T;
  label: string;
  avatar?: string;
  icon?: IconNameTypes;
}
