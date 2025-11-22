import type { LinkProps } from "@tanstack/react-router";
import { Link as RouterLink } from "@tanstack/react-router";
import clsx from "clsx";

import { linkSizeVariantClassNames, linkStyleVariantClassNames } from "./link-class-names";
import { LinkSizeVariantTypes, LinkStyleVariantTypes } from "./link-types";

interface ILinkProps extends LinkProps<"a"> {
  className?: string;
  sizeVariant?: LinkSizeVariantTypes;
  colorVariant?: LinkStyleVariantTypes;
}

export const Link = (props: ILinkProps) => {
  const { children, className, sizeVariant = "xs", colorVariant = "primary", ...otherProps } = props;

  return (
    <RouterLink
      className={clsx(
        "font-gotham font-medium outline-hidden underline-offset-4",
        linkSizeVariantClassNames[sizeVariant],
        linkStyleVariantClassNames[colorVariant].focus,
        linkStyleVariantClassNames[colorVariant].hover,
        linkStyleVariantClassNames[colorVariant].element,
        className,
      )}
      {...otherProps}
    >
      {children}
    </RouterLink>
  );
};
