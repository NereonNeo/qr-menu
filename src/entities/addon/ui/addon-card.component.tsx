import clsx from "clsx/lite";

import type { BadgeColorVariantType } from "@/shared/ui/badge/badge.contract";
import { Badge } from "@/shared/ui/badge/badge.entry";
import { Icon } from "@/shared/ui/icon";

import type { IAddon } from "../addon.contract";

const GROUP_BADGE_COLOR: Record<string, BadgeColorVariantType> = {
  Топпинги: "blue",
  Соусы: "yellow",
  Хлеб: "lime",
  Напитки: "orange",
};

const getGroupColor = (group: string): BadgeColorVariantType => GROUP_BADGE_COLOR[group] ?? "gray";

interface AddonCardProps {
  addon: IAddon;
  onEdit?: () => void;
}

export const AddonCard = ({ addon, onEdit }: AddonCardProps) => {
  return (
    <div className="w-60 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col">
      <div className="relative h-[150px] bg-gray-200 shrink-0">
        {addon.img && <img src={addon.img} alt={addon.name} className="w-full h-full object-cover" />}

        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-black/30 rounded-full px-2.5 py-1">
          <span className={clsx("size-1.5 rounded-full", addon.visible ? "bg-green-500" : "bg-red-400")} />
          <span className="text-white font-gotham text-[10px]">{addon.visible ? "Активна" : "Скрыта"}</span>
        </div>

        <div className="absolute top-2.5 right-2.5 bg-black/80 rounded-lg px-2.5 py-1">
          <span className="text-white font-gotham text-[13px] font-semibold">+{addon.price} ₽</span>
        </div>
      </div>

      <div className="p-3 flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-900 font-gotham truncate">{addon.name}</p>

        <div className="flex items-center gap-1.5">
          <Icon name="tag" className="size-3 text-gray-400" />
          <span className="text-xs text-gray-400 font-gotham">{addon.group}</span>
        </div>

        <div className="flex items-center justify-between">
          <Badge content={addon.group} colorVariant={getGroupColor(addon.group)} sizeVariant="xs" />
          <div className="flex gap-1">
            <button type="button" onClick={onEdit} className="p-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
              <Icon name="pencil" className="size-3.5 text-gray-600" />
            </button>
            <button type="button" className="p-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
              <Icon name="ellipsis-vertical" className="size-3.5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
