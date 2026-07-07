import { createFileRoute } from "@tanstack/react-router";

import { CustomizationPanel } from "@/widgets/customization/customization.entry";

export const Route = createFileRoute("/_authenticated/_preview/customization/")({
  component: CustomizationPage,
});

function CustomizationPage() {
  return <CustomizationPanel />;
}
