import { createFileRoute } from "@tanstack/react-router";

import { ProductEdit } from "@/widgets/products";

export const Route = createFileRoute("/_authenticated/products/edit/$id")({
  component: ProductEditPage,
});

function ProductEditPage() {
  return <ProductEdit />;
}
