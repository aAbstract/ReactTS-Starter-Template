import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Main.css";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);