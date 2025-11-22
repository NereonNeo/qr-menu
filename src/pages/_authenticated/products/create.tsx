import { createFileRoute } from "@tanstack/react-router";

import { ProductCreate } from "@/widgets/products";

export const Route = createFileRoute("/_authenticated/products/create")({
  component: ProductCreatePage,
});

function ProductCreatePage() {
  return <ProductCreate />;
}
