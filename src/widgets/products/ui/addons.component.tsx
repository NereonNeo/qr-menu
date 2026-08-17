import { useState } from "react";

import clsx from "clsx/lite";
import { useEzzyModal } from "ezzy-modal";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button/button.entry";
import { Drawer } from "@/shared/ui/drawer/drawer.entry";
import { Dropzone } from "@/shared/ui/dropzone/dropzone.entry";
import { Input } from "@/shared/ui/input/input.entry";
import { Label } from "@/shared/ui/label/label.entry";
import type { ISelectType } from "@/shared/ui/select/select.entry";
import { Select } from "@/shared/ui/select/select.entry";
import { TextArea } from "@/shared/ui/textarea/textarea.entry";
import { Toggle } from "@/shared/ui/toggle/toggle.entry";
import { formErrorsHandler } from "@/shared/utils/form-error-adapter";

import type { IAddon, IAddonCreateForm } from "@/entities/addon/addon.entry";
import { AddonCard } from "@/entities/addon/addon.entry";

const DRAWER_ID = "drawer.addons";

const GROUP_OPTIONS: ISelectType[] = [
  { value: "toppings", label: "Топпинги" },
  { value: "sauces", label: "Соусы" },
  { value: "bread", label: "Хлеб" },
  { value: "drinks", label: "Напитки" },
];

const MOCK_ADDONS: IAddon[] = [
  { id: 1, name: "Дополнительный сыр", price: 80, group: "Топпинги", visible: true },
  { id: 2, name: "Бекон", price: 120, group: "Топпинги", visible: true },
  { id: 3, name: "Острый соус", price: 40, group: "Соусы", visible: true },
  { id: 4, name: "Сырный соус", price: 40, group: "Соусы", visible: false },
  { id: 5, name: "Сметана", price: 30, group: "Соусы", visible: true },
  { id: 6, name: "Хлеб чесночный", price: 60, group: "Хлеб", visible: true },
];

type FilterTab = "all" | "active" | "hidden";

const FILTER_TABS: { value: FilterTab; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "active", label: "Активные" },
  { value: "hidden", label: "Скрытые" },
];

export const Addons = () => {
  const { openModal, closeModal } = useEzzyModal(DRAWER_ID);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterTab>("all");
  const [bannerFile, setBannerFile] = useState<File | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<IAddonCreateForm>({
    mode: "onTouched",
    defaultValues: { visible: true, minSelection: "0", maxSelection: "1" },
  });

  const errorsInit = formErrorsHandler(errors);

  const handleCreate = handleSubmit((data) => {
    console.log({ ...data, bannerFile });
    reset();
    setBannerFile(null);
    closeModal();
  });

  const handleCancel = () => {
    reset();
    setBannerFile(null);
    closeModal();
  };

  const filtered = MOCK_ADDONS.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || (filter === "active" ? a.visible : !a.visible);
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Drawer id={DRAWER_ID} title="Создать добавку" sizeVariant="m">
        <form id="addon-create-form" onSubmit={handleCreate} className="flex flex-col gap-5">
          <Input
            label="Название"
            placeholder="Например: Дополнительный сыр"
            invalid={errorsInit("name").invalid}
            message={errorsInit("name").message}
            {...register("name", { required: "Пожалуйста заполните название" })}
          />

          <Controller
            name="group"
            control={control}
            render={({ field }) => (
              <Select
                menuPosition="absolute"
                label="Группа добавок"
                options={GROUP_OPTIONS}
                placeholder="Выберите или создайте группу"
                onChange={(option) => field.onChange((option as ISelectType)?.value ?? "")}
              />
            )}
          />
          <p className="-mt-3 text-xs text-gray-400 font-gotham">Группа объединяет добавки в блоки при выборе (напр. «Соусы», «Топпинги»)</p>

          <Input
            label="Цена"
            type="number"
            placeholder="0"
            right="share"
            invalid={errorsInit("price").invalid}
            message={errorsInit("price").message}
            {...register("price", { required: "Пожалуйста укажите цену" })}
          />

          <div>
            <Label text="Ограничения выбора" className="mb-2" />
            <div className="grid grid-cols-2 gap-3">
              <Input label="Минимум" type="number" placeholder="0" {...register("minSelection")} />
              <Input label="Максимум" type="number" placeholder="1" {...register("maxSelection")} />
            </div>
          </div>

          <div>
            <Label text="Видимость" className="mb-2" />
            <div className="bg-white border border-gray-200 rounded-md px-4 py-3.5">
              <Controller
                name="visible"
                control={control}
                render={({ field }) => (
                  <Toggle sizeVariant="m" label="Активна" support="Добавка видна посетителям" checked={field.value} onChange={field.onChange} />
                )}
              />
            </div>
          </div>

          <TextArea label="Описание (необязательно)" rows={3} placeholder="Краткое описание добавки..." {...register("description")} />

          <div>
            <Label text="Баннер (необязательно)" className="mb-2" />
            {bannerFile ? (
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <div className="w-20 h-14 rounded-lg overflow-hidden shrink-0">
                  <img src={URL.createObjectURL(bannerFile)} className="w-full h-full object-cover" alt="preview" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 font-gotham truncate">{bannerFile.name}</p>
                  <p className="text-xs text-gray-400 font-gotham">{(bannerFile.size / 1024).toFixed(0)} KB</p>
                </div>
                <Button type="button" left="x" onClick={() => setBannerFile(null)} />
              </div>
            ) : (
              <Dropzone showIcon wrapperClassName="w-full h-28" onChangeCustom={(files) => files[0] && setBannerFile(files[0])} />
            )}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <Button type="button" colorVariant="stroke-gray" content="Отмена" onClick={handleCancel} />
            <Button left="check" type="submit" form="addon-create-form" disabled={!isValid} content="Создать добавку" />
          </div>
        </form>
      </Drawer>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-gotham font-medium">Добавки</h1>
        <div className="flex items-center gap-3">
          <Input left="search" placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)} wrapperClassName="w-64" />
          <Button left="plus" content="Создать добавку" onClick={openModal} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1 bg-white border border-gray-200 rounded-lg p-1">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setFilter(tab.value)}
              className={clsx(
                "px-3 py-1.5 rounded-md text-sm font-gotham font-medium transition-colors",
                filter === tab.value ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-700",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-gray-400 font-gotham text-sm">Добавки не найдены</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
          {filtered.map((addon) => (
            <AddonCard key={addon.id} addon={addon} />
          ))}
        </div>
      )}

      {filtered.length > 0 && (
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm text-gray-400 font-gotham">
            Показано {filtered.length} из {MOCK_ADDONS.length} добавок
          </span>
        </div>
      )}
    </>
  );
};
