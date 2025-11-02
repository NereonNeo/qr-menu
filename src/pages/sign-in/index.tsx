import { SignIn } from "@/widgets/sign-in";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in/")({
  component: SignInPage,
});

function SignInPage() {
  return <SignIn />;
}
