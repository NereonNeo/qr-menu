import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink } from "@/shared/components/button-link/button-link.entry";
import { Link } from "@/shared/ui/link/link";

import { MenuCard } from "@/entities/menu/menu.entry";

export const Route = createFileRoute("/_authenticated/_preview/products/")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <div className="grid grid-flow-row gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-gotham font-medium">Меню</h1>
        <ButtonLink sizeVariant="m" content="Создать меню" to="/products/create" />
      </div>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        <Link to="/products/edit/$id" params={{ id: "1" }}>
          <MenuCard />
        </Link>
      </div>
    </div>
  );
}
