import { Router } from "./providers/router";
import { QueryClientProvider } from "./providers/tanstack-query/ui/QueryClientProvider";
import "./styles/main.css";

export const App = () => {
  return (
    <QueryClientProvider>
      <Router />
    </QueryClientProvider>
  );
};
