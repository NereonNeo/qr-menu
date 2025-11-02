import { SignUpNames } from "@/entities/auth";
import { SignUpMain, SignUpPrice, SingUpPassword } from "@/features/sign-up";
import { ReactNode } from "@tanstack/react-router";

export const SignUpComponents: Record<SignUpNames, ReactNode> = {
  Main: SignUpMain,
  Password: SingUpPassword,
  Price: SignUpPrice,
};

export const SignUpSteps = Object.keys(SignUpNames) as SignUpNames[];
