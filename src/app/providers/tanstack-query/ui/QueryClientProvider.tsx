import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";

type QueryClientProviderProps = {
  children?: React.ReactNode;
};

export const QueryClientProvider = (props: QueryClientProviderProps) => {
  const { children } = props;

  return <TanstackQueryClientProvider client={queryClient}>{children}</TanstackQueryClientProvider>;
};
