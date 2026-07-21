import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon";

import { HOME_ACCENT_COLOR_CLASSNAMES } from "../home.const";
import type { HomeKpiCard } from "../home.contract";

interface KpiCardProps {
  card: HomeKpiCard;
}

export const KpiCard = (props: KpiCardProps) => {
  const { card } = props;
  const colorClassNames = HOME_ACCENT_COLOR_CLASSNAMES[card.colorVariant];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3.5">
      <div className="flex items-center justify-between">
        <div className={clsx("size-9 rounded-lg flex items-center justify-center", colorClassNames.chipBg)}>
          <Icon name={card.icon} className={clsx("size-4", colorClassNames.chipText)} />
        </div>
        <div className={clsx("flex items-center gap-1 rounded-full px-2 py-1", card.trend === "up" ? "bg-green-50" : "bg-red-50")}>
          <Icon
            name={card.trend === "up" ? "trending-up" : "trending-down"}
            className={clsx("size-3", card.trend === "up" ? "text-green-600" : "text-[#f04438]")}
          />
          <span className={clsx("text-xxs font-gotham font-semibold", card.trend === "up" ? "text-green-600" : "text-[#f04438]")}>{card.delta}</span>
        </div>
      </div>

      <span className="text-xl font-gotham font-bold text-gray-900">{card.value}</span>
      <span className="text-xs font-gotham font-medium text-gray-500">{card.label}</span>

      <div className="flex items-end gap-1 h-8.5">
        {card.sparkline.map((heightPercent, index) => (
          <div key={index} className={clsx("flex-1 rounded-xs", colorClassNames.barBg)} style={{ height: `${heightPercent}%` }} />
        ))}
      </div>
    </div>
  );
};
