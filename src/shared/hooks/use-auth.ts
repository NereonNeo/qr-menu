//! Это тестовый хук имитация бекэнда
import { PricePlan } from "@/entities/plan";

export const useAuth = () => {
  const signIn = async (): Promise<{ plan: PricePlan | undefined }> => {
    const boolean = await new Promise((resolve) => setTimeout(resolve, 2000, true));
    const random = Math.round(Math.random() * (1 - 0)) + 0;
    if (boolean) localStorage.setItem("isAuthenticated", "true");

    return random ? { plan: PricePlan.Start } : { plan: undefined };
  };

  const signOut = async () => {
    const boolean = await new Promise((resolve) => setTimeout(resolve, 2000, true));
    if (boolean) localStorage.removeItem("isAuthenticated");
  };

  const isLogged = async () => {
    const boolean = await new Promise((resolve) => setTimeout(resolve, 2000, true));
    if (boolean) return localStorage.getItem("isAuthenticated") === "true";
  };

  return { signIn, signOut, isLogged };
};
