import { Children } from "react";

import clsx from "clsx/lite";
import { ClassNamesConfig, type GroupBase, type MultiValue, type SelectComponentsConfig, components } from "react-select";

import { inputDefaultClassName, inputDisabledClassName, inputInvalidClassName } from "@/shared/const/input.const";
import { Avatar } from "@/shared/ui/avatar/avatar.entry";
import { Badge } from "@/shared/ui/badge/badge.entry";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

import type { ISelectType } from "./select.contract";

export const selectComponents: SelectComponentsConfig<ISelectType<unknown>, true | false, GroupBase<ISelectType<unknown>>> = {
  ClearIndicator: () => null,
  MultiValueRemove: () => null,

  Control: (props) => {
    return (
      <components.Control {...props}>
        {props.selectProps.icon && <Icon name={props.selectProps.icon} className="size-4" />}
        {props.children}
      </components.Control>
    );
  },

  LoadingIndicator: () => {
    return <Icon name="loader" />;
  },

  Option: (props) => {
    return (
      <components.Option {...props}>
        {props.data.avatar && <Avatar type="img" img={props.data.avatar} className="shrink-0" sizeVariant="xxs" />}
        {props.data.icon && <Icon name={props.data.icon} className="size-4" />}
        <p className="basis-full">{props.children}</p>
        {props.isSelected && <Icon name="check" className="text-primary-500 size-4" />}
      </components.Option>
    );
  },

  MultiValue: (props) => {
    const handleRemoveOption = () => props.selectOption(props.data);

    return (
      <components.MultiValue {...props}>
        <Badge content={props.data.label} onRightClick={handleRemoveOption} avatar={props.data.avatar} right="x" colorVariant="gray" />
      </components.MultiValue>
    );
  },

  Menu: (props) => {
    if (!props.isMulti) return <components.Menu {...props}>{props.children}</components.Menu>;

    const isEmptyValues = props.getValue().length === 0;

    const values = props.selectProps.value as MultiValue<ISelectType<unknown>>;

    return (
      <components.Menu {...props}>
        {!isEmptyValues && (
          <div className="mb-1 flex flex-wrap gap-2 rounded-lg bg-white p-2 shadow-md">
            {values?.map((item) => {
              const handleRemoveOption = () => props.selectOption(item);

              return <Badge content={item.label} onRightClick={handleRemoveOption} avatar={item.avatar} right="x" colorVariant="gray" />;
            })}
          </div>
        )}

        {props.children}
      </components.Menu>
    );
  },

  MenuList: (props) => {
    const handleApprove = () => {
      props.selectProps.onMenuClose();
      props.selectProps.onApprove?.(props.selectProps.value);
    };

    const handleCancel = () => {
      props.clearValue();
      props.selectProps.onCancel?.();
      props.selectProps.onMenuClose();
      props.selectProps.onApprove?.(null);
    };

    return (
      <components.MenuList {...props}>
        {props.children}
        {props.selectProps.bottomAction && (
          <div className="mt-2 flex gap-3 border-t border-t-gray-100 p-4">
            <Button onClick={handleCancel} sizeVariant="m" colorVariant="stroke-gray" content="Отменить" />
            <Button onClick={handleApprove} sizeVariant="m" colorVariant="beige" content="Применить" />
          </div>
        )}
      </components.MenuList>
    );
  },

  ValueContainer: (props) => {
    //! Временное решение так как время поджимает
    //TODO Сделать отображения контента динамическим исходя из ширины родителя
    const items = Children.toArray(props.children);
    const input = items[items.length - 1]; // последний — это поле ввода
    const values = items.slice(0, -1); // всё остальное — выбранные теги

    const limit = 1; // сколько показываем
    const visible = values.slice(0, limit);
    const hiddenCount = values.length - limit;
    return (
      <components.ValueContainer {...props}>
        {visible}
        {hiddenCount > 0 && <p className="text-primary-600 text-sm font-medium">+{hiddenCount}</p>}
        {input}
      </components.ValueContainer>
    );
  },
};

export const selectClassNames: ClassNamesConfig<ISelectType<unknown>, false | true, GroupBase<ISelectType<unknown>>> = {
  container: ({ selectProps, isDisabled }) => {
    const isNotValid = selectProps["aria-invalid"];

    return clsx(
      isNotValid && inputInvalidClassName,
      isDisabled && inputDisabledClassName,
      "border rounded-lg transition-shadow px-3.5 h-10 w-full!",
      selectProps.withoutBorder ? "border-none px-0!" : inputDefaultClassName,
    );
  },
  control: ({ selectProps }) => {
    return clsx("flex!", selectProps.withoutBorder ? "gap-1" : "gap-2");
  },
  placeholder: () => {
    return clsx("text-gray-400 ");
  },
  dropdownIndicator: ({ isFocused }) => clsx(isFocused && "rotate-180"),

  menu: ({ placement }) => clsx(placement === "top" && "mb-2", placement === "bottom" && "mt-2 w-full min-w-fit", "z-20! w-full! min-w-max"),
  menuList: () => clsx("bg-white rounded-lg shadow-md p-2"),
  multiValueLabel: () => {
    return clsx("text-gray-500");
  },

  option: ({ isFocused, isDisabled, isSelected }) =>
    clsx(
      !isDisabled && isFocused && "bg-gray-50",
      !isDisabled && "text-gray-700 !cursor-pointer",
      isDisabled && "text-gray-300 !cursor-not-allowed",
      isSelected && "bg-gray-50",
      "px-4 py-2.5 font-medium rounded-lg !flex !text-base items-center gap-2",
    ),

  valueContainer: (props) => {
    return clsx(props.isMulti && "flex gap-2 max-h-[2.375rem]", "text-sm text-gray-700 font-medium");
  },
};
