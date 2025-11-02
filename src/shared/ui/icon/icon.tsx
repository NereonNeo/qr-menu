import { iconListComponents } from "@/shared/const/icon-components";
import { IconNameTypes } from "@/shared/types/icon-name-types";
import { forwardRef, HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<SVGSVGElement> {
  name: IconNameTypes;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name, ...otherProps } = props;

  const IconComponent = iconListComponents[name];

  return <IconComponent {...otherProps} ref={ref} />;
});
