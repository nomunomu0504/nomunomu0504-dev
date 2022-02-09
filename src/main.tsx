import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { registerSW } from "virtual:pwa-register";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// サービスワーカーを登録
registerSW();
