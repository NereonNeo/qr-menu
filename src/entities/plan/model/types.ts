export const enum PricePlan {
  Start = "Start",
  Medium = "Medium",
  Pro = "Pro",
  Golden = "Golden",
}

export interface IPricePlan {
  planType: PricePlan;
  title: string;
  subTitle: string;
  benefits: Array<{ title: string }>;
  price: number;
  priceInfo: string;
}
