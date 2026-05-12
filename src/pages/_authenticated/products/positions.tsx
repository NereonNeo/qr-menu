import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/products/positions")({
  component: PositionsPage,
});

function PositionsPage() {
  return (
    <div className="grid grid-flow-row gap-10">
      <h1 className="text-3xl font-gotham font-medium">Позиции</h1>
    </div>
  );
}
