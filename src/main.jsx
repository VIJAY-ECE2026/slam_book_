import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Stomach from "./stomach.jsx";
import App1 from "./app1.jsx";
import App2 from "./usememo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App2/>
  </StrictMode>
);
