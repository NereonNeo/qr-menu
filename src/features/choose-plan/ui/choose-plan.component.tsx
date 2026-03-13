import { useCallback } from "react";

import { useForm } from "react-hook-form";

import { IPricePlan, PricePlanArr, PricePlanItem, PricePlanRadio } from "@/entities/plan/plan.entry";

import { ChoosePlanForm } from "../common/choose-plan.types";

export const ChoosePlan = () => {
  const { register, getValues } = useForm<ChoosePlanForm>();
  const plan = getValues("plan");

  const pricePlanRender = useCallback(
    (item: IPricePlan, index: number) => {
      return (
        <PricePlanRadio key={index} value={item.planType} inputProps={register("plan", { required: true })}>
          <PricePlanItem
            price={item.price}
            title={item.title}
            value={plan}
            benefits={item.benefits}
            subTitle={item.subTitle}
            planType={item.planType}
            priceInfo={item.priceInfo}
          />
        </PricePlanRadio>
      );
    },
    [plan, register],
  );

  return (
    <div className="grid grid-rows-3 gap-9 px-40 h-full items-center justify-items-center">
      <div className="grid gap-4 text-center">
        <h1>Logo</h1>
        <h2 className="font-gotham font-bold text-4xl text-black">Выберите Подписку</h2>
        <p className="font-gotham font-normal text-xs text-secondary">Можете изменить в любое время</p>
      </div>
      <div className="grid  grid-cols-4 gap-7">{PricePlanArr.map(pricePlanRender)}</div>
    </div>
  );
};
