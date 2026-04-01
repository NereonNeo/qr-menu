import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import { ColorPicker } from "@/shared/components/color-picker/color-picker.entry";
import { InputPatterns } from "@/shared/const/input-pattern.const";
import { Button } from "@/shared/ui/button";
import { formErrorsHandler } from "@/shared/utils/form-error-adapter";

export const Route = createFileRoute("/_authenticated/_preview/customization/")({
  component: CustomizationPage,
});

function CustomizationPage() {
  const {
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const instance = formErrorsHandler(errors);
  console.log(instance("color"));

  // console.log(instance("color").invalid);
  return (
    <>
      <ColorPicker
        message={instance("color").message}
        invalid={instance("color").invalid}
        labelText="Pick Color"
        {...register("color", { required: "Введите", pattern: InputPatterns.Color })}
      />
      <Button content="Check" colorVariant="red" disabled={!isValid} />
    </>
  );
}
