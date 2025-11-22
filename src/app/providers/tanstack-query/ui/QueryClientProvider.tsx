import { QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/shared/api/query-client";

type QueryClientProviderProps = {
  children?: React.ReactNode;
};

export const QueryClientProvider = (props: QueryClientProviderProps) => {
  const { children } = props;

  return <TanstackQueryClientProvider client={queryClient}>{children}</TanstackQueryClientProvider>;
};
