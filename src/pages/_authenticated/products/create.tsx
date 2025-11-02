import { ProductCreate } from "@/widgets/products";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/products/create")({
  component: ProductCreatePage,
});

function ProductCreatePage() {
  return <ProductCreate />;
}
