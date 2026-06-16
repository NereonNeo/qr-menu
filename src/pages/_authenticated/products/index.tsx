import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/products/")({
  beforeLoad: () => {
    throw redirect({ to: "/products/menu" });
  },
});
