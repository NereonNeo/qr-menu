import type { IconNameTypes } from "@/shared/const/icon.const";
import { Icon } from "@/shared/ui/icon";

export const SectionCard = ({
  icon,
  title,
  description,
  children,
}: {
  icon: IconNameTypes;
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-xl p-6">
    <div className="flex items-center gap-3">
      <span className="flex items-center justify-center size-9 rounded-full bg-primary-50 shrink-0">
        <Icon name={icon} className="size-4 text-primary-500" />
      </span>
      <div className="flex flex-col gap-0.5 flex-1">
        <h3 className="text-s font-medium text-gray-900 font-gotham">{title}</h3>
        {description && <p className="text-xs text-gray-500 font-gotham">{description}</p>}
      </div>
    </div>
    {children}
  </div>
);
