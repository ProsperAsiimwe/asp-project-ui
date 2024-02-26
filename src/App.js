import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormInput } from "./components/form";
import { FormButton } from "./components/button";

export default function App() {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
    } catch (error) {
      throw new Error(error.message);
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

        <FormButton title={"Proceed"} />
      </form>
    </div>
  );
}
