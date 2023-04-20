import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main-styles.scss";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/fonts/LEMONMILK-Regular.otf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
