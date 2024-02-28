import React from "react";
import "./add-button.style.css";

const AddButton = ({ title, onClick }) => {
  return (
    <button class="add-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default AddButton;
