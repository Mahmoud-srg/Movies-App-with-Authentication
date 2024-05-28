import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import AuthContextProvider from "./Context/AuthContext.jsx";
import MediaContextProvider from './Context/MediaContext';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthContextProvider>
    <MediaContextProvider>
      <App />
    </MediaContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);
