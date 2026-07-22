import { useState } from "react";

import { PageHeader } from "@/shared/ui/page-header/page-header.entry";
import { Tabs } from "@/shared/ui/tabs/tabs.entry";

import { CUSTOMIZATION_TABS, CustomizationTab } from "../customization.const";
import { CustomizationAppearance } from "./customization-appearance.component";
import { CustomizationBranding } from "./customization-branding.component";

export const CustomizationPanel = () => {
  const [activeTab, setActiveTab] = useState<CustomizationTab>("appearance");

  return (
    <div className="flex flex-col gap-5">
      <PageHeader title="Кастомизация" description="Настройте внешний вид и брендинг вашего меню" />

      <Tabs tabs={CUSTOMIZATION_TABS} value={activeTab} onChange={setActiveTab} />

      {activeTab === "appearance" && <CustomizationAppearance />}
      {activeTab === "branding" && <CustomizationBranding />}
    </div>
  );
};
