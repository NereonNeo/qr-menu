export type CardStyle = "sharp" | "soft" | "round";

export interface ICustomizationForm {
  accentColor: string;
  fontFamily: string;
  cardStyle: CardStyle;
  darkMode: boolean;
}

export interface IBrandingForm {
  logo: File | null;
  coverImage: File | null;
  name: string;
  description: string;
  venueType: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  wifiSsid: string;
  wifiPassword: string;
  wifiVisible: boolean;
}
