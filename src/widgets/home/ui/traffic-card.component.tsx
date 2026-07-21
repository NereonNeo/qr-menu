import clsx from "clsx/lite";

import { HOME_TRAFFIC_BARS, HOME_TRAFFIC_LABELS } from "../home.const";

export const TrafficCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-m font-gotham font-semibold text-gray-900">Трафик по часам</h2>
          <span className="text-xs font-gotham text-gray-400">Пик в 13:00 и 19:00</span>
        </div>
        <span className="text-xxs font-gotham font-bold text-primary-700 bg-primary-50 rounded-full px-2.5 py-1">Сейчас</span>
      </div>

      <div className="flex items-end gap-1.5 h-25">
        {HOME_TRAFFIC_BARS.map((bar, index) => (
          <div
            key={index}
            className={clsx("flex-1 rounded-xs", bar.highlight ? "bg-primary-500" : "bg-primary-100")}
            style={{ height: `${bar.heightPercent}%` }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        {HOME_TRAFFIC_LABELS.map((label) => (
          <span key={label} className="text-xxs font-gotham text-gray-400">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};
