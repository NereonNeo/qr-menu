import { forwardRef, useId } from "react";

import clsx from "clsx/lite";

import { AverageSizeVariantType } from "@/shared/types/ui.contract";

import { toggleSizeVariantClassNames } from "./toggle.const";

interface IToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  support?: string;
  wrapperClassName?: string;
  sizeVariant?: AverageSizeVariantType;
}

export const Toggle = forwardRef<HTMLInputElement, IToggleProps>((props, ref) => {
  const { wrapperClassName, className, label, support, sizeVariant = "s", ...inputProps } = props;
  const inputId = useId();

  const isHasTextInformation = Boolean(label) || Boolean(support);

  return (
    <label
      htmlFor={inputId}
      aria-disabled={inputProps.disabled}
      className={clsx(wrapperClassName, "inline-flex gap-2 aria-disabled:cursor-not-allowed cursor-pointer group")}
    >
      <input id={inputId} ref={ref} type="checkbox" className={clsx(className, "sr-only peer")} {...inputProps} />
      <div
        className={clsx(
          toggleSizeVariantClassNames[sizeVariant].toggler,
          "transition-[color,box-shadow,background-color] relative bg-gray-100 rounded-full",
          "group-active:ring group-active:ring-gray-50 group-active:peer-checked:ring-primary-100",
          "after:transition-transform after:contents-[''] after:block after:absolute after:top-1/2 after:bg-white after:shadow-sm after:-translate-y-1/2 after:rounded-full peer-checked:after:translate-x-[calc(100%_+_2px)] after:translate-x-0.5",
          "group-aria-disabled:peer-disabled:ring-0 group-aria-disabled:peer-disabled:after:bg-gray-50 group-aria-disabled:peer-disabled:bg-gray-100 peer-checked:bg-primary-500 peer-hover:bg-gray-200 peer-hover:peer-checked:bg-primary-600 peer-focus-visible:ring peer-focus-visible:ring-gray-50 peer-checked:peer-focus-visible:ring-primary-100",
        )}
      />
      <div className="group" hidden={!isHasTextInformation} aria-disabled={inputProps.disabled}>
        <h6
          className={clsx(toggleSizeVariantClassNames[sizeVariant].label, "group-aria-disabled:text-gray-300 text-gray-600 font-medium empty:hidden")}
        >
          {label}
        </h6>
        <p className={clsx(toggleSizeVariantClassNames[sizeVariant].support, "group-aria-disabled:text-gray-300 text-gray-500 empty:hidden")}>
          {support}
        </p>
      </div>
    </label>
  );
});
