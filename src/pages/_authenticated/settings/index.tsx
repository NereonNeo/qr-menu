import { createFileRoute } from "@tanstack/react-router";

import { SettingsPanel } from "@/widgets/settings/settings.entry";

export const Route = createFileRoute("/_authenticated/settings/")({
  component: () => (
    <main className="xl:p-10 p-5 h-full">
      <SettingsPanel />
    </main>
  ),
});
