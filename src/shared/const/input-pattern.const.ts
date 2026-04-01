export const enum PatternInputOptions {
  Phone = "Phone",
  Email = "Email",
  Color = "Color",
  URL = "Url",
}

export interface IInputPatternTypes {
  value: RegExp;
  message: string;
}

export const InputPatterns: Record<PatternInputOptions, IInputPatternTypes> = {
  [PatternInputOptions.Phone]: {
    value: /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
    message: "Пожалуйста заполните правильный номер",
  },
  [PatternInputOptions.Color]: {
    value: /^#[0-9a-fA-F]{6}$/,
    message: "Пожалуйста введите правильный цвет",
  },
  [PatternInputOptions.Email]: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Пожалуйста заполните правильный адрес электронной почты",
  },
  [PatternInputOptions.URL]: {
    value: /^[a-z]+(?:-[a-z]+)*$/,
    message: "Пожалуйста заполните правильное название магазина",
  },
};
