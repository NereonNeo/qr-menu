import { createFileRoute } from "@tanstack/react-router";

import { MenuCreate } from "@/widgets/products/products.entry";

export const Route = createFileRoute("/_authenticated/products/menu/create")({
  component: MenuCreatePage,
});

function MenuCreatePage() {
  return <MenuCreate />;
}
