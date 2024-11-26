import { StrictMode } from "react";
import { createRoot } from "react-dom/client.js";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
