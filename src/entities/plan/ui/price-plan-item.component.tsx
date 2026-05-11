import { memo, useMemo } from "react";

import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon";

import { PricePlanItemClassNames } from "../common/price-plan-classnames";
import { IPricePlan, PricePlan } from "../model/plan.contract";

interface IPricePlanItem extends IPricePlan {
  value: PricePlan;
}

export const PricePlanItem = memo((props: IPricePlanItem) => {
  const { planType, value, title, subTitle, benefits, price, priceInfo } = props;
  const isActive = useMemo(() => value === planType, [planType, value]);

  return (
    <div
      className={clsx(
        "p-2.5 grid grid-flow-row gap-10 shadow-md rounded-[25px] cursor-pointer transform transition-transform duration-300 border border-solid border-transparent",
        isActive && "border-green-200 shadow-green-100 scale-110",
      )}
    >
      <div className={clsx("p-3.5 pt-7 bg-linear-to-br h-fit text-white grid rounded-[20px]", PricePlanItemClassNames[planType].bgColor)}>
        <p className="font-gotham font-bold text-xl mb-3">{planType}</p>
        <span className="font-gotham font-medium text-sm mb-5">{title}</span>
        <span className="font-gotham font-medium text-xs">{subTitle} </span>
      </div>

      <div className="grid items-end pl-3.5">
        <ul className="grid gap-2">
          {benefits.map((item, index) => {
            return (
              <li key={index} className="font-gotham font-medium text-xs text-black flex items-center gap-2">
                <Icon name="check" className="size-4 stroke-primary stroke-2" /> {item.title}
              </li>
            );
          })}
        </ul>

        <div className="grid mt-4 gap-1">
          <span className="font-gotham font-bold text-sm">${price} USD</span>
          <span className="font-gotham font-medium text-xs text-secondary">{priceInfo}</span>
        </div>
      </div>
    </div>
  );
});
