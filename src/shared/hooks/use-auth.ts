export const useAuth = () => {
  const signIn = async () => {
    const boolean = await new Promise((resolve) => setTimeout(resolve, 2000, true));
    if (boolean) localStorage.setItem("isAuthenticated", "true");
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
