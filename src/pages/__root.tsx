import { Fragment } from "react";

import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { useAuth } from "@/shared/hooks/use-auth";

type AuthContext = ReturnType<typeof useAuth>;
type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <Fragment>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </Fragment>
  ),
});
