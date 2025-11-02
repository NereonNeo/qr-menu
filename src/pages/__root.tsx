import { useAuth } from "@/shared/hooks/use-auth";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Fragment } from "react";

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
