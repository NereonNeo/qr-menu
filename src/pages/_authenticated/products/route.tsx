import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="xl:p-10 p-5 h-full">
      <Outlet />
    </main>
  );
}
