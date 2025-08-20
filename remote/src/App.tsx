import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const App = () => (
  <div
    style={{
      marginTop: "40px",
      maxWidth: "1200px",
      margin: "auto",
      padding: "20px",
    }}
  >
    <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
      Remote Application
    </h1>
    <p>
      This is the standalone remote application that exposes microfrontend
      components.
    </p>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
