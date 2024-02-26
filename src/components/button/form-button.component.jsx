import React from "react";
import "./form-button.style.css";

const FormButton = ({ title }) => {
  return (
    <button class="form-field" type="submit">
      {title}
    </button>
  );
};

export default FormButton;
