import React from "react";

function MFE() {
  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #007bff",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        margin: "20px 0",
      }}
    >
      <h2 style={{ color: "#007bff", margin: "0 0 10px 0" }}>
        Microfrontend Component
      </h2>
      <p style={{ margin: 0, fontSize: "16px", color: "#6c757d" }}>
        This is the MFE.
      </p>
      <button
        style={{
          margin: "1rem",
          padding: "1rem",
        }}
        onClick={() => {
          throw new Error("test");
        }}
      >
        Click for error
      </button>
    </div>
  );
}

export default MFE;
