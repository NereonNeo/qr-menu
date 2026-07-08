import { useState } from "react";

import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon";

import { SETTINGS_TABS, SettingsTab } from "../settings.const";
import { SettingsMenuImport } from "./settings-menu-import.component";

export const SettingsPanel = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("menu-import");

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xxl font-gotham font-medium text-gray-900">Настройки</h1>
        <p className="text-s text-gray-500 font-gotham mt-1">Управление профилем и параметрами ресторана</p>
      </div>

      <div className="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit">
        {SETTINGS_TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value as SettingsTab)}
            className={clsx(
              "flex items-center gap-1.5 px-3.5 py-2 rounded-[7px] text-s font-gotham transition-colors",
              activeTab === tab.value ? "bg-gray-900 text-white font-medium" : "text-gray-500 font-normal hover:text-gray-700",
            )}
          >
            <Icon name={tab.icon} className="size-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "profile" && (
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-400 font-gotham text-sm">Раздел в разработке</p>
        </div>
      )}
      {activeTab === "notifications" && (
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-400 font-gotham text-sm">Раздел в разработке</p>
        </div>
      )}
      {activeTab === "security" && (
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-400 font-gotham text-sm">Раздел в разработке</p>
        </div>
      )}
      {activeTab === "menu-import" && <SettingsMenuImport />}
    </div>
  );
};
