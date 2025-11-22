import { createFileRoute, redirect } from "@tanstack/react-router";

import { Layout } from "@/widgets/layout";

export const Route = createFileRoute("/_authenticated")({
  pendingComponent: () => <span>Loading</span>,

  loader: async ({ location, context }) => {
    const { isLogged } = context.authentication;
    const isLoggedUser = await isLogged();

    if (!isLoggedUser) {
      throw redirect({
        to: "/sign-up",
        search: {
          from: location.href,
        },
      });
    }
  },
  component: Layout,
});
