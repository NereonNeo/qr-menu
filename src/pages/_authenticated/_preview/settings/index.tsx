import { createFileRoute } from "@tanstack/react-router";

import { SettingsPanel } from "@/widgets/settings/settings.entry";

export const Route = createFileRoute("/_authenticated/_preview/settings/")({
  component: () => <SettingsPanel />,
});
