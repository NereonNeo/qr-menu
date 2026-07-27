import { ButtonIcon } from "@/shared/ui/button-icon/button-icon.entry";
import { Button } from "@/shared/ui/button/button.entry";
import { Icon } from "@/shared/ui/icon/icon.entry";

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
        <Button colorVariant="dark" left="plus" content="Добавить" />
        <ButtonIcon icon="x" colorVariant="beige" sizeVariant="s" />
      </div>
    </div>
  );
};
