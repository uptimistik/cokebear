import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import WebApp from "@twa-dev/sdk";

WebApp.ready();
WebApp.isVerticalSwipesEnabled = false;

// Set the header color of the Telegram Web App interface to white
WebApp.headerColor = "#FFF";
WebApp.disableVerticalSwipes();
WebApp.viewportHeight;
// Set the background color of the Telegram Web App interface to white
WebApp.backgroundColor = "#FFF";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
