export type CardStyle = "sharp" | "soft" | "round";

export interface ICustomizationForm {
  accentColor: string;
  fontFamily: string;
  cardStyle: CardStyle;
  darkMode: boolean;
}
