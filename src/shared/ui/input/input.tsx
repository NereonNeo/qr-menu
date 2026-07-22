import { forwardRef, useId } from "react";

import clsx from "clsx/lite";

import { IconNameTypes } from "@/shared/const/icon.const";
import {
  inputDefaultClassName,
  inputDisabledClassName,
  inputInvalidClassName,
  inputPlaceholderClassName,
  inputSizeVariantClassNames,
} from "@/shared/const/input.const";
import { AverageSizeVariantType } from "@/shared/types/ui.types";

import { Icon } from "../icon/icon.entry";
import { Label } from "../label/Label";
import { Message } from "../message/Message";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  addon?: string;
  label?: string;
  left?: IconNameTypes;
  right?: IconNameTypes;
  message?: string;
  invalid?: boolean;
  wrapperClassName?: string;
  sizeVariant?: AverageSizeVariantType;
  labelPlaceholder?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { wrapperClassName, invalid, className, message, label, disabled, left, right, labelPlaceholder, sizeVariant = "s", ...otherProps } = props;
  const inputId = useId();
  const errorInputId = inputId + "error";

  return (
    <div className={clsx(wrapperClassName, "font-gotham")}>
      {label && <Label aria-invalid={invalid} text={label} htmlFor={inputId} className="mb-1.5" />}
      <div
        className={clsx(
          disabled && inputDisabledClassName,
          inputSizeVariantClassNames[sizeVariant],
          !disabled && invalid && inputInvalidClassName,
          !disabled && !invalid && inputDefaultClassName,
          "border rounded-md transition-shadow overflow-hidden flex items-center",
        )}
      >
        {labelPlaceholder && (
          <label
            aria-invalid={invalid}
            htmlFor={inputId}
            className="cursor-pointer text-center text-white px-2.5 flex items-center h-full bg-gray-500"
          >
            {labelPlaceholder}
          </label>
        )}
        <label className="flex items-center h-full gap-2 flex-1 px-3.5 cursor-text bg-white">
          {left && <Icon name={left} className="size-4 shrink-0 text-gray-600" />}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-errormessage={errorInputId}
            aria-describedby={message}
            className={clsx(className, inputPlaceholderClassName, disabled && inputDisabledClassName, "size-full text-gray-700 focus:outline-hidden")}
            {...otherProps}
          />
          {invalid && <Icon name="alert-circle" className="size-4 shrink-0 text-red-500" />}
          {right && !invalid && <Icon name={right} className="size-4 shrink-0 text-gray-600" />}
        </label>
      </div>

      {message && <Message id={errorInputId} className="mt-1.5" text={message} invalid={invalid} />}
    </div>
  );
});
