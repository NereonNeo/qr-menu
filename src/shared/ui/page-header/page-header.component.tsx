import clsx from "clsx/lite";

interface IPageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const PageHeader = (props: IPageHeaderProps) => {
  const { title, description, action, className } = props;

  return (
    <div className={clsx(className, "flex items-center justify-between")}>
      <div>
        <h1 className="text-xxl font-gotham font-medium text-gray-900">{title}</h1>
        {description && <p className="text-s text-gray-500 font-gotham mt-1">{description}</p>}
      </div>
      {action}
    </div>
  );
};
