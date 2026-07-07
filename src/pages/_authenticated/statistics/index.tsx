import { createFileRoute } from "@tanstack/react-router";

import { Statistics } from "@/widgets/statistics/statistics.entry";

export const Route = createFileRoute("/_authenticated/statistics/")({
  component: StatisticsPage,
});

function StatisticsPage() {
  return <Statistics />;
}
