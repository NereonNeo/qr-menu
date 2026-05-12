import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import "unfonts.css";

import { App } from "./app/app.component";

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
