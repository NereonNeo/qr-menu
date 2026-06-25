import { createFileRoute } from "@tanstack/react-router";

import { PositionCreate } from "@/widgets/products/products.entry";

export const Route = createFileRoute("/_authenticated/products/position/create")({
  component: PositionCreatePage,
});

function PositionCreatePage() {
  return <PositionCreate />;
}
