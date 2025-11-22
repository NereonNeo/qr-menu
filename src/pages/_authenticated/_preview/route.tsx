import { Outlet, createFileRoute } from "@tanstack/react-router";

import { Preview } from "@/widgets/preview";

export const Route = createFileRoute("/_authenticated/_preview")({
  component: () => (
    <>
      <main className="2xl:mr-2xl-preview xl:mr-xl-preview md:mr-md-preview xl:p-10 p-5">
        <Outlet />
      </main>
      <Preview />
    </>
  ),
});
