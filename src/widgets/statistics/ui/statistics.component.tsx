import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon";

import { STAT_KPI_CARDS, STAT_WEEK_BARS } from "../statistics.const";

export const Statistics = () => {
  return (
    <main className="xl:p-10 p-5 h-full relative">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xxl font-gotham font-medium text-gray-900">Статистика</h1>
          <p className="text-s text-gray-500 font-gotham mt-1">Аналитика вашего ресторана</p>
        </div>
        <button type="button" className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-gray-200 bg-white">
          <Icon name="calendar" className="size-4 text-gray-500" />
          <span className="text-xs font-gotham text-gray-700">Последние 30 дней</span>
          <Icon name="chevron-down" className="size-4 text-gray-500" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-5">
        {STAT_KPI_CARDS.map((card) => (
          <div key={card.id} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 font-gotham">{card.label}</span>
              <div className="size-8 rounded-lg bg-primary-50 flex items-center justify-center">
                <Icon name={card.icon} className="size-4 text-primary-500" />
              </div>
            </div>
            <span className="text-xl font-gotham font-semibold text-gray-900">{card.value}</span>
            <div className={clsx("flex items-center gap-1", card.trend === "up" ? "text-green-600" : "text-[#f04438]")}>
              <Icon name={card.trend === "up" ? "trending-up" : "trending-down"} className="size-3.5" />
              <span className="text-xs font-gotham">{card.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-m font-gotham font-medium text-gray-900">Просмотры за неделю</h2>
            <p className="text-xs text-gray-400 font-gotham mt-1">Данные за последние 7 дней</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary-500" />
            <span className="text-xs text-gray-500 font-gotham">Просмотры</span>
          </div>
        </div>

        <div className="flex items-end gap-4 h-55 bg-gray-50 rounded-xl p-4">
          {STAT_WEEK_BARS.map((bar) => (
            <div
              key={bar.day}
              className={clsx(
                "flex-1 rounded-t-md",
                bar.highlight ? "bg-gradient-to-b from-primary-300 to-primary-700" : "bg-gradient-to-b from-primary-100 to-primary-500",
              )}
              style={{ height: `${bar.heightPercent}%` }}
            />
          ))}
        </div>

        <div className="flex gap-4">
          {STAT_WEEK_BARS.map((bar) => (
            <span key={bar.day} className={clsx("flex-1 text-center text-xs font-gotham", bar.highlight ? "text-primary-500" : "text-gray-400")}>
              {bar.day}
            </span>
          ))}
        </div>
      </div>

      {/* TODO Нужно перенести в отдельный компонент coming-soon */}
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-gray-50/70">
        <div className="bg-white rounded-3xl shadow-md px-13 py-11 flex flex-col items-center gap-5 max-w-110 text-center">
          <div className="size-20 rounded-full bg-primary-50 flex items-center justify-center">
            <Icon name="hammer" className="size-9 text-primary-500" />
          </div>
          <h3 className="text-xl font-gotham font-semibold text-gray-900">В разработке</h3>
          <p className="text-s text-gray-500 font-gotham leading-relaxed">
            Раздел статистики находится в разработке. Скоро здесь появятся аналитика просмотров, заказов и доходов.
          </p>
          <span className="px-5 py-2 rounded-full bg-primary-50 text-primary-500 text-xs font-gotham font-medium">
            Ожидайте в следующем обновлении
          </span>
        </div>
      </div>
    </main>
  );
};
