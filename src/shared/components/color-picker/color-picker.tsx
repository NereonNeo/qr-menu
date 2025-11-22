import { ComponentProps, forwardRef, useId, useImperativeHandle, useRef } from "react";

import clsx from "clsx";

import { IInputProps } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

import { MaskInput, MaskInputOptions } from "../mask-input";

interface ColorPickerProps extends ComponentProps<"input">, Pick<IInputProps, "message" | "invalid"> {
  labelText: string;
  wrapperClassname?: string;
}

export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>((props, ref) => {
  const { labelText, message, invalid, onChange, wrapperClassname, ...otherProps } = props;
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef<HTMLInputElement>(null);
  const id = useId();

  useImperativeHandle(ref, () => inputValueRef.current!, [inputValueRef]);

  const handlePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputValueRef.current) return;

    onChange?.(event);
    inputValueRef.current.value = event.target.value;
    inputValueRef.current.focus();
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!colorPickerRef.current) return;

    onChange?.(event);
    colorPickerRef.current.value = event.target.value;
  };

  return (
    <div className={clsx(wrapperClassname)}>
      <Label htmlFor={id} text={labelText} />
      <div className="h-10 w-full flex gap-2">
        <input
          id={id}
          type="color"
          name="color-picker"
          ref={colorPickerRef}
          onChange={handlePickerChange}
          className="h-full w-10 rounded-md overflow-hidden appearance-none [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none"
        />

        <MaskInput
          maskOption={MaskInputOptions.Color}
          onChange={handleColorChange}
          message={message}
          invalid={invalid}
          ref={inputValueRef}
          {...otherProps}
          type="text"
        />
      </div>
    </div>
  );
});
