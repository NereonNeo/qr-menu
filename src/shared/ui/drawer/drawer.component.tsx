import clsx from "clsx/lite";
import type { ModalNames } from "ezzy-modal";
import { EzzyModal, useEzzyModal } from "ezzy-modal";

import { Button } from "@/shared/ui/button";

import { drawerPositionClassNames, drawerSizeClassNames } from "./drawer.const";
import type { DrawerPositionType, DrawerSizeType } from "./drawer.contract";
import "./drawer.style.css";

interface IDrawerProps {
  id: ModalNames;
  title: string;
  children: React.ReactNode;
  position?: DrawerPositionType;
  sizeVariant?: DrawerSizeType;
  closeOnOverlayClick?: boolean;
  bodyScrollLock?: boolean;
  className?: string;
}

export const Drawer = (props: IDrawerProps) => {
  const { id, children, title, position = "right", sizeVariant = "m", closeOnOverlayClick = true, bodyScrollLock = true, className } = props;

  const { closeModal } = useEzzyModal(id);

  return (
    <EzzyModal
      id={id}
      data-position={position}
      closeOnOverlayClick={closeOnOverlayClick}
      bodyScrollLock={bodyScrollLock}
      wrapperClassname={clsx(
        "flex flex-col bg-white shadow-lg",
        drawerPositionClassNames[position],
        drawerSizeClassNames[position][sizeVariant],
        className,
      )}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-5 py-4">
        <span className="font-gotham font-medium text-xl text-gray-900">{title}</span>
        <Button sizeVariant="s" onClick={closeModal} left="x" />
      </div>
      <div className="flex-1 overflow-y-auto p-5">{children}</div>
    </EzzyModal>
  );
};
