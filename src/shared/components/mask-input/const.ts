import type { MaskitoOptions, MaskitoPreprocessor } from "@maskito/core";
import { maskitoAddOnFocusPlugin, maskitoCaretGuard, maskitoPrefixPostprocessorGenerator } from "@maskito/kit";

export const enum MaskInputOptions {
  Phone = "Phone",
  Color = "Color",
}

export const InputMasks: Record<MaskInputOptions, { options: MaskitoOptions }> = {
  [MaskInputOptions.Phone]: {
    options: {
      mask: ["+", "9", "9", "8", " ", "(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/],
      preprocessors: [createCompletePhoneInsertionPreprocessor()],
      postprocessors: [maskitoPrefixPostprocessorGenerator("+998 ")],
      plugins: [maskitoAddOnFocusPlugin("+998 "), maskitoCaretGuard((value, [from, to]) => [from === to ? "+998 ".length : 0, value.length])],
    },
  },
  [MaskInputOptions.Color]: {
    options: {
      mask: ["#", /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/],
      plugins: [maskitoAddOnFocusPlugin("#")],
    },
  },
};

function createCompletePhoneInsertionPreprocessor(): MaskitoPreprocessor {
  const trimPrefix = (value: string): string => value.replace(/^(\+?998?)\s?/, "");
  const countDigits = (value: string): number => value.replaceAll(/\D/g, "").length;

  return ({ elementState, data }) => {
    const { value, selection } = elementState;

    return {
      elementState: {
        selection,
        value: countDigits(value) > 11 ? trimPrefix(value) : value,
      },
      data: countDigits(data) >= 11 ? trimPrefix(data) : data,
    };
  };
}
