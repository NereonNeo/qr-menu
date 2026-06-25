import clsx from "clsx/lite";
import { Eye, MoreHorizontal, Pencil, Utensils } from "lucide-react";

import { Badge } from "@/shared/ui/badge/badge.entry";
import { Indicator } from "@/shared/ui/indicator/indicator.entry";

import type { IPositionCard } from "../product.contract";

interface IProductCardProps extends Omit<IPositionCard, "id"> {}

export const ProductCard = ({ title, price, img, visible, menuName, tags, views }: IProductCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100">
      {/* Image area */}
      <div className="relative h-36 overflow-hidden">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />

        {/* Status badge */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-gray-900/50 rounded-full px-2.5 py-1">
          <Indicator color={visible ? "green" : "red"} sizeVariant="xs" />
          <span className="font-gotham text-xxs text-white">{visible ? "Активен" : "Скрыт"}</span>
        </div>

        {/* Price tag */}
        <div className="absolute top-2.5 right-2.5 bg-gray-900/80 rounded-lg px-2.5 py-1 text-xs font-gotham font-semibold text-white">{price} ₽</div>
      </div>

      {/* Body */}
      <div className="p-3 flex flex-col gap-2">
        {/* Title */}
        <p className="font-gotham font-medium text-m text-gray-900 truncate">{title}</p>

        {/* Menu category row */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-gotham">
          <Utensils size={12} />
          <span className="truncate">{menuName}</span>
        </div>

        {/* Tags row */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} content={tag} colorVariant="gray" sizeVariant="xs" />
            ))}
          </div>
        )}

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          {/* Views */}
          <div className="flex items-center gap-1 text-xs text-gray-400 font-gotham">
            <Eye size={14} />
            <span>{views ?? 0}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1">
            <button type="button" className={clsx("p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500")}>
              <Pencil size={14} />
            </button>
            <button type="button" className={clsx("p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500")}>
              <MoreHorizontal size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
