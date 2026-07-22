import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon";

import type { IComingSoonProps } from "./coming-soon.contract";

export const ComingSoon = (props: IComingSoonProps) => {
  const { variant = "inline", title = "Раздел в разработке", description, icon = "hammer", badge, className } = props;

  if (variant === "inline") {
    return (
      <div className={clsx(className, "flex items-center justify-center py-20")}>
        <p className="text-gray-400 font-gotham text-sm">{title}</p>
      </div>
    );
  }

  return (
    <div className={clsx(className, "bg-white rounded-3xl shadow-md px-13 py-11 flex flex-col items-center gap-5 max-w-110 text-center")}>
      <div className="size-20 rounded-full bg-primary-50 flex items-center justify-center">
        <Icon name={icon} className="size-9 text-primary-500" />
      </div>
      <h3 className="text-xl font-gotham font-semibold text-gray-900">{title}</h3>
      {description && <p className="text-s text-gray-500 font-gotham leading-relaxed">{description}</p>}
      {badge && <span className="px-5 py-2 rounded-full bg-primary-50 text-primary-500 text-xs font-gotham font-medium">{badge}</span>}
    </div>
  );
};
