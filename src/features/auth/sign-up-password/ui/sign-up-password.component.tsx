import { Input } from "@/shared/ui/input";

import { ISignUpSteps } from "@/entities/auth/auth.entry";

interface ISignUpPassword extends ISignUpSteps {}

export const SignUpPassword = (props: ISignUpPassword) => {
  const { register, children } = props;

  return (
    <div className="grid md:grid-cols-2 h-full">
      <div>
        <div className="p-8">
          <span className="text-secondary">Logo</span>
        </div>

        <div className="grid xl:px-36 px-10 gap-10">
          <div className="grid gap-4">
            <h1 className="font-gotham  text-black font-bold md:text-3xl text-xxl">Введите пароль</h1>
            <p className="font-gotham font-normal text-secondary text-xs">Выберите надежный пароль, состоящий не менее чем из 8 символов.</p>
          </div>
          <Input placeholder="Пароль" {...register("password", { required: true })} />
          {children}
        </div>
      </div>

      <div className="bg-green-100 max-md:hidden" />
    </div>
  );
};
