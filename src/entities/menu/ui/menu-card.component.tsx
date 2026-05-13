import { Badge } from "@/shared/ui/badge/badge.entry";
import { Indicator } from "@/shared/ui/indicator/indicator.entry";

interface MenuCardProps {
  banner: string;
  views: number;
  visible: boolean;
  tags: string[];
}

export const MenuCard = () => {
  return (
    <div className="w-62.5 h-80 bg-gray-300 animate-pulse rounded-lg">
      <p>Холодные напитки</p>
      <Indicator color="green" />
      <p>Просмотры: 10</p>
      <div className="flex">
        <p>Теги: </p>
        <Badge content="Хит" colorVariant="green" />
        <Badge content="Навинка" />
      </div>
    </div>
  );
};
