import React, { InputHTMLAttributes, useId } from "react";

import { Input } from "@/shared/ui/input/input.entry";

interface IPricePlanRadioProps {
  value?: string;
  className?: string;
  children: React.ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
export const PricePlanRadio = (props: IPricePlanRadioProps) => {
  const { children, value, inputProps, className } = props;

  const currentId = useId();

  return (
    <label htmlFor={currentId}>
      <Input {...inputProps} className={className} wrapperClassName="hidden" type="radio" value={value} id={currentId} />
      {children}
    </label>
  );
};
