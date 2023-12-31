import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./pages/Rtkquery";
import Store from "./Redux/Store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider store={Store} api={productsApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
