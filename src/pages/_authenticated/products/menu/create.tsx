import { createFileRoute } from "@tanstack/react-router";

import { ProductCreate } from "@/widgets/products/products.entry";

export const Route = createFileRoute("/_authenticated/products/menu/create")({
  component: ProductCreatePage,
});

function ProductCreatePage() {
  return <ProductCreate />;
}
