import React from "react";
import "./message.styles.css";

const Message = ({ message, isSuccess }) => {
  const className = isSuccess ? "success-message" : "error-message";

  return <div className={className}>{message}</div>;
};

export default Message;
