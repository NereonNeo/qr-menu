import { ISignUpSteps, SignUpNames } from "@/entities/auth";
import { SignUpMain, SignUpPrice, SingUpPassword } from "@/features/sign-up";

export const SignUpComponents: Record<SignUpNames, (props: ISignUpSteps) => JSX.Element> = {
  Main: SignUpMain,
  Password: SingUpPassword,
  Price: SignUpPrice,
};

export const SignUpSteps = Object.keys(SignUpNames) as SignUpNames[];
