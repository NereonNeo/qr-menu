import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink } from "@/shared/components/button-link";
import { Link } from "@/shared/ui/link/link";

import { ProductCard } from "@/entities/product";

export const Route = createFileRoute("/_authenticated/_preview/products/")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <div className="grid grid-flow-row gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-gotham font-medium">Продукты</h1>
        <ButtonLink sizeVariant="m" content="Создать продукт" to="/products/create" />
      </div>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        <Link to="/products/edit/$id" params={{ id: "1" }}>
          <ProductCard />
        </Link>
        <Link to="/products/edit/$id" params={{ id: "2" }}>
          <ProductCard />
        </Link>
        <Link to="/products/edit/$id" params={{ id: "3" }}>
          <ProductCard />
        </Link>
        <Link to="/products/edit/$id" params={{ id: "4" }}>
          <ProductCard />
        </Link>
        <Link to="/products/edit/$id" params={{ id: "5" }}>
          <ProductCard />
        </Link>
        <Link to="/products/edit/$id" params={{ id: "6" }}>
          <ProductCard />
        </Link>
        <Link to="/products/edit/$id" params={{ id: "7" }}>
          <ProductCard />
        </Link>
      </div>
    </div>
  );
}
