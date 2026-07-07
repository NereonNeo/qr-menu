import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx/lite";

import { ButtonLink } from "@/shared/components/button-link/button-link.entry";
import { Drawer } from "@/shared/ui/drawer/drawer.entry";

import { EditProduct } from "@/features/products/edit-product/edit-product.entry";

import type { IPositionCard } from "@/entities/product/product.entry";
import { ProductCard } from "@/entities/product/product.entry";

type FilterType = "all" | "active" | "hidden";

const MOCK_POSITIONS: IPositionCard[] = [
  {
    id: 1,
    title: "Борщ украинский",
    price: 450,
    img: "https://images.unsplash.com/photo-1682226888147-0bc099bdc5eb?w=400",
    visible: true,
    menuName: "Горячие блюда",
    tags: ["Суп", "Острое"],
    views: 235,
  },
  {
    id: 2,
    title: "Цезарь с курицей",
    price: 520,
    img: "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?w=400",
    visible: true,
    menuName: "Салаты",
    tags: ["Хит"],
    views: 412,
  },
  {
    id: 3,
    title: "Стейк рибай",
    price: 1890,
    img: "https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=400",
    visible: true,
    menuName: "Горячие блюда",
    tags: ["Мясо", "Премиум"],
    views: 189,
  },
  {
    id: 4,
    title: "Тирамису",
    price: 380,
    img: "https://images.unsplash.com/photo-1645562270357-043bb7c98f3e?w=400",
    visible: true,
    menuName: "Десерты",
    tags: ["Десерт"],
    views: 302,
  },
  {
    id: 5,
    title: "Том Ям",
    price: 620,
    img: "https://images.unsplash.com/photo-1554136512-5d996b22f5fa?w=400",
    visible: false,
    menuName: "Горячие блюда",
    tags: ["Суп", "Острое", "Азия"],
    views: 167,
  },
  {
    id: 6,
    title: "Капучино",
    price: 280,
    img: "https://images.unsplash.com/photo-1573074699584-303c79998c3a?w=400",
    visible: true,
    menuName: "Холодные напитки",
    tags: ["Напиток"],
    views: 543,
  },
  {
    id: 7,
    title: "Паста Карбонара",
    price: 490,
    img: "https://images.unsplash.com/photo-1693609930472-cf329a4d691b?w=400",
    visible: true,
    menuName: "Горячие блюда",
    tags: ["Паста", "Хит"],
    views: 358,
  },
  {
    id: 8,
    title: "Чизкейк",
    price: 420,
    img: "https://images.unsplash.com/photo-1600784258105-792db4ea5c3c?w=400",
    visible: false,
    menuName: "Десерты",
    tags: ["Десерт"],
    views: 276,
  },
];

export const Route = createFileRoute("/_authenticated/_preview/products/position/")({
  component: PositionPage,
});

function PositionPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedPosition, setSelectedPosition] = useState<IPositionCard | null>(null);

  const filtered = MOCK_POSITIONS.filter((p) => {
    if (filter === "active") return p.visible;
    if (filter === "hidden") return !p.visible;
    return true;
  });

  const handleEdit = (position: IPositionCard) => {
    setSelectedPosition(position);
    window.ezzyModal["drawer.position"].showModal();
  };

  const filterTabs: { id: FilterType; label: string; count: number }[] = [
    { id: "all", label: "Все", count: MOCK_POSITIONS.length },
    { id: "active", label: "Активные", count: MOCK_POSITIONS.filter((p) => p.visible).length },
    { id: "hidden", label: "Скрытые", count: MOCK_POSITIONS.filter((p) => !p.visible).length },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Drawer id="drawer.position" title="Редактировать позицию">
        {selectedPosition && <EditProduct position={selectedPosition} />}
      </Drawer>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-gotham font-medium">Позиции</h1>
        <ButtonLink sizeVariant="m" content="Добавить позицию" to="/products/position/create" />
      </div>

      <div className="flex items-center gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={clsx(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-s font-gotham font-medium transition-colors",
              filter === tab.id ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300",
            )}
          >
            {tab.label}
            <span className={clsx("text-xxs", filter === tab.id ? "text-white/60" : "text-gray-400")}>{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {filtered.map((position) => (
          <button key={position.id} className="text-left" onClick={() => handleEdit(position)}>
            <ProductCard
              title={position.title}
              price={position.price}
              img={position.img}
              visible={position.visible}
              menuName={position.menuName}
              tags={position.tags}
              views={position.views}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
