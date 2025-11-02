import { ISignUpSteps } from "@/entities/auth";
import { IPricePlan, PricePlanItem, PricePlanRadio } from "@/entities/price-plan";
import { PricePlanArr } from "@/entities/price-plan/const";
import { useCallback } from "react";
import { useWatch } from "react-hook-form";

interface ISignUpPrice extends ISignUpSteps {}

export const SignUpPrice = (props: ISignUpPrice) => {
  const { register, children, control } = props;
  const chosenPlan = useWatch({ control, name: "pricePlan" });
  const planRegister = register("pricePlan", { required: true });

  const pricePlanRender = useCallback(
    (item: IPricePlan, index: number) => {
      return (
        <PricePlanRadio key={index} value={item.planType} inputProps={planRegister}>
          <PricePlanItem
            price={item.price}
            title={item.title}
            value={chosenPlan}
            benefits={item.benefits}
            subTitle={item.subTitle}
            planType={item.planType}
            priceInfo={item.priceInfo}
          />
        </PricePlanRadio>
      );
    },
    [chosenPlan, planRegister],
  );

  return (
    <div className="grid grid-rows-3 gap-9 px-40 h-full items-center justify-items-center">
      <div className="grid gap-4 text-center">
        <h1>Logo</h1>
        <h2 className="font-gotham font-bold text-4xl text-black">Выберите Подписку</h2>
        <p className="font-gotham font-normal text-xs text-secondary">Можете изменить в любое время</p>
      </div>
      <div className="grid  grid-cols-4 gap-7">{PricePlanArr.map(pricePlanRender)}</div>
      <div className="w-96">{children}</div>
    </div>
  );
};
