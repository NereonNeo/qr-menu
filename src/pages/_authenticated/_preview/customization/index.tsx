import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import { ColorPicker } from "@/shared/components/color-picker/color-picker.entry";
import { InputPatterns } from "@/shared/const/input-pattern.const";
import { Button } from "@/shared/ui/button";
import { Select } from "@/shared/ui/select/select.component";
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

  return (
    <>
      <ColorPicker
        message={instance("color").message}
        invalid={instance("color").invalid}
        labelText="Pick Color"
        {...register("color", { required: "Введите", pattern: InputPatterns.Color })}
      />
      <Button content="Check" colorVariant="red" disabled={!isValid} />

      <Select
        // icon="loader"
        label="With Bottom Action"
        bottomAction
        onChange={console.log}
        onApprove={console.log}
        onCancel={console.log}
        options={[
          { value: "hello", label: "Yakub", avatar: "true", icon: "box" },
          { value: "hello2", label: "Position", avatar: "test", icon: "box" },
        ]}
      />

      <Select
        label="Base"
        options={[
          { value: "hello", label: "Yakub", avatar: "https://nestjs.com/support.1356a495.png", icon: "box" },
          { value: "hello2", label: "Position", avatar: "https://nestjs.com/support.1356a495.png", icon: "box" },
        ]}
      />

      <Select
        label="Multi Select"
        isMulti
        options={[
          { value: "hello", label: "Yakub", avatar: "true", icon: "box" },
          { value: "hello2", label: "Position", avatar: "test", icon: "box" },
        ]}
      />
    </>
  );
}
