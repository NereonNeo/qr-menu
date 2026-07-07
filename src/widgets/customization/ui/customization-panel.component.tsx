import { useState } from "react";

import clsx from "clsx/lite";

import { CUSTOMIZATION_TABS, CustomizationTab } from "../customization.const";
import { CustomizationAppearance } from "./customization-appearance.component";

export const CustomizationPanel = () => {
  const [activeTab, setActiveTab] = useState<CustomizationTab>("appearance");

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-1.5 h-13 px-7 border-b border-gray-200">
        {CUSTOMIZATION_TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={clsx(
              "px-4 py-1.5 rounded-lg text-s font-gotham transition-colors",
              activeTab === tab.value ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-500 font-normal hover:text-gray-700",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "appearance" ? (
        <CustomizationAppearance />
      ) : (
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-400 font-gotham text-sm">Раздел в разработке</p>
        </div>
      )}
    </div>
  );
};
