import { useRef, useState } from "react";

import clsx from "clsx/lite";

import type { IconNameTypes } from "@/shared/const/icon.const";
import { Badge } from "@/shared/ui/badge/badge.entry";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";

import { IMPORT_FORMAT_TAGS, MENU_CONNECTORS, MENU_IMPORT_CHECKLIST } from "../settings.const";
import type { IChecklistItem } from "../settings.contract";
import { SectionCard } from "./section-card.component";

const CHECKLIST_ICON: Record<IChecklistItem["state"], { icon: IconNameTypes; className: string }> = {
  included: { icon: "circle-check", className: "text-green-600" },
  partial: { icon: "circle-dot", className: "text-primary-500" },
  excluded: { icon: "circle-x", className: "text-gray-400" },
};

const MigrationBanner = () => (
  <div
    className="flex items-center justify-between gap-10 rounded-2xl p-7 px-8"
    style={{ background: "linear-gradient(180deg, #131313 0%, #1e0e06 100%)" }}
  >
    <div className="flex flex-col gap-3 flex-1">
      <Badge content="НОВАЯ ФУНКЦИЯ" colorVariant="orange" className="bg-primary-500 text-white w-fit" />
      <h2 className="text-xl font-gotham font-semibold text-white">Быстрая миграция меню</h2>
      <p className="text-s text-gray-400 font-gotham leading-relaxed">
        Импортируйте меню с любого QR-сервиса или системы конкурента. Позиции, категории, цены — переносятся автоматически.
      </p>
    </div>
    <div className="flex items-center gap-3 shrink-0">
      <div className="flex flex-col items-center gap-1 bg-white/8 rounded-xl px-4.5 py-3.5">
        <span className="text-l font-gotham font-semibold text-white">&lt; 5 мин</span>
        <span className="text-xs font-gotham text-gray-400">время миграции</span>
      </div>
      <div className="flex flex-col items-center gap-1 bg-white/8 rounded-xl px-4.5 py-3.5">
        <span className="text-l font-gotham font-semibold text-white">100%</span>
        <span className="text-xs font-gotham text-gray-400">данных сохраняется</span>
      </div>
    </div>
  </div>
);

const ImportByLinkCard = () => {
  const [link, setLink] = useState("");

  return (
    <SectionCard icon="link" title="Импорт по ссылке">
      <p className="text-s text-gray-500 font-gotham leading-relaxed -mt-2">
        Вставьте ссылку на меню конкурента или другого QR-сервиса. Мы автоматически распознаем формат и перенесём все позиции.
      </p>
      <Input
        label="Ссылка на меню"
        left="link-2"
        placeholder="https://menu.example.com/restaurant/..."
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <div className="flex items-center gap-3">
        <Button colorVariant="dark" content="Начать импорт" right="arrow-right" className="shrink-0" />
        <span className="text-xs text-gray-400 font-gotham">Анализ займёт ~30 сек</span>
      </div>
    </SectionCard>
  );
};

const UploadFileCard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files?.length) return;
  };

  return (
    <SectionCard icon="cloud-upload" title="Загрузить файл">
      <p className="text-s text-gray-500 font-gotham leading-relaxed -mt-2">Поддерживаем форматы из популярных POS-систем и ресторанных платформ.</p>

      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-xs text-gray-400 font-gotham">Форматы:</span>
        {IMPORT_FORMAT_TAGS.map((tag) => (
          <span key={tag.label} className="text-xxs font-medium text-gray-700 font-gotham bg-gray-100 rounded px-2 py-0.75">
            {tag.label}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragOver(false);
          handleFiles(event.dataTransfer.files);
        }}
        className={clsx(
          "flex flex-col items-center gap-2.5 bg-gray-50 border-2 border-dashed rounded-lg py-7 cursor-pointer transition-colors",
          isDragOver ? "border-primary-400" : "border-gray-300",
        )}
      >
        <input ref={inputRef} type="file" hidden onChange={(event) => handleFiles(event.target.files)} />
        <Icon name="cloud-upload" className="size-9 text-gray-300" />
        <span className="text-s text-gray-600 font-gotham">Перетащите файл сюда</span>
        <span className="text-xs text-gray-400 font-gotham">или</span>
        <span className="text-xs text-gray-600 font-gotham bg-white border border-gray-300 rounded-md px-4 py-2">Выбрать файл</span>
      </button>

      <div className="flex items-center gap-1.5">
        <Icon name="info" className="size-3 text-gray-400" />
        <span className="text-xs text-gray-400 font-gotham">Макс. размер файла: 10 МБ · PDF, CSV, XLSX, JSON</span>
      </div>
    </SectionCard>
  );
};

const ConnectorsCard = () => (
  <SectionCard icon="plug-zap" title="Готовые коннекторы" description="Прямая интеграция с популярными сервисами">
    <div className="grid grid-cols-3 gap-1.5">
      {MENU_CONNECTORS.map((connector) => (
        <button
          key={connector.name}
          type="button"
          className="flex items-center gap-1.5 min-w-0 bg-gray-50 border border-gray-200 rounded-lg pl-2 pr-1.5 py-2.5 cursor-pointer hover:border-gray-300 transition-colors"
        >
          <span
            className="flex items-center justify-center size-6 rounded-full text-white text-[9px] font-bold font-gotham shrink-0"
            style={{ backgroundColor: connector.color }}
          >
            {connector.initials}
          </span>
          <span className="text-xxs font-medium text-gray-900 font-gotham flex-1 min-w-0 text-left truncate">{connector.name}</span>
          <Icon name="chevron-right" className="size-3 text-gray-300 shrink-0" />
        </button>
      ))}
    </div>
  </SectionCard>
);

const MenuImportChecklistCard = () => (
  <SectionCard icon="list-checks" title="Что будет перенесено">
    <div className="flex flex-col gap-2.5">
      {MENU_IMPORT_CHECKLIST.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5">
          <Icon name={CHECKLIST_ICON[item.state].icon} className={clsx("size-4 shrink-0", CHECKLIST_ICON[item.state].className)} />
          <span className="text-s text-gray-700 font-gotham">{item.label}</span>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3.5 py-3">
      <Icon name="info" className="size-3.5 text-gray-500 shrink-0" />
      <span className="text-xs text-gray-500 font-gotham leading-normal">Все данные можно отредактировать перед публикацией</span>
    </div>
  </SectionCard>
);

export const SettingsMenuImport = () => (
  <div className="flex flex-col gap-5">
    <MigrationBanner />
    <div className="flex gap-5 items-start">
      <div className="flex flex-col gap-4 flex-1">
        <ImportByLinkCard />
        <UploadFileCard />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <ConnectorsCard />
        <MenuImportChecklistCard />
      </div>
    </div>
  </div>
);
