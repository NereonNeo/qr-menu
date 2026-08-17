import clsx from "clsx/lite";

import { Button } from "@/shared/ui/button/button.entry";
import { Icon } from "@/shared/ui/icon/icon.entry";

import { HOME_ACCENT_COLOR_CLASSNAMES, HOME_POPULAR_POSITIONS } from "../home.const";

export const PopularPositionsCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-1">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-m font-gotham font-semibold text-gray-900">Популярные позиции</h2>
          <span className="text-xs font-gotham text-gray-400">За последние 7 дней</span>
        </div>
        <Button content="Все позиции" right="arrow-right" colorVariant="beige" sizeVariant="xs" />
      </div>

      {HOME_POPULAR_POSITIONS.map((position, index) => {
        const colorClassNames = HOME_ACCENT_COLOR_CLASSNAMES[position.colorVariant];

        return (
          <div key={position.id}>
            {index > 0 && <div className="h-px bg-gray-100" />}
            <div className="flex items-center gap-3.5 py-3">
              <span className="text-s font-gotham font-bold text-gray-300 w-6 shrink-0">{position.rank}</span>
              <div className={clsx("size-11 rounded-xl flex items-center justify-center shrink-0", colorClassNames.chipBg)}>
                <Icon name="utensils" className={clsx("size-5", colorClassNames.chipText)} />
              </div>

              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-s font-gotham font-semibold text-gray-900">{position.name}</span>
                    <span className="text-xs font-gotham text-gray-400">{position.category}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-s font-gotham font-semibold text-gray-900">{position.views}</span>
                    <span className={clsx("text-xs font-gotham font-semibold", position.trend === "up" ? "text-green-600" : "text-[#f04438]")}>
                      {position.delta}
                    </span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div className={clsx("h-full rounded-full", colorClassNames.barBg)} style={{ width: `${position.progressPercent}%` }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
