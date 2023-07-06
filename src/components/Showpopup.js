import React from "react";
import Popup from "../components/Banner";

function Showpopup() {
  return (
    <div>
      {showpopup && (
        <div className="popup">
          <h3>Popup Window</h3>
          <p>Some information goes here.</p>
        </div>
      )}
    </div>
  );
}

export default Showpopup;
