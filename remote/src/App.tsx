import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const App = () => (
  <div
    style={{
      marginTop: "40px",
      fontSize: "24px",
      maxWidth: "1200px",
      margin: "auto",
      padding: "20px",
    }}
  >
    <div>Name: remote</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Custom</div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
