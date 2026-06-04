import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TravelToastProvider } from "./context/TravelToastContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TravelToastProvider>
      <App />
    </TravelToastProvider>
  </React.StrictMode>
);