import { useRef } from "react";

import clsx from "clsx/lite";
import { Controller, useForm } from "react-hook-form";

import type { IconNameTypes } from "@/shared/const/icon.const";
import { InputPatterns } from "@/shared/const/input-pattern.const";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select/select.entry";
import { TextArea } from "@/shared/ui/textarea";
import { Toggle } from "@/shared/ui/toggle/toggle.component";

import { VENUE_TYPE_OPTIONS } from "../customization.const";
import type { IBrandingForm } from "../customization.contract";
import { SectionCard } from "./section-card.component";

const DEFAULT_VALUES: IBrandingForm = {
  logo: null,
  coverImage: null,
  name: "Café Shopnext",
  description: "Кофе, завтраки и обеды в уютной атмосфере",
  venueType: "cafe",
  instagram: "@cafe_shopnext",
  tiktok: "@cafe_shopnext",
  facebook: "cafe-shopnext",
  phone: "+7 (999) 000-00-00",
  email: "cafe@shopnext.ru",
  address: "ул. Примерная, 1",
  website: "shopnext.ru",
  wifiSsid: "Cafe_Shopnext_Guest",
  wifiPassword: "supersecret",
  wifiVisible: true,
};

const SOCIAL_FIELDS: { name: "instagram" | "tiktok" | "facebook"; icon: IconNameTypes }[] = [
  { name: "instagram", icon: "instagram" },
  { name: "tiktok", icon: "music-2" },
  { name: "facebook", icon: "facebook" },
];

const ImageDropzone = ({
  file,
  onChange,
  wide,
  icon,
  label,
}: {
  file: File | null;
  onChange: (file: File | null) => void;
  wide?: boolean;
  icon: IconNameTypes;
  label: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files?.[0] ?? null);
  };

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className={clsx(
        "relative flex items-center justify-center gap-1.5 bg-gray-100 border border-gray-200 rounded-xl h-24 shrink-0 cursor-pointer overflow-hidden",
        wide ? "w-full flex-col" : "w-24 flex-col",
      )}
    >
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleChange} />
      {file ? (
        <img src={URL.createObjectURL(file)} className="absolute inset-0 size-full object-cover" alt={label} />
      ) : (
        <>
          <Icon name={icon} className="size-4.5 text-gray-400" />
          <span className="text-xs text-gray-400 font-gotham">{label}</span>
        </>
      )}
    </button>
  );
};

export const CustomizationBranding = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<IBrandingForm>({ mode: "onTouched", defaultValues: DEFAULT_VALUES });

  const handleSave = handleSubmit((data) => {
    console.log(data);
    reset(data);
  });

  return (
    <form onSubmit={handleSave} className="flex gap-5 items-start">
      <div className="flex flex-col gap-4 flex-1">
        <SectionCard title="Логотип" description="Иконка заведения, отображается в шапке меню">
          <div className="flex gap-5">
            <Controller
              name="logo"
              control={control}
              render={({ field }) => <ImageDropzone file={field.value} onChange={field.onChange} icon="image" label="Загрузить" />}
            />
            <div className="flex flex-col gap-1.5 flex-1 justify-center">
              <span className="text-xs text-gray-400 font-gotham">Формат: PNG, JPG, SVG</span>
              <span className="text-xs text-gray-400 font-gotham">Размер: 200×200px, до 2МБ</span>
              <Controller
                name="logo"
                control={control}
                render={({ field }) => (
                  <button
                    type="button"
                    onClick={() => field.onChange(null)}
                    className="flex items-center gap-1.5 bg-gray-100 rounded px-3 py-1.5 w-fit cursor-pointer"
                  >
                    <Icon name="trash-2" className="size-3 text-gray-400" />
                    <span className="text-xs text-gray-400 font-gotham">Удалить</span>
                  </button>
                )}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Информация" description="Название и описание заведения">
          <div className="flex flex-col gap-3.5">
            <Controller name="name" control={control} render={({ field }) => <Input label="Название заведения" {...field} />} />
            <Controller name="description" control={control} render={({ field }) => <TextArea label="Описание" rows={3} {...field} />} />
            <Controller
              name="venueType"
              control={control}
              render={({ field }) => (
                <Select
                  label="Тип заведения"
                  options={VENUE_TYPE_OPTIONS}
                  value={VENUE_TYPE_OPTIONS.find((option) => option.value === field.value) ?? null}
                  onChange={(option) => field.onChange((option as { value: string } | null)?.value ?? "")}
                />
              )}
            />
          </div>
        </SectionCard>

        <SectionCard title="Социальные сети" description="Ссылки на страницы заведения в соцсетях">
          <div className="flex flex-col gap-2.5">
            {SOCIAL_FIELDS.map((social) => (
              <div key={social.name} className="flex items-center gap-2.5">
                <span className="flex items-center justify-center size-9 rounded bg-gray-100 shrink-0">
                  <Icon name={social.icon} className="size-4 text-gray-400" />
                </span>
                <Controller name={social.name} control={control} render={({ field }) => <Input wrapperClassName="flex-1" {...field} />} />
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <SectionCard title="Обложка меню" description="Широкий баннер в шапке вашего меню">
          <div className="flex flex-col gap-4">
            <Controller
              name="coverImage"
              control={control}
              render={({ field }) => <ImageDropzone wide file={field.value} onChange={field.onChange} icon="image" label="Загрузить обложку" />}
            />
            <div className="flex gap-4">
              <span className="text-xs text-gray-400 font-gotham">Формат: PNG, JPG</span>
              <span className="text-xs text-gray-400 font-gotham">Рек. размер: 1200×400px</span>
              <span className="text-xs text-gray-400 font-gotham">Макс. размер: 5МБ</span>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Контакты" description="Отображаются в профиле вашего меню">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3.5">
              <Controller name="phone" control={control} render={({ field }) => <Input wrapperClassName="flex-1" label="Телефон" {...field} />} />
              <Controller
                name="email"
                control={control}
                rules={{ pattern: InputPatterns.Email }}
                render={({ field }) => <Input wrapperClassName="flex-1" label="Email" {...field} />}
              />
            </div>
            <div className="flex gap-3.5">
              <Controller name="address" control={control} render={({ field }) => <Input wrapperClassName="flex-1" label="Адрес" {...field} />} />
              <Controller name="website" control={control} render={({ field }) => <Input wrapperClassName="flex-1" label="Сайт" {...field} />} />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="WiFi" description="Данные для подключения гостей к интернету">
          <div className="flex flex-col gap-3.5">
            <Controller name="wifiSsid" control={control} render={({ field }) => <Input label="Название сети (SSID)" left="wifi" {...field} />} />
            <Controller name="wifiPassword" control={control} render={({ field }) => <Input label="Пароль" left="lock" right="eye" {...field} />} />

            <div className="h-px bg-gray-200" />

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <h4 className="text-s font-medium text-gray-900 font-gotham">Показывать WiFi гостям</h4>
                <p className="text-xs text-gray-500 font-gotham">Гости увидят пароль в меню</p>
              </div>
              <Controller name="wifiVisible" control={control} render={({ field: { value, ...field } }) => <Toggle {...field} checked={value} />} />
            </div>
          </div>
        </SectionCard>

        <div className="flex items-center gap-3">
          <Button type="submit" colorVariant="dark" content="Сохранить изменения" disabled={!isDirty} />
          <button
            type="button"
            onClick={() => reset()}
            disabled={!isDirty}
            className="text-s text-gray-500 font-gotham cursor-pointer disabled:cursor-not-allowed disabled:text-gray-300"
          >
            Отменить
          </button>
        </div>
      </div>
    </form>
  );
};
