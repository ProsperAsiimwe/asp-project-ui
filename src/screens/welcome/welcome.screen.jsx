import React, { useState } from "react";
import { FormInput } from "../../components/form";
import { FormButton } from "../../components/button";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import "./welcome.style.css";
import { useAppState } from "../../store/AppStateContext";
import Message from "../../components/messages/message.component";

const Welcome = () => {
  const navigate = useNavigate();
  const { handleSetUserEmail } = useAppState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setErrorMessage("Please enter your email.");
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      handleSetUserEmail(email);
      navigate("/home");
    }
  };

  return (
    <div class="form-container">
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CLOCKWISE</h2>
        </div>
        <p className="App-intro">
          CLOCKWISE stands for{" "}
          <code>
            Classroom, Lecturer, and Course Keeper With Intelligent Scheduling
            Expertise.
          </code>
          <br />
          <br />
          It is an Answer Set Programming time-table generation class project by
          students at the University Of Cape Town (class of 2024) and it's
          purpose is to efficiently generate lecture timetables with the help of
          logic programming.
        </p>
      </div>

      <form class="register-form" onSubmit={handleSubmit}>
        <FormInput
          inputOptions={{
            id: "email",
            class: "form-field",
            type: "text",
            placeholder: "Email",
            name: "email",
          }}
        />

        {errorMessage && <Message message={errorMessage} isSuccess={false} />}

        <FormButton title={"Proceed"} />
      </form>
    </div>
  );
};

export default Welcome;
