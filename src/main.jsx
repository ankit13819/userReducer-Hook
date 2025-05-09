import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "./index.css";
import { GlobalProvider } from "./Advanced/useReducerWithContextApi/GlobalState.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
