import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <button
        onClick={() => setCount((count) => count + 1)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        count is {count}
      </button>
    </div>
  );
}

export default Counter;
