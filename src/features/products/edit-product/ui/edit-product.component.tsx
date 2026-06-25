import { Controller, useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import type { ISelectType } from "@/shared/ui/select/select.entry";
import { Select } from "@/shared/ui/select/select.entry";
import { TextArea } from "@/shared/ui/textarea";
import { Toggle } from "@/shared/ui/toggle/toggle.component";
import { formErrorsHandler } from "@/shared/utils/form-error-adapter";

import type { IPositionCard, IPositionEditForm } from "@/entities/product/product.entry";

const MENU_OPTIONS: ISelectType[] = [
  { value: "hot", label: "Горячие блюда" },
  { value: "salads", label: "Салаты" },
  { value: "desserts", label: "Десерты" },
  { value: "cold_drinks", label: "Холодные напитки" },
  { value: "snacks", label: "Закуски" },
];

interface EditProductProps {
  position: IPositionCard;
  onSave?: (data: IPositionEditForm) => void;
  onDelete?: () => void;
}

export const EditProduct = ({ position, onSave, onDelete }: EditProductProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IPositionEditForm>({
    mode: "onTouched",
    defaultValues: {
      title: position.title,
      price: String(position.price),
      weight: "",
      description: "",
      visible: position.visible,
    },
  });

  const errorsInit = formErrorsHandler(errors);

  const handleSave = handleSubmit((data) => {
    onSave?.(data);
  });

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-5">
      <Input
        label="Название:"
        placeholder="Введите название позиции"
        invalid={errorsInit("title").invalid}
        message={errorsInit("title").message}
        {...register("title", { required: "Введите название" })}
      />

      <Input
        label="Цена (₽):"
        type="number"
        placeholder="0"
        invalid={errorsInit("price").invalid}
        message={errorsInit("price").message}
        {...register("price", { required: "Введите цену" })}
      />

      <Input label="Вес (г):" type="number" placeholder="0" {...register("weight")} />

      <TextArea label="Описание:" rows={3} placeholder="Описание позиции..." {...register("description")} />

      <Controller
        name="visible"
        control={control}
        render={({ field }) => (
          <Toggle sizeVariant="m" label="Видимость" support="Позиция видна в меню" checked={field.value} onChange={field.onChange} />
        )}
      />

      <Controller
        name="menuId"
        control={control}
        render={({ field }) => (
          <Select
            menuPosition="absolute"
            label="Добавление в меню:"
            options={MENU_OPTIONS}
            placeholder="Выберите меню..."
            defaultValue={MENU_OPTIONS.find((o) => o.label === position.menuName) ?? null}
            onChange={field.onChange}
          />
        )}
      />

      <div className="flex gap-3 pt-2">
        <Button type="submit" content="Сохранить" left="check" colorVariant="beige" sizeVariant="m" disabled={!isValid} className="flex-1" />
        {onDelete && <Button type="button" content="Удалить" left="trash" colorVariant="stroke-gray-red" sizeVariant="m" onClick={onDelete} />}
      </div>
    </form>
  );
};
