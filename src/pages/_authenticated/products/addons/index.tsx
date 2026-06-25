import { createFileRoute } from "@tanstack/react-router";

import { Addons } from "@/widgets/products/products.entry";

export const Route = createFileRoute("/_authenticated/products/addons/")({
  component: AddonsPage,
});

function AddonsPage() {
  return <Addons />;
}
