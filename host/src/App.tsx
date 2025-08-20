import React from "react";
import ReactDOM from "react-dom/client";
//@ts-ignore
import Counter from "remote/Counter";
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
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Custom</div>
    <Counter />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
