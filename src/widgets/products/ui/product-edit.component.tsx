import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { TextArea } from "@/shared/ui/textarea";
import { formErrorsHandler } from "@/shared/utils/form-error-adapter";

import { IProduct, ProductImage } from "@/entities/product/product.entry";

export const ProductEdit = () => {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IProduct>({ mode: "onTouched" });

  const errorsInit = formErrorsHandler(errors);

  const handleCreate = handleSubmit(() => {});

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-gotham font-medium">Продукт: $name</h1>
        <Button sizeVariant="m" form="product-create-form" disabled={!isValid} type="submit" content="Изменить" />
      </div>
      <form id="product-create-form" onSubmit={handleCreate}>
        <ProductImage className="mb-10" label="Картинки продукта:" control={control} setValue={setValue} />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          <Input
            invalid={errorsInit("title").invalid}
            message={errorsInit("title").message}
            label="Название продукта:"
            {...register("title", { required: "Пожалуйста заполните название" })}
          />
          <Input
            invalid={errorsInit("price").invalid}
            message={errorsInit("price").message}
            label="Цена продукта:"
            {...register("price", { required: "Пожалуйста заполните цену" })}
          />
          <Input
            invalid={errorsInit("count").invalid}
            message={errorsInit("count").message}
            label="Количество продукта:"
            {...register("count", { required: "Пожалуйста заполните количество" })}
          />

          <TextArea
            rows={4}
            wrapperClassName="col-span-full"
            invalid={errorsInit("description").invalid}
            message={errorsInit("description").message}
            label="Описание продукта:"
            {...register("description", { required: "Пожалуйста заполните описание" })}
          />
        </div>
      </form>
    </>
  );
};
