import { useState } from "react";

import { Control, Controller, UseFormSetValue } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Dropzone } from "@/shared/ui/dropzone";
import { Label } from "@/shared/ui/label";

import { IProduct } from "../types";

interface IProductImageProps {
  control: Control<IProduct, unknown>;
  setValue: UseFormSetValue<IProduct>;
  className?: string;
  label: string;
}

export const ProductImage = (props: IProductImageProps) => {
  const { setValue, control, label, className } = props;
  const [files, setFiles] = useState<File[]>([]);

  const handleDropzoneChange = (images: File[]) => {
    const summary = files.concat(images);

    setFiles(summary);
    setValue("img", summary, { shouldValidate: true });
  };

  const handleDelete = (id: number) => () => {
    const summary = files.filter((file) => file.lastModified !== id);

    setFiles(summary);
    setValue("img", summary, { shouldValidate: true });
  };

  return (
    <div className={className}>
      <Label text={label} className="mb-1.5 text-l font-gotham" />
      <div className="flex gap-3">
        <Controller
          name="img"
          control={control}
          rules={{ required: true }}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { onChange, value, ...otherProps } }) => (
            <Dropzone wrapperClassName="min-w-72 min-h-56" multiple showIcon onChangeCustom={handleDropzoneChange} {...otherProps} />
          )}
        />

        <div className="grid grid-flow-col justify-start gap-3 overflow-y-auto">
          {files.map((file) => {
            const dataUrl = URL.createObjectURL(file);

            return (
              <div key={file.lastModified} className="h-56 w-72 rounded-md overflow-hidden relative">
                <Button onClick={handleDelete(file.lastModified)} className="absolute top-2 right-2" left="trash" />
                <img src={dataUrl} className="h-full w-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
