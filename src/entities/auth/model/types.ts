import React from "react";

import { Control, UseFormRegister } from "react-hook-form";

export enum SignUpNames {
  Main = "Main",
  Password = "Password",
}

export interface ISignUpSteps {
  control: Control<ISignUp, unknown>;
  register: UseFormRegister<ISignUp>;
  children: React.ReactNode;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface ISignIn {
  email: string;
  password: string;
}
