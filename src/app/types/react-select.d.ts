import "react-select/base";

import type { IconNameTypes } from "@/shared/types/icon-types";

declare module "react-select/base" {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    icon?: IconNameTypes;
    onApprove?(selected: PropsValue<Option>): void;
    onCancel?(): void;
    bottomAction?: boolean;
    withoutBorder?: boolean;
  }
}
