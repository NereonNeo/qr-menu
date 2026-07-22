import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon/icon.entry";

import type { ITabsProps } from "./tabs.contract";

export const Tabs = <T extends string>(props: ITabsProps<T>) => {
  const { tabs, value, onChange, className } = props;

  return (
    <div className={clsx(className, "flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl")}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={clsx(
            "flex items-center gap-1.5 px-3.5 py-2 rounded-[7px] text-s font-gotham transition-colors",
            value === tab.value ? "bg-gray-900 text-white font-medium" : "text-gray-500 font-normal hover:text-gray-700",
          )}
        >
          <Icon name={tab.icon} className="size-3.5" />
          {tab.label}
        </button>
      ))}
    </div>
  );
};
