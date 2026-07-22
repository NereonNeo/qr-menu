import { Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import { useAuth } from "@/shared/hooks/use-auth";
import { Button } from "@/shared/ui/button/button.entry";
import { Input } from "@/shared/ui/input/input.entry";

import { ISignIn } from "@/entities/auth/auth.entry";

export const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ISignIn>();

  const onSubmit = handleSubmit((data) => {
    signIn();
    navigate({ to: "/" });
    console.log(data);
  });

  return (
    <div className="grid grid-cols-2 h-dvh">
      <div>
        <div className="p-8">
          <span className="text-secondary">Logo</span>
        </div>

        <div className="grid px-36 mt-11">
          <div className="grid justify-center gap-4">
            <h1 className="font-gotham font-medium text-3xl text-center text-black">
              Рады снова видеть вас
              <br />
              <span className="font-kodchasan font-semibold">SHOPNEXT</span>
            </h1>
            <p className="font-gotham font-normal text-xs text-secondary text-center">Заполните поля и войдите в аккаунт</p>
          </div>
          <form onSubmit={onSubmit} className="grid gap-4 mt-11">
            <Input placeholder="Email" {...register("email", { required: true })} />
            <Input placeholder="Password" {...register("password", { required: true })} />
            <Button disabled={!isValid} colorVariant="beige" sizeVariant="m" type="submit" content="Зайти" />
          </form>
          <Link to="/sign-up" className="font-gotham font-normal text-secondary text-xs mt-4 underline">
            Еще нет аккаунта ?
          </Link>
        </div>
      </div>
      <div className="bg-red-100" />
    </div>
  );
};
