import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_preview/_shop/")({
  component: () => <>Hello /_authenticated/_preview/shop/! Main</>,
});
