import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppTwoComponent from "app2/AppTwoComponent";
ReactDOM.render(
  <>
    <App />
    <AppTwoComponent />
  </>,
  document.getElementById("root")
);