import type { IconNameTypes } from "@/shared/const/icon.const";

export type ComingSoonVariant = "overlay" | "inline";

export interface IComingSoonProps {
  variant?: ComingSoonVariant;
  title?: string;
  description?: string;
  icon?: IconNameTypes;
  badge?: string;
  className?: string;
}
