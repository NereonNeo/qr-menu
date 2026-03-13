import { PricePlan } from "../model/types";

export const PricePlanItemClassNames: Record<PricePlan, { bgColor: string }> = {
  [PricePlan.Start]: {
    bgColor: "from-sky-400 to-lime-300",
  },
  [PricePlan.Medium]: {
    bgColor: "from-purple-400 to-rose-300 ",
  },
  [PricePlan.Pro]: {
    bgColor: "from-purple-600 to-blue-500",
  },
  [PricePlan.Golden]: {
    bgColor: "from-yellow-700 yellow-400 to-yellow-300",
  },
};
