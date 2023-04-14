import React from "react";
import "../App.css";

const Working = ({ children }) => {
  return (
    <div className="Working">
      <h2 style={{ fontSize: "26px" }}>🔥 WORKING ZONE</h2>
      {children}
    </div>
  );
};

export default Working;
