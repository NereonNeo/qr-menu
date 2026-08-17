import { useMemo, useState } from "react";

import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import { SessionStorageNames } from "@/shared/const/web-storage.const";
import { useAuth } from "@/shared/hooks/use-auth";
import { useSessionStorage } from "@/shared/hooks/use-session-storage";
import { Button } from "@/shared/ui/button/button.entry";

import { ISignUp, ISignUpSteps, SignUpNames } from "@/entities/auth/auth.entry";

import { SignUpComponents, SignUpSteps } from "../common/sign-up.const";

interface IStorageType extends ISignUp {
  activeStep: number;
}

export const SignUp = () => {
  const navigate = useNavigate();
  const [sessionStorageValue, setSessionStorageItem, resetSessionStorageItem] = useSessionStorage<IStorageType>(SessionStorageNames.SignUp);
  const activeStep = sessionStorageValue?.activeStep || 0;
  const [currentView, setCurrentView] = useState<SignUpNames>(SignUpSteps[activeStep]);
  const Component: React.ComponentType<ISignUpSteps> = useMemo(() => SignUpComponents[currentView], [currentView]);
  const currentStepIndex = useMemo(() => SignUpSteps.indexOf(currentView), [currentView]);
  const isLastStepIndex = currentStepIndex === SignUpSteps.length - 1;
  const isFirstStepIndex = currentStepIndex > 0;
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isValid },
    register,
  } = useForm<ISignUp>({
    defaultValues: {
      name: sessionStorageValue?.name,
      email: sessionStorageValue?.email,
      password: sessionStorageValue?.password,
      phoneNumber: sessionStorageValue?.phoneNumber,
    },
  });

  const formValues = getValues();

  const onSubmit = handleSubmit(async () => {
    const { plan } = await signIn();
    resetSessionStorageItem();

    if (!plan) return navigate({ to: "/plan" });
    navigate({ to: "/" });
  });

  const handleNextStep = () => {
    if (isLastStepIndex) return;

    setSessionStorageItem({ ...formValues, activeStep: currentStepIndex + 1 });
    setCurrentView(SignUpSteps[currentStepIndex + 1]);
  };

  const handlePrevStep = () => {
    if (!isFirstStepIndex) return;

    setSessionStorageItem({ ...formValues, activeStep: currentStepIndex - 1 });
    setCurrentView(SignUpSteps[currentStepIndex - 1]);
  };

  return (
    <form className="h-full" onSubmit={onSubmit}>
      <Component register={register} control={control}>
        <div className="grid grid-flow-row text-center gap-2">
          {isLastStepIndex && <Button content="Создать 🚀" disabled={!isValid} colorVariant="beige" sizeVariant="m" type="submit" />}
          {!isLastStepIndex && <Button content="Продолжить" colorVariant="beige" sizeVariant="m" disabled={!isValid} onClick={handleNextStep} />}
          {isFirstStepIndex && <Button content="Назад" colorVariant="beige" sizeVariant="m" type="button" onClick={handlePrevStep} />}
        </div>
      </Component>
    </form>
  );
};
