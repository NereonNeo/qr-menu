import { ISignUpSteps } from "@/entities/auth";
import { Input } from "@/shared/ui/input";
interface ISignUpMain extends ISignUpSteps {}

export const SignUpMain = (props: ISignUpMain) => {
  const { register, children } = props;

  return (
    <div className="grid md:grid-cols-2 h-full">
      <div>
        <div className="p-8">
          <span className="text-secondary">Logo</span>
        </div>

        <div className="grid xl:px-36 md:px-20 px-10 md:mt-11">
          <div className="grid justify-center gap-4">
            <h1 className="font-gotham font-medium md:text-3xl text-xxl text-center text-black">
              Присоединиться к <span className="font-kodchasan font-semibold">SHOPNEXT</span>
            </h1>
            <p className="font-gotham font-normal text-xs text-secondary text-center">Бесплатная регистрация</p>
          </div>
          <div className="grid gap-4 mt-11">
            <Input placeholder="shopnext.uz/shopname" {...register("name", { required: true })} />
            <Input placeholder="Phone" {...register("phoneNumber", { required: true })} />
            <Input placeholder="Email" {...register("email", { required: true })} />
            {children}
          </div>

          <div className="grid text-center mt-4">
            <p className="font-gotham font-normal text-secondary text-xs">
              Нажимая <span className="font-medium">Продолжить</span>, вы соглашаетесь с Shopnext Правила и условия и подтвердите, что вы прочитали
              наши Политику о конфиденциальности. Вы можете получать от нас предложения, новости и обновления.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-red-100 max-md:hidden" />
    </div>
  );
};
