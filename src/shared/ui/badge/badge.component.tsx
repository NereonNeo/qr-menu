import { ReactNode } from "react";

import clsx from "clsx/lite";

import type { IconNameTypes } from "@/shared/const/icon.const";

import { Icon } from "../icon/icon.entry";
import { badgeStyleVariantsClassNames, badgesSizeVariantClassNames } from "./badge.const";
import type { BadgeColorVariantType, BadgeSizeVariantType } from "./badge.contract";

interface IBadgeProps {
  content: string;
  onClick?(): void;
  iconSize?: string;
  className?: string;
  left?: IconNameTypes;
  right?: IconNameTypes;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftNode?: ReactNode;
  supportClassName?: string;
  sizeVariant?: BadgeSizeVariantType;
  colorVariant?: BadgeColorVariantType;
  rounded?: boolean;
}

export const Badge = (props: IBadgeProps) => {
  const {
    left,
    right,
    onClick,
    rounded,
    content,
    className,
    leftNode,
    onLeftClick,
    onRightClick,
    sizeVariant = "s",
    iconSize = "size-3",
    colorVariant = "gray",
  } = props;

  return (
    <div
      onClick={onClick}
      className={clsx(
        className,
        badgesSizeVariantClassNames[sizeVariant],
        badgeStyleVariantsClassNames[colorVariant].element,
        "flex w-fit items-center gap-1 rounded-sm font-medium",
        rounded && "rounded-full!",
      )}
    >
      {leftNode && leftNode}
      {left && <Icon name={left} className={clsx(iconSize, onLeftClick && "shrink-0 cursor-pointer")} onClick={onLeftClick} />}
      <div className="flex gap-1 whitespace-nowrap">
        <span>{content}</span>
      </div>
      {right && <Icon name={right} className={clsx(iconSize, onRightClick && "shrink-0 cursor-pointer")} onClick={onRightClick} />}
    </div>
  );
};
