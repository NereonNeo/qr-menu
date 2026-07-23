import clsx from "clsx/lite";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export const Label = (props: ILabelProps) => {
  const { text, className, ...otherProps } = props;

  return (
    <label className={clsx("font-medium text-s text-gray-500 cursor-pointer inline-block", className)} {...otherProps}>
      {text}
    </label>
  );
};
