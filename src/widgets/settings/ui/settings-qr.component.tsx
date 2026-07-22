import { useRef, useState } from "react";

import clsx from "clsx/lite";
import { Controller, useForm, useWatch } from "react-hook-form";

import { ColorPicker } from "@/shared/components/color-picker/color-picker.component";
import { SectionCard } from "@/shared/components/section-card/section-card.entry";
import { InputPatterns } from "@/shared/const/input-pattern.const";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { SaveCancelBar } from "@/shared/ui/save-cancel-bar/save-cancel-bar.entry";
import { Toggle } from "@/shared/ui/toggle/toggle.component";

import { MOCK_QR_TABLES, QR_BG_COLOR_PRESETS, QR_CODE_COLOR_PRESETS, QR_MODULE_STYLE_OPTIONS } from "../settings.const";
import type { IQrDesignForm, IQrTable } from "../settings.contract";
import { QrCodePreview } from "./qr-code-preview.component";

const DEFAULT_VALUES: IQrDesignForm = {
  codeColor: "#131313",
  bgColor: "#FFFFFF",
  bgTransparent: false,
  logo: null,
  showLogo: true,
  moduleStyle: "square",
};

const LogoDropzone = ({ file, onChange }: { file: File | null; onChange: (file: File | null) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files?.[0] ?? null);
  };

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className="relative flex flex-col items-center justify-center gap-1.5 bg-gray-50 border border-gray-200 rounded-xl size-24 shrink-0 cursor-pointer overflow-hidden"
    >
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleChange} />
      {file ? (
        <img src={URL.createObjectURL(file)} className="absolute inset-0 size-full object-cover" alt="Логотип" />
      ) : (
        <>
          <Icon name="upload" className="size-5 text-gray-400" />
          <span className="text-xxs text-gray-400 font-gotham">Загрузить</span>
        </>
      )}
    </button>
  );
};

export const SettingsQr = () => {
  const [tables, setTables] = useState<IQrTable[]>(MOCK_QR_TABLES);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<IQrDesignForm>({ mode: "onTouched", defaultValues: DEFAULT_VALUES });

  const handleSave = handleSubmit((data) => {
    console.log(data);
    reset(data);
  });

  const previewValues = useWatch({ control });

  const handleAddTable = () => {
    setTables((prev) => {
      const nextNumber = prev.length > 0 ? Math.max(...prev.map((table) => table.number)) + 1 : 1;
      return [...prev, { id: crypto.randomUUID(), number: nextNumber, seats: 2, url: `shopnext.menu/t/${nextNumber}`, active: true }];
    });
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSave} className="flex gap-5 items-start">
        <div className="flex flex-col gap-4 flex-1">
          <SectionCard icon="scan-line" title="Дизайн QR-кода" description="Единый стиль для всех QR-кодов заведения">
            <div className="flex flex-col gap-2">
              <span className="text-s font-medium text-gray-700 font-gotham">Цвет кода</span>
              <Controller
                name="codeColor"
                control={control}
                rules={{ pattern: InputPatterns.Color }}
                render={({ field }) => (
                  <div className="flex flex-col gap-2.5">
                    <div className="flex gap-2.5">
                      {QR_CODE_COLOR_PRESETS.map((color) => {
                        const isSelected = field.value === color;
                        return (
                          <button
                            key={color}
                            aria-selected={isSelected}
                            type="button"
                            onClick={() => field.onChange(color)}
                            className="rounded-lg cursor-pointer aria-selected:outline-2 outline-offset-2"
                            style={{ outlineColor: (isSelected && color) || undefined }}
                          >
                            <span className="block size-8 rounded-lg border border-gray-200" style={{ backgroundColor: color }} />
                          </button>
                        );
                      })}
                    </div>
                    <ColorPicker value={field.value} onChange={(event) => field.onChange(event.target.value)} />
                  </div>
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-s font-medium text-gray-700 font-gotham">Цвет фона</span>
              <Controller
                name="bgColor"
                control={control}
                render={({ field: bgColorField }) => (
                  <Controller
                    name="bgTransparent"
                    control={control}
                    render={({ field: transparentField }) => (
                      <div className="flex gap-2.5">
                        {QR_BG_COLOR_PRESETS.map((color) => {
                          const isSelected = !transparentField.value && bgColorField.value === color;
                          return (
                            <button
                              key={color}
                              aria-selected={isSelected}
                              type="button"
                              onClick={() => {
                                bgColorField.onChange(color);
                                transparentField.onChange(false);
                              }}
                              className="rounded-lg cursor-pointer aria-selected:outline-2 outline-offset-2"
                              style={{ outlineColor: (isSelected && color) || undefined }}
                            >
                              <span className="block size-8 rounded-lg border border-gray-200" style={{ backgroundColor: color }} />
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          aria-selected={transparentField.value}
                          onClick={() => transparentField.onChange(true)}
                          className={clsx(
                            "flex items-center h-8 px-3 rounded-lg border cursor-pointer text-xs font-gotham",
                            transparentField.value ? "border-gray-900 text-gray-900" : "border-gray-200 text-gray-500",
                          )}
                        >
                          Прозрачный
                        </button>
                      </div>
                    )}
                  />
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-s font-medium text-gray-700 font-gotham">Логотип заведения</span>
              <div className="flex gap-5">
                <Controller name="logo" control={control} render={({ field }) => <LogoDropzone file={field.value} onChange={field.onChange} />} />
                <div className="flex flex-col gap-1.5 flex-1 justify-center">
                  <span className="text-xs text-gray-500 font-gotham">Логотип встраивается в центр QR-кода</span>
                  <span className="text-xxs text-gray-400 font-gotham">PNG или SVG · до 1МБ · без фона</span>
                  <Controller
                    name="showLogo"
                    control={control}
                    render={({ field: { value, ...field } }) => (
                      <Toggle {...field} checked={value} label="Показывать логотип в коде" sizeVariant="s" className="mt-1" />
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-s font-medium text-gray-700 font-gotham">Стиль модулей</span>
              <Controller
                name="moduleStyle"
                control={control}
                render={({ field }) => (
                  <div className="flex gap-2.5">
                    {QR_MODULE_STYLE_OPTIONS.map((option) => {
                      const isSelected = field.value === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => field.onChange(option.value)}
                          className={clsx(
                            "flex flex-col items-center gap-2 flex-1 rounded-xl px-2.5 py-3.5 cursor-pointer border",
                            isSelected ? "bg-primary-50 border-primary-500 border-[1.5px]" : "bg-white border-gray-200",
                          )}
                        >
                          <Icon name={option.icon} className={clsx("size-5", isSelected ? "text-primary-500" : "text-gray-500")} />
                          <span className={clsx("text-xs font-gotham", isSelected ? "text-gray-900 font-medium" : "text-gray-500")}>
                            {option.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              />
            </div>
          </SectionCard>

          <SaveCancelBar isDirty={isDirty} onCancel={() => reset()} />
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col items-center gap-4 bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-s font-medium text-gray-900 font-gotham self-start">Предпросмотр</h3>

            <div
              className="flex items-center justify-center rounded-2xl border border-gray-200 shadow-lg p-6"
              style={{ backgroundColor: previewValues.bgTransparent ? undefined : previewValues.bgColor }}
            >
              <QrCodePreview
                size={224}
                color={previewValues.codeColor ?? DEFAULT_VALUES.codeColor}
                background={previewValues.bgTransparent ? null : (previewValues.bgColor ?? DEFAULT_VALUES.bgColor)}
                moduleStyle={previewValues.moduleStyle ?? DEFAULT_VALUES.moduleStyle}
                showLogo={previewValues.showLogo}
              />
            </div>

            <span className="text-s text-gray-400 font-gotham">shopnext.menu/t/1</span>

            <div className="flex gap-2.5 w-full">
              <Button left="download" content="PNG" colorVariant="dark" className="flex-1 justify-center" />
              <Button left="download" content="SVG" colorVariant="stroke-gray" className="flex-1 justify-center" />
              <Button left="download" content="PDF" colorVariant="stroke-gray" className="flex-1 justify-center" />
            </div>
          </div>
        </div>
      </form>

      <div className="flex flex-col gap-5 bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-s font-medium text-gray-900 font-gotham">Столы и QR-коды</h3>
            <p className="text-xs text-gray-500 font-gotham">Для каждого стола создаётся отдельный QR-код со своей ссылкой</p>
          </div>
          <div className="flex items-center gap-2.5">
            <Button left="refresh-cw" content="Обновить все" colorVariant="stroke-gray" />
            <Button left="plus" content="Добавить стол" colorVariant="dark" onClick={handleAddTable} />
          </div>
        </div>

        <div className="border border-gray-200 rounded-[10px] overflow-hidden">
          <div className="flex items-center gap-4 bg-gray-50 px-4 py-2.5">
            <span className="w-[210px] text-xxs font-semibold tracking-wide text-gray-500 font-gotham">СТОЛ</span>
            <span className="w-19 text-xxs font-semibold tracking-wide text-gray-500 font-gotham">QR</span>
            <span className="flex-1 text-xxs font-semibold tracking-wide text-gray-500 font-gotham">ССЫЛКА</span>
            <span className="w-32.5 text-xxs font-semibold tracking-wide text-gray-500 font-gotham">СТАТУС</span>
            <span className="w-30" />
          </div>

          {tables.map((table) => (
            <div key={table.id} className="flex items-center gap-4 px-4 py-3 border-t border-gray-100">
              <div className="flex items-center gap-3 w-[210px]">
                <span className="flex items-center justify-center size-9 rounded-[9px] bg-gray-100 shrink-0">
                  <Icon name="utensils" className="size-4 text-gray-500" />
                </span>
                <div className="flex flex-col">
                  <span className="text-s text-gray-900 font-medium font-gotham">Стол №{table.number}</span>
                  <span className="text-xs text-gray-400 font-gotham">{table.seats} места</span>
                </div>
              </div>

              <div className="w-19">
                <div className="flex items-center justify-center size-11 rounded-lg bg-white border border-gray-200 overflow-hidden">
                  <QrCodePreview size={34} color="#131313" background="#ffffff" moduleStyle="square" />
                </div>
              </div>

              <div className="flex-1">
                <button
                  type="button"
                  onClick={() => handleCopyLink(table.url)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 cursor-pointer w-fit"
                >
                  <Icon name="link" className="size-3.5 text-gray-400" />
                  <span className="text-s text-gray-600 font-gotham">{table.url}</span>
                  <Icon name="copy" className="size-3.5 text-gray-400" />
                </button>
              </div>

              <div className="w-32.5">
                {table.active ? (
                  <span className="flex items-center gap-1.5 w-fit bg-green-50 rounded-full px-2.5 py-1">
                    <span className="size-1.5 rounded-full bg-green-500" />
                    <span className="text-xs text-green-700 font-medium font-gotham">Активен</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 w-fit bg-gray-100 rounded-full px-2.5 py-1">
                    <span className="size-1.5 rounded-full bg-gray-400" />
                    <span className="text-xs text-gray-500 font-medium font-gotham">Неактивен</span>
                  </span>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 w-30">
                <button type="button" className="flex items-center justify-center size-8 rounded-lg bg-white border border-gray-200 cursor-pointer">
                  <Icon name="download" className="size-3.5 text-gray-500" />
                </button>
                <button type="button" className="flex items-center justify-center size-8 rounded-lg bg-white border border-gray-200 cursor-pointer">
                  <Icon name="refresh-cw" className="size-3.5 text-gray-500" />
                </button>
                <button type="button" className="flex items-center justify-center size-8 rounded-lg bg-white border border-gray-200 cursor-pointer">
                  <Icon name="ellipsis-vertical" className="size-3.5 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
