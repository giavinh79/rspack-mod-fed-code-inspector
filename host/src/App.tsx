import React from "react";
import ReactDOM from "react-dom/client";
//@ts-ignore
import MFE from "remote/MFE";
import "./index.scss";

const App = () => (
  <div style={{ minHeight: "100vh" }}>
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Welcome to the Host Application
      </h2>
      <p style={{ marginBottom: "30px", color: "#6c757d" }}>
        This host application loads and renders microfrontends from remote
        applications.
      </p>

      {/* Render the MFE */}
      <MFE />
    </main>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
