import { JSX } from "react";

import { SignUpMain, SignUpPrice, SingUpPassword } from "@/features/sign-up";

import { ISignUpSteps, SignUpNames } from "@/entities/auth";

export const SignUpComponents: Record<SignUpNames, (props: ISignUpSteps) => JSX.Element> = {
  Main: SignUpMain,
  Password: SingUpPassword,
  Price: SignUpPrice,
};

export const SignUpSteps = Object.keys(SignUpNames) as SignUpNames[];
