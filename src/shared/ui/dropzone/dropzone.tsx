import { forwardRef, useImperativeHandle, useRef } from "react";

import clsx from "clsx/lite";

import { DropzoneFileAccept, FileAcceptTypes } from "@/shared/const/file-types-const";

import { Icon } from "../icon";

interface IUIDropzoneProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showIcon?: boolean;
  disabled?: boolean;
  wrapperClassName?: string;
  onChangeCustom: (files: File[]) => void;
}

const accepts = DropzoneFileAccept.toString();

export const Dropzone = forwardRef<HTMLInputElement, IUIDropzoneProps>((props: IUIDropzoneProps, ref) => {
  const { showIcon, disabled, wrapperClassName, onChangeCustom, ...otherProps } = props;

  const customRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => customRef.current!, []);

  const handleButtonClick = () => {
    customRef.current?.click();
  };

  const handleFilesAccept = (files: FileList) => {
    const acceptedFiles = Array.from(files).filter((file) => {
      const isAccepted = DropzoneFileAccept.includes(file.type as FileAcceptTypes);
      if (!isAccepted) alert(`Тип файла ${file.name} не поддерживается`);
      return isAccepted;
    });

    onChangeCustom(acceptedFiles);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    handleFilesAccept?.(event.target.files);
  };

  const handleButtonDrop = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleFilesAccept?.(event.dataTransfer.files);
  };

  const handleButtonDragOver = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onDrop={handleButtonDrop}
      onClick={handleButtonClick}
      onDragOver={handleButtonDragOver}
      className={clsx(
        wrapperClassName,
        showIcon && "p-12",
        !disabled && "cursor-pointer bg-white",
        disabled && "cursor-not-allowed bg-gray-50",
        "border border-gray-200 rounded-lg flex items-center flex-col justify-center gap-5",
        "transition hover:border-dashed hover:border-primary-500 disabled:border-gray-300 disabled:border-solid",
      )}
    >
      {/* //! Не стоит убирать value={undefined} в input так как это влияет на то как работает input-file с customHandler */}
      <input {...otherProps} hidden type="file" ref={customRef} accept={accepts} onChange={handleChange} value={undefined} />
      {showIcon && <Icon name="cloud-upload" className={clsx(disabled && "text-gray-50", !disabled && "text-primary-500")} />}
      <div className="text-center font-gotham">
        <h4 className={clsx("text-base  font-medium", disabled && "text-gray-300", !disabled && "text-gray-800")}>Загрузите ваши файлы</h4>
        <p className={clsx("text-sm  font-light", disabled && "text-gray-300", !disabled && "text-gray-400")}>Maximum size: 50MB</p>
      </div>
    </button>
  );
});
