import { IInputProps, Input } from "@/shared/ui/input";
import { useMaskito } from "@maskito/react";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { InputMasks, MaskInputOptions } from "./const";

interface IMaskInputProps extends IInputProps {
  maskOption: MaskInputOptions;
}

export const MaskInput = forwardRef<HTMLInputElement, IMaskInputProps>((props, ref) => {
  const { maskOption, onChange, ...otherProps } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const maskedMaskitoRef = useMaskito(InputMasks[maskOption]);

  useImperativeHandle(ref, () => inputRef.current!, []);

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  const refWithMask = useMemo(
    () => (node: HTMLInputElement | null) => {
      return maskedMaskitoRef(node), (inputRef.current = node);
    },
    [maskedMaskitoRef],
  );

  return <Input {...otherProps} ref={refWithMask} onInput={handleOnInputChange} />;
});
