import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Provider } from "react-redux";
// import store from "./redux/store.js";
import { AuthContextProvider } from "./context/AuthContext.jsx";
// import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
  // </Provider>
);
