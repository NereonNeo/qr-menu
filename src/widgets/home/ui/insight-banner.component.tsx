import { Icon } from "@/shared/ui/icon";

export const InsightBanner = () => {
  return (
    <div className="rounded-2xl bg-primary-50 border border-primary-100 px-5 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3.5">
        <div className="size-10 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
          <Icon name="sparkles" className="size-5 text-white" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-xxs font-gotham font-bold text-primary-700 uppercase">Умный совет</span>
          <span className="text-s font-gotham font-medium text-gray-700">
            «Борщ украинский» — лидер просмотров, но отсутствует в меню «Обед». Добавьте позицию, чтобы поднять выручку.
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 shrink-0">
        <button type="button" className="flex items-center gap-1.5 rounded-lg bg-gray-900 px-4 py-2.5">
          <Icon name="plus" className="size-4 text-white" />
          <span className="text-xs font-gotham font-semibold text-white">Добавить</span>
        </button>
        <button type="button" className="size-9 rounded-lg flex items-center justify-center">
          <Icon name="x" className="size-4 text-primary-700" />
        </button>
      </div>
    </div>
  );
};
