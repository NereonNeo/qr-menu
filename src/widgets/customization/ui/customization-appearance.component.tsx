import clsx from "clsx/lite";
import { Controller, useForm } from "react-hook-form";

import { ColorPicker } from "@/shared/components/color-picker/color-picker.component";
import { InputPatterns } from "@/shared/const/input-pattern.const";
import { Button } from "@/shared/ui/button";
import { Toggle } from "@/shared/ui/toggle/toggle.component";

import { ACCENT_COLOR_PRESETS, CARD_STYLE_OPTIONS, FONT_STYLE_OPTIONS } from "../customization.const";
import type { ICustomizationForm } from "../customization.contract";
import { SectionCard } from "./section-card.component";

const DEFAULT_VALUES: ICustomizationForm = {
  accentColor: "#FF8400",
  fontFamily: "Inter",
  cardStyle: "soft",
  darkMode: false,
};

const ACCENT_COLOR_ROWS = [ACCENT_COLOR_PRESETS.slice(0, 5), ACCENT_COLOR_PRESETS.slice(5, 10)];

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
    <form onSubmit={handleSave} className="flex gap-5 items-start">
      <div className="flex flex-col gap-4 flex-1">
        <SectionCard title="Акцентный цвет" description="Основной цвет кнопок и активных элементов меню">
          <Controller
            name="accentColor"
            control={control}
            rules={{ pattern: InputPatterns.Color }}
            render={({ field }) => (
              <div className="flex flex-col gap-4">
                {ACCENT_COLOR_ROWS.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-2.5">
                    {row.map((color) => {
                      const isSelected = field.value === color;
                      return (
                        <button
                          key={color}
                          aria-selected={isSelected}
                          type="button"
                          onClick={() => field.onChange(color)}
                          className={clsx("rounded cursor-pointer aria-selected:outline-2 outline-offset-2")}
                          style={{ outlineColor: (isSelected && color) || undefined }}
                        >
                          <span className="block size-9 rounded" style={{ backgroundColor: color }} />
                        </button>
                      );
                    })}
                  </div>
                ))}

                <ColorPicker value={field.value} onChange={(e) => field.onChange(e.target.value)} />
              </div>
            )}
          />
        </SectionCard>

        <SectionCard title="Стиль карточек" description="Скругление углов карточек позиций меню">
          <Controller
            name="cardStyle"
            control={control}
            render={({ field }) => (
              <div className="flex gap-3">
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
        </SectionCard>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <SectionCard title="Типографика" description="Шрифт для названий блюд и описаний">
          <Controller
            name="fontFamily"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                {FONT_STYLE_OPTIONS.map((option) => {
                  const isSelected = field.value === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => field.onChange(option.value)}
                      className={clsx(
                        "flex items-center gap-3.5 rounded-md px-4 py-3 bg-white border cursor-pointer text-left",
                        isSelected ? "border-primary-600 border-[1.5px]" : "border-gray-200",
                      )}
                    >
                      <span
                        className="flex items-center justify-center size-10 rounded bg-gray-100 shrink-0 font-bold text-lg text-gray-900"
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
        </SectionCard>

        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-6 py-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-s font-medium text-gray-900 font-gotham">Тёмная тема</h3>
            <p className="text-xs text-gray-500 font-gotham">Включить тёмный режим для меню</p>
          </div>

          <Controller name="darkMode" control={control} render={({ field: { value, ...field } }) => <Toggle {...field} checked={value} />} />
        </div>

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
