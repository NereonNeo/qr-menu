import { createFileRoute } from "@tanstack/react-router";

import { SignUp } from "@/widgets/sing-up";

export const Route = createFileRoute("/sign-up/")({
  component: SingUpPage,
});

function SingUpPage() {
  return (
    <div className="h-dvh">
      <SignUp />
    </div>
  );
}
