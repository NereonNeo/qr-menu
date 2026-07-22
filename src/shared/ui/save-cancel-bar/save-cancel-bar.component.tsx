import clsx from "clsx/lite";

import { Button } from "@/shared/ui/button";

interface ISaveCancelBarProps {
  isDirty: boolean;
  onCancel: () => void;
  saveText?: string;
  cancelText?: string;
  className?: string;
}

export const SaveCancelBar = (props: ISaveCancelBarProps) => {
  const { isDirty, onCancel, saveText = "Сохранить изменения", cancelText = "Отменить", className } = props;

  return (
    <div className={clsx(className, "flex items-center gap-3")}>
      <Button type="submit" colorVariant="dark" content={saveText} disabled={!isDirty} />
      <button
        type="button"
        onClick={onCancel}
        disabled={!isDirty}
        className="text-s text-gray-500 font-gotham cursor-pointer disabled:cursor-not-allowed disabled:text-gray-300"
      >
        {cancelText}
      </button>
    </div>
  );
};
