import { createFileRoute } from "@tanstack/react-router";

import { ChoosePlan } from "@/features/choose-plan/choose-plan.entry";

export const Route = createFileRoute("/_authenticated/plan/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ChoosePlan />;
}
