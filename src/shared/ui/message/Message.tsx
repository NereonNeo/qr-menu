import clsx from "clsx";

interface IMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  invalid?: boolean;
}

export const Message = (props: IMessageProps) => {
  const { text, invalid, className } = props;

  return <div className={clsx(className, !invalid && "text-gray-500", invalid && "text-red-500", "text-s transition-colors")}>{text}</div>;
};
