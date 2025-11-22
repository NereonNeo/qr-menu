import { RouterProvider, createRouter } from "@tanstack/react-router";

import { useAuth } from "@/shared/hooks/use-auth";

import { routeTree } from "../../routes/routeTree.gen";

const router = createRouter({ routeTree, context: { authentication: undefined! } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const Router = () => {
  const authentication = useAuth();
  return <RouterProvider router={router} context={{ authentication }} />;
};
