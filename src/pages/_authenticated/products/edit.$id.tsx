import { ProductEdit } from "@/widgets/products";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/products/edit/$id")({
  component: ProductEditPage,
});

function ProductEditPage() {
  return <ProductEdit />;
}
