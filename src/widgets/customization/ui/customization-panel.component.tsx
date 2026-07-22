import { useState } from "react";

import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon";

import { CUSTOMIZATION_TABS, CustomizationTab } from "../customization.const";
import { CustomizationAppearance } from "./customization-appearance.component";
import { CustomizationBranding } from "./customization-branding.component";

export const CustomizationPanel = () => {
  const [activeTab, setActiveTab] = useState<CustomizationTab>("appearance");

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xxl font-gotham font-medium text-gray-900">Кастомизация</h1>
        <p className="text-s text-gray-500 font-gotham mt-1">Настройте внешний вид и брендинг вашего меню</p>
      </div>

      <div className="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl">
        {CUSTOMIZATION_TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
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

      {activeTab === "appearance" && <CustomizationAppearance />}
      {activeTab === "branding" && <CustomizationBranding />}
    </div>
  );
};
