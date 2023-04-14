import React from "react";
import "../App.css";

function Done({ children }) {
  return (
    <div className="Done">
      <h3>📌 DONE ZONE</h3>
      {children}
    </div>
  );
}

export default Done;
