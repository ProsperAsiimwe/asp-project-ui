import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AppStateProvider } from "./store/AppStateContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
