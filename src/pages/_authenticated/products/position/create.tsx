import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/products/position/create")({
  component: PositionCreatePage,
});

function PositionCreatePage() {
  return <h1>PositionCreate</h1>;
}
