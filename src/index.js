import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { PositionHook } from "./Hook/PositionHook";

ReactDOM.render(
  <React.StrictMode>
    <PositionHook>
      <App />
    </PositionHook>
  </React.StrictMode>,
  document.getElementById("root")
);
