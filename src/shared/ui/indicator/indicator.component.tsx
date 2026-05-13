import clsx from "clsx/lite";

import { indicatorColorClassNames, indicatorColorSizeVariant } from "./indicator.const";
import type { IndicatorColorTypes, IndicatorSizeVariantType } from "./indicator.contract";

interface IIndicatorProps {
  color?: IndicatorColorTypes;
  sizeVariant?: IndicatorSizeVariantType;
  className?: string;
}

export const Indicator = (props: IIndicatorProps) => {
  const { color = "gray", sizeVariant = "xs", className } = props;

  return <div className={clsx(indicatorColorClassNames[color], indicatorColorSizeVariant[sizeVariant], className, "rounded-full")} />;
};
