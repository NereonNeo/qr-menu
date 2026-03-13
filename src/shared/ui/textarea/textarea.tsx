import { forwardRef } from "react";

import clsx from "clsx/lite";

import { inputDefaultClassName, inputDisabledClassName, inputInvalidClassName, inputPlaceholderClassName } from "@/shared/const/input-const";

import { Label } from "../label/Label";
import { Message } from "../message/Message";

interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  message?: string;
  invalid?: boolean;
  wrapperClassName?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>((props, ref) => {
  const { label, message, invalid, wrapperClassName, disabled, className, ...otherProps } = props;

  return (
    <div className={clsx(wrapperClassName, "font-gotham")}>
      {label && <Label className="mb-1.5" text={label} />}
      <div
        className={clsx(
          disabled && inputDisabledClassName,
          !disabled && invalid && inputInvalidClassName,
          !disabled && !invalid && inputDefaultClassName,
          "border border-gray-300 rounded-md transition-shadow overflow-hidden bg-white",
        )}
      >
        <textarea
          ref={ref}
          disabled={disabled}
          className={clsx(
            className,
            inputPlaceholderClassName,
            disabled && inputDisabledClassName,
            "size-full min-h-12 px-3.5 py-2.5 bg-inherit font-medium focus:outline-hidden text-s placeholder:text-gray-400 block",
          )}
          {...otherProps}
        />
      </div>
      {message && <Message className="mt-1.5" text={message} invalid={invalid} />}
    </div>
  );
});
