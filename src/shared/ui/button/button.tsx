import { forwardRef } from "react";

import clsx from "clsx/lite";

import { buttonStyleVariantsClassNames } from "@/shared/const/button.const";
import { IconNameTypes } from "@/shared/const/icon.const";
import { ButtonColorVariant, ButtonSizeVariant } from "@/shared/types/button.types";

import { Icon } from "../icon/icon.entry";
import { buttonSizeVariantClassNames } from "./button-class-names";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  isLoading?: boolean;
  isRounded?: boolean;
  left?: IconNameTypes;
  right?: IconNameTypes;
  sizeVariant?: ButtonSizeVariant;
  colorVariant?: ButtonColorVariant;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props: IButtonProps, ref) => {
  const { left, right, content, disabled, isLoading, className, isRounded, sizeVariant = "s", colorVariant = "beige", ...otherProps } = props;

  const leftIcon = left && isLoading ? "loader" : left;
  const rightIcon = right && isLoading ? "loader" : right;
  const roundedClassName = isRounded ? "rounded-full" : "rounded-md";

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={clsx(
        className,
        roundedClassName,
        buttonSizeVariantClassNames.default[sizeVariant],
        buttonStyleVariantsClassNames[colorVariant].hover,
        buttonStyleVariantsClassNames[colorVariant].focused,
        buttonStyleVariantsClassNames[colorVariant].element,
        buttonStyleVariantsClassNames[colorVariant].disabled,
        "cursor-pointer disabled:cursor-not-allowed focus:outline-hidden focus-within:outline-hidden transition-[box-shadow,background-color,border-color,color] flex items-center gap-2 font-gotham font-medium text-s",
      )}
      {...otherProps}
    >
      {leftIcon && <TemplateIcon isLoading={isLoading} iconName={leftIcon} />}
      {content && <span className="flex-1">{content}</span>}
      {rightIcon && <TemplateIcon isLoading={isLoading} iconName={rightIcon} />}
    </button>
  );
});

const TemplateIcon = ({ isLoading, iconName }: { isLoading?: boolean; iconName: IconNameTypes }) => {
  return <Icon className={clsx("w-4 h-4", isLoading && "animate-spin")} name={iconName} />;
};
