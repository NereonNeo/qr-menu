import { createFileRoute } from "@tanstack/react-router";

import { SignIn } from "@/widgets/sign-in";

export const Route = createFileRoute("/sign-in/")({
  component: SignInPage,
});

function SignInPage() {
  return <SignIn />;
}
