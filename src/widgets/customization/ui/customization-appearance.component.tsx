import clsx from "clsx/lite";
import { Controller, useForm } from "react-hook-form";

import { ColorPicker } from "@/shared/components/color-picker/color-picker.component";
import { InputPatterns } from "@/shared/const/input-pattern.const";
import { Button } from "@/shared/ui/button";
import { Toggle } from "@/shared/ui/toggle/toggle.component";

import { ACCENT_COLOR_PRESETS, CARD_STYLE_OPTIONS, FONT_STYLE_OPTIONS } from "../customization.const";
import type { ICustomizationForm } from "../customization.contract";

const DEFAULT_VALUES: ICustomizationForm = {
  accentColor: "#FF8400",
  fontFamily: "Inter",
  cardStyle: "soft",
  darkMode: false,
};

export const CustomizationAppearance = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<ICustomizationForm>({ mode: "onTouched", defaultValues: DEFAULT_VALUES });

  const handleSave = handleSubmit((data) => {
    console.log(data);
    reset(data);
  });

  return (
    <form onSubmit={handleSave} className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 overflow-y-auto flex flex-col">
        <section className="flex gap-8 px-7 py-6 bg-white border-b border-gray-200">
          <div className="flex flex-col gap-1.5 w-[220px] shrink-0">
            <h3 className="text-s font-medium text-gray-900 font-gotham">Акцентный цвет</h3>
            <p className="text-xs text-gray-500 font-gotham">Основной цвет кнопок и активных элементов меню</p>
          </div>

          <Controller
            name="accentColor"
            control={control}
            rules={{ pattern: InputPatterns.Color }}
            render={({ field }) => (
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex flex-wrap gap-2.5">
                  {ACCENT_COLOR_PRESETS.map((color) => {
                    const isSelected = field.value === color;
                    return (
                      <button
                        key={color}
                        aria-selected={isSelected}
                        type="button"
                        onClick={() => field.onChange(color)}
                        className={clsx(`rounded-[11px] cursor-pointer aria-selected:outline-2 outline-offset-2`)}
                        style={{ outlineColor: (isSelected && color) || undefined }}
                      >
                        <span className="block size-9 rounded-md" style={{ backgroundColor: color }} />
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2.5">
                  <ColorPicker
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    // message={instance("color").message}
                    // invalid={instance("color").invalid}
                  />
                </div>
              </div>
            )}
          />
        </section>

        <section className="flex gap-8 px-7 py-6 bg-white border-b border-gray-200">
          <div className="flex flex-col gap-1.5 w-[220px] shrink-0">
            <h3 className="text-s font-medium text-gray-900 font-gotham">Типографика</h3>
            <p className="text-xs text-gray-500 font-gotham">Шрифт для названий блюд и описаний</p>
          </div>

          <Controller
            name="fontFamily"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col gap-2 flex-1">
                {FONT_STYLE_OPTIONS.map((option) => {
                  const isSelected = field.value === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => field.onChange(option.value)}
                      className={clsx(
                        "flex items-center gap-3.5 rounded-[10px] px-4 py-3 bg-white border cursor-pointer text-left",
                        isSelected ? "border-primary-600 border-[1.5px]" : "border-gray-200",
                      )}
                    >
                      <span
                        className="flex items-center justify-center size-10 rounded-lg bg-gray-100 shrink-0 font-bold text-lg text-gray-900"
                        style={{ fontFamily: option.value }}
                      >
                        Aa
                      </span>
                      <span className="flex flex-col gap-0.5 flex-1">
                        <span className="text-s font-medium text-gray-900 font-gotham">{option.label}</span>
                        <span className="text-xs text-gray-500 font-gotham">{option.sub}</span>
                      </span>
                      <span className={clsx("size-4 rounded-full shrink-0", isSelected ? "bg-primary-600" : "border-[1.5px] border-gray-300")} />
                    </button>
                  );
                })}
              </div>
            )}
          />
        </section>

        <section className="flex gap-8 px-7 py-6 bg-white border-b border-gray-200">
          <div className="flex flex-col gap-1.5 w-[220px] shrink-0">
            <h3 className="text-s font-medium text-gray-900 font-gotham">Стиль карточек</h3>
            <p className="text-xs text-gray-500 font-gotham">Скругление углов карточек позиций</p>
          </div>

          <Controller
            name="cardStyle"
            control={control}
            render={({ field }) => (
              <div className="flex gap-3 flex-1">
                {CARD_STYLE_OPTIONS.map((option) => {
                  const isSelected = field.value === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => field.onChange(option.value)}
                      className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <span
                        className={clsx("block w-20 h-14 bg-gray-100", isSelected && "bg-white border-[1.5px] border-primary-600")}
                        style={{ borderRadius: option.radius }}
                      />
                      <span className={clsx("text-xs font-gotham", isSelected ? "text-primary-600 font-medium" : "text-gray-500")}>
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          />
        </section>

        <section className="flex items-center justify-between px-7 py-5 bg-white">
          <div className="flex flex-col gap-1">
            <h3 className="text-s font-medium text-gray-900 font-gotham">Тёмная тема</h3>
            <p className="text-xs text-gray-500 font-gotham">Включить тёмный режим для меню</p>
          </div>

          <Controller name="darkMode" control={control} render={({ field: { value, ...field } }) => <Toggle {...field} checked={value} />} />
        </section>
      </div>

      <div className="flex items-center justify-between px-7 py-3.5 bg-white border-t border-gray-200 shrink-0">
        <span className="text-xs text-gray-500 font-gotham">{isDirty ? "Изменения не сохранены" : ""}</span>
        <div className="flex items-center gap-2.5">
          <Button type="button" colorVariant="stroke-gray" content="Сбросить" onClick={() => reset()} disabled={!isDirty} />
          <Button type="submit" colorVariant="beige" content="Сохранить изменения" disabled={!isDirty} />
        </div>
      </div>
    </form>
  );
};
