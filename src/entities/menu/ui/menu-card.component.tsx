import { Badge } from "@/shared/ui/badge/badge.entry";
import { Indicator } from "@/shared/ui/indicator/indicator.entry";

interface MenuCardProps {
  name: string;
  banner: string;
  views: number;
  visible: boolean;
  tags: string[];
}

export const MenuCard = ({ name, banner, views, visible, tags }: MenuCardProps) => {
  return (
    <div className="relative w-62.5 h-80 rounded-lg overflow-hidden shadow">
      <img src={banner} alt={name} className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent" />

      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-gray-900/50 rounded-full px-2.5 py-1">
        <Indicator color={visible ? "green" : "red"} sizeVariant="xs" />
        <span className="font-gotham text-xxs text-white">{visible ? "Активен" : "Скрыт"}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-1.5">
        <p className="font-gotham font-medium text-m text-white truncate">{name}</p>
        <p className="font-gotham text-xs text-gray-400">{views} просмотров</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-0.5">
            {tags.map((tag) => (
              <Badge key={tag} content={tag} colorVariant="orange" sizeVariant="xs" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
