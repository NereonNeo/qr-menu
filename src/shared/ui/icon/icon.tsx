import { HTMLAttributes, forwardRef } from "react";

import { type IconNameTypes, iconListComponents } from "@/shared/const/icon.const";

interface IconProps extends HTMLAttributes<SVGSVGElement> {
  name: IconNameTypes;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name, ...otherProps } = props;

  const IconComponent = iconListComponents[name];

  return <IconComponent {...otherProps} ref={ref} />;
});
