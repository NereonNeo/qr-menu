import { useId } from "react";

import clsx from "clsx/lite";
import ReactSelect, { type ClassNamesConfig, type GroupBase, type Props, type SelectComponentsConfig } from "react-select";

import { IconNameTypes } from "@/shared/const/icon.const";
import { Label } from "@/shared/ui/label/label.entry";
import { Message } from "@/shared/ui/message/message.entry";

import { selectClassNames, selectComponents } from "./select.const";
import { ISelectType } from "./select.contract";

interface ISelectBaseProps<ValueType = string, IsMulti extends boolean = boolean> extends Props<
  ISelectType<ValueType>,
  IsMulti,
  GroupBase<ISelectType<ValueType>>
> {
  label?: string;
  className?: string;
  icon?: IconNameTypes;
  wrapperClassName?: string;
  message?: string;
  invalid?: boolean;
  withoutBorder?: boolean;
}

type ISelectMainProps<ValueType = string, IsMulti extends boolean = boolean> = (
  | {
      bottomAction?: false;
    }
  | {
      bottomAction: true;
      onApprove(selected: ISelectType<ValueType>): void;
      onCancel?(): void;
    }
) &
  ISelectBaseProps<ValueType, IsMulti>;

export function Select<ValueType = string, IsMulti extends boolean = false>(props: ISelectMainProps<ValueType, IsMulti>) {
  const forId = useId();

  return (
    <div className={clsx(props.wrapperClassName)}>
      {props.label && <Label className="mb-1.5" htmlFor={forId} text={props.label} />}
      <ReactSelect
        id={forId}
        unstyled
        tabSelectsValue
        openMenuOnFocus
        menuPlacement="auto"
        menuPosition={props.menuPosition || "fixed"}
        isSearchable={false}
        menuShouldScrollIntoView={false}
        isMulti={props.isMulti}
        options={props.options}
        closeMenuOnSelect={!props.isMulti && !props.bottomAction}
        components={selectComponents as SelectComponentsConfig<ISelectType<ValueType>, IsMulti, GroupBase<ISelectType<ValueType>>>}
        classNames={selectClassNames as ClassNamesConfig<ISelectType<ValueType>, IsMulti, GroupBase<ISelectType<ValueType>>>}
        {...props}
      />

      <Message invalid={props.invalid} text={props.message} />
    </div>
  );
}
