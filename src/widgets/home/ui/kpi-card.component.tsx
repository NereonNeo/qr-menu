import clsx from "clsx/lite";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

import { Icon } from "@/shared/ui/icon/icon.entry";

import { HOME_ACCENT_CHART_COLORS, HOME_ACCENT_COLOR_CLASSNAMES } from "../home.const";
import type { HomeKpiCard } from "../home.contract";

interface KpiCardProps {
  card: HomeKpiCard;
}

export const KpiCard = (props: KpiCardProps) => {
  const { card } = props;
  const colorClassNames = HOME_ACCENT_COLOR_CLASSNAMES[card.colorVariant];
  const chartColors = HOME_ACCENT_CHART_COLORS[card.colorVariant];
  const chartData = card.sparkline.map((value, index) => ({ index, value }));

  return (
    <div className="bg-white border border-gray-200 rounded-2xl pt-5 flex flex-col gap-3.5">
      <div className="flex items-center justify-between px-5">
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

      <div className="px-5">
        <p className="text-xl font-gotham font-bold text-gray-900">{card.value}</p>
        <span className="text-xs font-gotham font-medium text-gray-500">{card.label}</span>
      </div>

      <div className="flex-1 min-h-12.5">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id={`kpi-gradient-${card.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={chartColors.stroke} stopOpacity={0.35} />
                <stop offset="100%" stopColor={chartColors.stroke} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={chartColors.stroke}
              strokeWidth={2}
              fill={`url(#kpi-gradient-${card.id})`}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
