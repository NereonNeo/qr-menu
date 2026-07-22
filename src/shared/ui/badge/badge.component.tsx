import clsx from "clsx/lite";

import type { IconNameTypes } from "@/shared/const/icon.const";

import { Avatar } from "../avatar/avatar.entry";
import { Icon } from "../icon/icon.entry";
import { avatarSizeVariantByBadges, badgeStyleVariantsClassNames, badgesSizeVariantClassNames } from "./badge.const";
import type { BadgeColorVariantType, BadgeSizeVariantType } from "./badge.contract";

interface IBadgeProps {
  content: string;
  avatar?: string;
  onClick?(): void;
  iconSize?: string;
  className?: string;
  left?: IconNameTypes;
  right?: IconNameTypes;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  supportClassName?: string;
  support?: React.ReactNode;
  sizeVariant?: BadgeSizeVariantType;
  colorVariant?: BadgeColorVariantType;
}

export const Badge = (props: IBadgeProps) => {
  const {
    left,
    right,
    avatar,
    onClick,
    support,
    content,
    className,
    onLeftClick,
    onRightClick,
    supportClassName,
    sizeVariant = "s",
    iconSize = "size-3",
    colorVariant = "gray",
  } = props;

  const showAvatar = Boolean(avatar);
  const showSupport = Boolean(support);

  return (
    <div
      onClick={onClick}
      className={clsx(
        className,
        badgesSizeVariantClassNames[sizeVariant],
        badgeStyleVariantsClassNames[colorVariant].element,
        "flex w-fit items-center gap-1 rounded-sm font-medium",
      )}
    >
      {showAvatar && (
        <Avatar
          type="img"
          img={avatar!}
          onClick={onLeftClick}
          className={clsx(onLeftClick && "cursor-pointer")}
          sizeVariant={(showSupport && "xs") || avatarSizeVariantByBadges[sizeVariant]}
        />
      )}
      {showAvatar || (left && <Icon name={left} className={clsx(iconSize, onLeftClick && "shrink-0 cursor-pointer")} onClick={onLeftClick} />)}
      <div className="flex flex-col whitespace-nowrap">
        <span>{content}</span>
        <span className={supportClassName}>{support}</span>
      </div>
      {right && <Icon name={right} className={clsx(iconSize, onRightClick && "shrink-0 cursor-pointer")} onClick={onRightClick} />}
    </div>
  );
};
