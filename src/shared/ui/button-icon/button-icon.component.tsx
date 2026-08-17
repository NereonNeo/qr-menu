import { forwardRef } from "react";

import clsx from "clsx/lite";

import { buttonStyleVariantsClassNames } from "@/shared/const/button.const";
import type { IconNameTypes } from "@/shared/const/icon.const";
import { type ButtonColorVariant, type ButtonSizeVariant } from "@/shared/types/button.contract";

import { Icon } from "../icon/icon.entry";
import { iconButtonSizeVariantClassNames } from "./button-icon.const";

interface IButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isRounded?: boolean;
  isLoading?: boolean;
  icon: IconNameTypes;
  sizeVariant: ButtonSizeVariant;
  colorVariant: ButtonColorVariant;
}

export const ButtonIcon = forwardRef<HTMLButtonElement, IButtonIconProps>((props: IButtonIconProps, ref) => {
  const { icon, disabled, className, isRounded, isLoading, sizeVariant, colorVariant, ...otherProps } = props;

  const mainIcon = icon && isLoading ? "loader" : icon;

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={clsx(
        className,
        iconButtonSizeVariantClassNames[sizeVariant],
        buttonStyleVariantsClassNames[colorVariant].hover,
        buttonStyleVariantsClassNames[colorVariant].focused,
        buttonStyleVariantsClassNames[colorVariant].element,
        buttonStyleVariantsClassNames[colorVariant].disabled,
        isRounded && "rounded-full",
        "text-s flex cursor-pointer items-center gap-2 rounded-md font-medium transition-[box-shadow,background-color,border-color,color] focus-within:outline-none focus:outline-none disabled:cursor-not-allowed",
      )}
      {...otherProps}
    >
      <div className="relative">
        <Icon className={clsx("h-4 w-4", isLoading && "animate-spin")} name={mainIcon} />
      </div>
    </button>
  );
});
