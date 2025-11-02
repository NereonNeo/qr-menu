import React from "react";
import { Control, UseFormRegister } from "react-hook-form";
import { PricePlan } from "../price-plan";

export enum SignUpNames {
  Main = "Main",
  Password = "Password",
  Price = "Price",
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
  pricePlan: PricePlan;
}

export interface ISignIn {
  email: string;
  password: string;
}
