import { useState } from "react";

import { useRouter } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button/button.entry";
import { Dropzone } from "@/shared/ui/dropzone/dropzone.entry";
import { Input } from "@/shared/ui/input/input.entry";
import { Label } from "@/shared/ui/label/label.entry";
import type { ISelectType } from "@/shared/ui/select/select.entry";
import { Select } from "@/shared/ui/select/select.entry";
import { TextArea } from "@/shared/ui/textarea/textarea.entry";
import { Toggle } from "@/shared/ui/toggle/toggle.entry";
import { formErrorsHandler } from "@/shared/utils/form-error-adapter";

import type { IPositionCreateForm } from "@/entities/product/product.entry";

const MENU_OPTIONS: ISelectType[] = [
  { value: "hot", label: "Горячие блюда" },
  { value: "salads", label: "Салаты" },
  { value: "desserts", label: "Десерты" },
  { value: "cold_drinks", label: "Холодные напитки" },
  { value: "snacks", label: "Закуски" },
];

export const PositionCreate = () => {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IPositionCreateForm>({
    mode: "onTouched",
    defaultValues: {
      visible: true,
      inStock: true,
    },
  });

  const errorsInit = formErrorsHandler(errors);

  const handleCreate = handleSubmit((data) => {
    console.log({ ...data, tags, images });
  });

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleImagesChange = (files: File[]) => {
    setImages((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (lastModified: number) => {
    setImages((prev) => prev.filter((f) => f.lastModified !== lastModified));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-gotham font-medium">Создание позиции</h1>
        <div className="flex gap-2">
          <Button type="button" colorVariant="stroke-gray" sizeVariant="m" content="Отмена" onClick={() => router.history.back()} />
          <Button left="check" sizeVariant="m" form="position-create-form" disabled={!isValid} type="submit" content="Сохранить" />
        </div>
      </div>

      <form id="position-create-form" onSubmit={handleCreate}>
        <div className="flex flex-col gap-5">
          <Input
            label="Название позиции:"
            placeholder="Например: Борщ украинский"
            invalid={errorsInit("title").invalid}
            message={errorsInit("title").message}
            {...register("title", { required: "Пожалуйста заполните название" })}
          />

          <div>
            <Label text="Видимость:" className="mb-2" />
            <div className="bg-white border border-gray-200 rounded-md px-4 py-3.5">
              <Controller
                name="visible"
                control={control}
                render={({ field }) => (
                  <Toggle
                    sizeVariant="m"
                    label="Позиция активна"
                    support="Позиция видна посетителям в QR-меню"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          <Controller
            name="menuId"
            control={control}
            render={({ field }) => (
              <Select
                menuPosition="absolute"
                label="Привязать к меню: (опционально)"
                options={MENU_OPTIONS}
                placeholder="Выберите меню"
                onChange={field.onChange}
              />
            )}
          />

          <div>
            <Label text="Теги:" className="mb-2" />
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-red-50 hover:text-red-500 transition-colors font-gotham"
                  >
                    {tag} ×
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <Input
                placeholder="Добавить тег..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
              />
              <Button type="button" left="plus" colorVariant="stroke-gray" content="Добавить" onClick={handleAddTag} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Цена (₽):"
              type="number"
              placeholder="0"
              invalid={errorsInit("price").invalid}
              message={errorsInit("price").message}
              {...register("price", { required: "Пожалуйста укажите цену" })}
            />
            <Input label="Вес (г):" type="number" placeholder="0" {...register("weight")} />
          </div>

          <div>
            <Label text="Пищевая ценность:" className="mb-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Input label="Калории (ккал):" type="number" placeholder="0" {...register("calories")} />
              <Input label="Белки (г):" type="number" placeholder="0" {...register("protein")} />
              <Input label="Углеводы (г):" type="number" placeholder="0" {...register("carbs")} />
              <Input label="Жиры (г):" type="number" placeholder="0" {...register("fat")} />
            </div>
            <p className="mt-1.5 text-xs text-gray-500 font-gotham">Укажите пищевую ценность на 100г продукта</p>
          </div>

          <div>
            <Label text="Фотографии позиции:" className="mb-2" />
            <div className="flex gap-3">
              <Dropzone wrapperClassName="min-w-72 min-h-32" multiple showIcon onChangeCustom={handleImagesChange} />
              <div className="flex gap-3 overflow-x-auto">
                {images.map((file) => (
                  <div key={file.lastModified} className="h-32 w-32 rounded-md overflow-hidden relative shrink-0">
                    <Button onClick={() => handleRemoveImage(file.lastModified)} className="absolute top-2 right-2" left="trash" />
                    <img src={URL.createObjectURL(file)} className="h-full w-full object-cover" alt={file.name} />
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-1.5 text-xs text-gray-500 font-gotham">Загрузите несколько фотографий. Первое изображение будет основным.</p>
          </div>

          <div>
            <Label text="Наличие:" className="mb-2" />
            <div className="bg-white border border-gray-200 rounded-md px-4 py-3.5">
              <Controller
                name="inStock"
                control={control}
                render={({ field }) => (
                  <Toggle
                    sizeVariant="m"
                    label="Есть в наличии"
                    support="Позиция доступна для заказа посетителями"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          <TextArea
            label="Описание позиции:"
            rows={4}
            placeholder="Опишите позицию для посетителей. Например: состав, способ приготовления, особенности подачи..."
            {...register("description")}
          />
        </div>
      </form>
    </>
  );
};
