import { useState } from "react";

import { useRouter } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Dropzone } from "@/shared/ui/dropzone";
import { Icon } from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Toggle } from "@/shared/ui/toggle/toggle.component";
import { formErrorsHandler } from "@/shared/utils/form-error-adapter";

import type { IMenuCreateForm } from "@/entities/menu/menu.entry";

export const MenuCreate = () => {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryInput, setCategoryInput] = useState("");
  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IMenuCreateForm>({
    mode: "onTouched",
    defaultValues: { visible: true },
  });

  const errorsInit = formErrorsHandler(errors);

  const handleCreate = handleSubmit((data) => {
    console.log({ ...data, image, categories });
  });

  const handleImageChange = (files: File[]) => {
    if (files[0]) setImage(files[0]);
  };

  const handleAddCategory = () => {
    const trimmed = categoryInput.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories((prev) => [...prev, trimmed]);
      setCategoryInput("");
      setShowCategoryInput(false);
    }
  };

  const handleRemoveCategory = (cat: string) => {
    setCategories((prev) => prev.filter((c) => c !== cat));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-gotham font-medium">Создать меню</h1>
        <div className="flex gap-2">
          <Button type="button" colorVariant="stroke-gray" sizeVariant="m" content="Отмена" onClick={() => router.history.back()} />
          <Button left="check" sizeVariant="m" form="menu-create-form" disabled={!isValid} type="submit" content="Создать меню" />
        </div>
      </div>

      <form id="menu-create-form" onSubmit={handleCreate}>
        <div className="flex flex-col gap-5">
          <div>
            <Input
              label="Название меню:"
              placeholder="Например: Летнее меню"
              invalid={errorsInit("title").invalid}
              message={errorsInit("title").message}
              {...register("title", { required: "Пожалуйста заполните название" })}
            />
            <p className="mt-1.5 text-sm text-gray-500 font-gotham">Отображается в QR-меню у посетителей</p>
          </div>

          <div>
            <Label text="Баннер меню:" className="mb-2" />
            {image ? (
              <div className="relative h-32 rounded-lg overflow-hidden">
                <img src={URL.createObjectURL(image)} className="w-full h-full object-cover" alt="Баннер меню" />
                <Button className="absolute top-2 right-2" left="trash" type="button" onClick={() => setImage(null)} />
              </div>
            ) : (
              <Dropzone showIcon onChangeCustom={handleImageChange} wrapperClassName="w-full h-32" />
            )}
          </div>

          <div>
            <Label text="Категории:" className="mb-2" />
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleRemoveCategory(cat)}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-red-50 hover:text-red-500 transition-colors font-gotham"
                  >
                    {cat} ×
                  </button>
                ))}
              </div>
            )}
            {categories.length === 0 && !showCategoryInput && (
              <div className="flex items-center gap-2.5 bg-gray-100 border border-gray-200 rounded-md h-11 px-4 mb-2">
                <Icon name="tag" className="size-4 text-gray-400" />
                <span className="text-sm text-gray-400 font-gotham">Категории ещё не добавлены</span>
              </div>
            )}
            {showCategoryInput ? (
              <div className="flex gap-2">
                <Input
                  placeholder="Название категории..."
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddCategory();
                    }
                    if (e.key === "Escape") setShowCategoryInput(false);
                  }}
                />
                <Button type="button" left="check" colorVariant="stroke-gray" content="Добавить" onClick={handleAddCategory} />
              </div>
            ) : (
              <Button type="button" left="plus" colorVariant="stroke-gray" content="Добавить категорию" onClick={() => setShowCategoryInput(true)} />
            )}
          </div>

          <div>
            <Label text="Видимость меню:" className="mb-2" />
            <div className="bg-white border border-gray-200 rounded-md px-4 py-3.5">
              <Controller
                name="visible"
                control={control}
                render={({ field }) => (
                  <Toggle
                    sizeVariant="m"
                    label="Меню видно посетителям"
                    support="Меню будет доступно по ссылке сразу после создания"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label text="Позиции:" />
              <Button type="button" left="plus" colorVariant="stroke-gray" content="Добавить позицию" disabled />
            </div>
            <p className="mb-4 text-sm text-gray-500 font-gotham">Позиции добавляются после сохранения меню</p>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-[156px] h-[200px] bg-gray-100 rounded-lg overflow-hidden shrink-0 animate-pulse">
                  <div className="h-[120px] bg-gray-200 rounded-t-lg" />
                  <div className="p-3 flex flex-col gap-2">
                    <div className="h-2.5 bg-gray-200 rounded" />
                    <div className="h-2.5 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
