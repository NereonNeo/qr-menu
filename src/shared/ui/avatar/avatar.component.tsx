import type { ReactNode } from "react";

import clsx from "clsx/lite";

import type { IconNameTypes } from "@/shared/const/icon.const";

import { Icon } from "../icon/icon.entry";
import type { IndicatorColorTypes } from "../indicator/indicator.entry";
import { Indicator } from "../indicator/indicator.entry";
import {
  avatarSizeVariantClassNames,
  avatarStyleVariantClassNames,
  averageAvatarStyle,
  iconSizeByAvatarClassNames,
  indicatorSizeByAvatarClassNames,
} from "./avatar.const";
import type { AvatarColorVariantType, AvatarSizeVariantType } from "./avatar.contract";
import { formatNameAvatar } from "./avatar.util";

interface IAvatarSupport {
  className?: string;
  indicator?: boolean;
  onClick?: () => void;
  sizeVariant?: AvatarSizeVariantType;
  colorVariant?: AvatarColorVariantType;
  colorIndicator?: IndicatorColorTypes;
}

type IAvatar =
  | ({ type: "icon"; name: IconNameTypes } & IAvatarSupport)
  | ({ type: "text"; text: string } & IAvatarSupport)
  | ({ type: "img"; img: string } & IAvatarSupport);

export const Avatar = (props: IAvatar) => {
  const { type, sizeVariant = "s" } = props;

  switch (type) {
    case "icon":
      return (
        <AvatarTemplate {...props}>
          <Icon name={props.name} className={iconSizeByAvatarClassNames[sizeVariant]} />
        </AvatarTemplate>
      );

    case "img":
      return (
        <AvatarTemplate {...props}>
          <div className="size-full overflow-hidden rounded-full">
            <img className="size-full object-cover" src={props.img} />
          </div>
        </AvatarTemplate>
      );

    case "text":
      return (
        <AvatarTemplate {...props}>
          <span>{formatNameAvatar(props.text)}</span>
        </AvatarTemplate>
      );
  }
};

interface IAvatarTemplate extends IAvatarSupport {
  children: ReactNode;
}

const AvatarTemplate = (props: IAvatarTemplate) => {
  const { children, sizeVariant = "s", className, indicator, colorIndicator = "green", colorVariant = "primary", onClick } = props;

  return (
    <div
      onClick={onClick}
      className={clsx(avatarSizeVariantClassNames[sizeVariant], avatarStyleVariantClassNames[colorVariant], averageAvatarStyle, className)}
    >
      {children}
      {indicator && (
        <Indicator
          className="absolute right-0 bottom-0 shadow-[0px_0px_0px_2px] shadow-white"
          color={colorIndicator}
          sizeVariant={indicatorSizeByAvatarClassNames[sizeVariant]}
        />
      )}
    </div>
  );
};
