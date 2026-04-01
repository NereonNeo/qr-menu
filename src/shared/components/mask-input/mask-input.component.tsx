import { Ref, useEffect, useImperativeHandle, useMemo, useRef } from "react";

import { MaskitoOptions, maskitoTransform } from "@maskito/core";
import { useMaskito } from "@maskito/react";

import { IInputProps, Input } from "@/shared/ui/input";
import { mergeRefs } from "@/shared/utils/refs-merge";

import { InputMasks, MaskInputOptions } from "./mask-input.const";

interface IMaskInputProps extends IInputProps {
  maskOption: MaskInputOptions;
  maskitoOption?: { options: MaskitoOptions };
  ref?: Ref<HTMLInputElement>;
}

export const MaskInput = (props: IMaskInputProps) => {
  const { maskOption, onInput, ref, maskitoOption, value, ...otherProps } = props;

  const parseOptions: { options: MaskitoOptions } = useMemo(() => ({ ...InputMasks[maskOption], ...maskitoOption }), [maskOption, maskitoOption]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const maskedMaskitoRef = useMaskito(parseOptions);

  const setMaskitoRef: React.RefCallback<HTMLInputElement> = (node) => {
    maskedMaskitoRef(node);
  };

  useImperativeHandle(ref, () => inputRef.current!, []);

  useEffect(() => {
    //! Сделано для изначального форматирования в сценариях когда у нас контролируемый input
    if (!inputRef.current) return;

    inputRef.current.value = maskitoTransform(String(value), parseOptions.options);
  }, [value]);

  const handleOnInput: React.InputEventHandler<HTMLInputElement> = (event) => {
    onInput?.(event);
  };

  return <Input {...otherProps} ref={mergeRefs(setMaskitoRef, inputRef)} onInput={handleOnInput} />;
};
