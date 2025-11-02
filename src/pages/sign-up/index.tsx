import { SignUp } from "@/widgets/sing-up";
import { createFileRoute } from "@tanstack/react-router";

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
