import { QueryClientProvider } from "./providers/query-client/query-client.entry";
import { Router } from "./providers/router/router.entry";
import "./styles/main.css";

export const App = () => {
  return (
    <QueryClientProvider>
      <Router />
    </QueryClientProvider>
  );
};
