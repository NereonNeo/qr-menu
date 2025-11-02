import { FieldError, FieldErrors, FieldValues, get, Path } from "react-hook-form";

export const formErrorsHandler =
  <T extends FieldValues>(errors?: FieldErrors<T>) =>
  (name: Path<T>) => {
    const fieldError = get(errors, name) as FieldError | undefined;

    return {
      invalid: !!fieldError,
      message: fieldError?.message,
    };
  };
