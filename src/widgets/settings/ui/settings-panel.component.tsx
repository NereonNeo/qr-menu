import { useState } from "react";

import { ComingSoon } from "@/shared/ui/coming-soon/coming-soon.entry";
import { PageHeader } from "@/shared/ui/page-header/page-header.entry";
import { Tabs } from "@/shared/ui/tabs/tabs.entry";

import { SETTINGS_TABS, SettingsTab } from "../settings.const";
import { SettingsMenuImport } from "./settings-menu-import.component";
import { SettingsQr } from "./settings-qr.component";

export const SettingsPanel = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("menu-import");

  return (
    <div className="flex flex-col gap-5">
      <PageHeader title="Настройки" description="Управление профилем и параметрами ресторана" />

      <Tabs className="w-full" tabs={SETTINGS_TABS} value={activeTab} onChange={setActiveTab} />

      {activeTab === "profile" && <ComingSoon />}
      {activeTab === "notifications" && <ComingSoon />}
      {activeTab === "security" && <ComingSoon />}
      {activeTab === "menu-import" && <SettingsMenuImport />}
      {activeTab === "qr" && <SettingsQr />}
    </div>
  );
};
