import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Imports
import App from "./app";
// Stylesheet
import "./assets/css/index.css";

const index = document.getElementById("root");
const root = createRoot(index);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
