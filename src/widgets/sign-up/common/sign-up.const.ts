import { JSX } from "react";

import { SignUpMain } from "@/features/auth/sign-up-main/sign-up-main.entry";
import { SignUpPassword } from "@/features/auth/sign-up-password/sign-up-password.entry";

import { ISignUpSteps, SignUpNames } from "@/entities/auth/auth.entry";

export const SignUpComponents: Record<SignUpNames, (props: ISignUpSteps) => JSX.Element> = {
  Main: SignUpMain,
  Password: SignUpPassword,
};

export const SignUpSteps = Object.keys(SignUpNames) as SignUpNames[];
