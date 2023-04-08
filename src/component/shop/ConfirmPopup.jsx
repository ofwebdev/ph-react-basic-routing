import React from "react";
import "./ConfirmPopup.css";

function ConfirmPopup({ message, onConfirm, onCancel }) {
  return (
    <div className="confirm-popup-overlay" onClick={onCancel}>
      <div className="confirm-popup"></div>
      <div className="confirm-popup">
        <div className="confirm-popup-message">{message}</div>
        <div className="confirm-popup-buttons">
          <button className="confirm-popup-button" onClick={onConfirm}>
            Yes
          </button>
          <button className="confirm-popup-button" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
