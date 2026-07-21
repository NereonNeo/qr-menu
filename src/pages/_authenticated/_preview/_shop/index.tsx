import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/widgets/home/home.entry";

export const Route = createFileRoute("/_authenticated/_preview/_shop/")({
  component: HomePage,
});

function HomePage() {
  return <Home />;
}
