import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./home.style.css";
import { useAppState } from "../../store/AppStateContext";
import { FormInput } from "../../components/form";
import { AddButton, FormButton } from "../../components/button";
import { FaTimesCircle } from "react-icons/fa";
import Message from "../../components/messages/message.component";

const Home = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([""]);
  const [rooms, setRooms] = useState([""]);
  const [teachers, setTeachers] = useState([""]);
  const [timeSlots, setTimeSlots] = useState([""]);

  const [errorMessage, setErrorMessage] = useState("");

  const {
    userEmail,
    handleSetCourses,
    handleSetRooms,
    handleSetTeachers,
    handleSetTimeSlots,
  } = useAppState();

  useEffect(() => {
    if (userEmail.length === 0) {
      navigate("/");
    }
  });

  // Add predicates
  const handleAddCourse = () => {
    setCourses([...courses, ""]);
  };

  const handleAddRoom = () => {
    setRooms([...rooms, ""]);
  };

  const handleAddTeacher = () => {
    setTeachers([...teachers, ""]);
  };

  const handleAddTimeSlot = () => {
    setTimeSlots([...timeSlots, ""]);
  };

  // Remove predicates
  const handleRemoveCourse = (index) => {
    const updated = [...courses];
    updated.splice(index, 1);
    setCourses(updated);
  };

  const handleRemoveRoom = (index) => {
    const updated = [...rooms];
    updated.splice(index, 1);
    setRooms(updated);
  };

  const handleRemoveTeacher = (index) => {
    const updated = [...teachers];
    updated.splice(index, 1);
    setTeachers(updated);
  };

  const handleRemoveTimeSlot = (index) => {
    const updated = [...timeSlots];
    updated.splice(index, 1);
    setTimeSlots(updated);
  };

  // On change listeners
  const handleCourseChange = (index, value) => {
    const updated = [...courses];
    updated[index] = value;
    setCourses(updated);
  };

  const handleRoomChange = (index, value) => {
    const updated = [...rooms];
    updated[index] = value;
    setRooms(updated);
  };

  const handleTeacherChange = (index, value) => {
    const updated = [...teachers];
    updated[index] = value;
    setTeachers(updated);
  };

  const handleTimeSlotChange = (index, value) => {
    const updated = [...timeSlots];
    updated[index] = value;
    setTimeSlots(updated);
  };

  // Form submit
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      // Update global state with the values
      handleSetCourses(courses);
      handleSetRooms(rooms);
      handleSetTeachers(teachers);
      handleSetTimeSlots(timeSlots);

      // Send values to API endpoint in JSON form
      const data = {
        courses,
        rooms,
        teachers,
        timeSlots,
      };

      const response = await axios.post("your-api-endpoint", data);

      if (response.status === 200) {
        // Handle success
      } else {
        // Handle error
        setErrorMessage("Oops, an error occured.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="App">
        <div className="App-header">
          <p className="App-intro">
            <code>
              Predicates: course, room, time_slot, teacher
              <hr />
              Constraints:
              <br />
              1. Ensure that each course is scheduled exactly once in each time
              slot
              <br />
              2. Ensure that each teacher teaches at most one class in each time
              slot
              <br />
              3. Ensure that rooms are not double-booked in each time slot
            </code>
          </p>
        </div>
      </div>

      <form className="home-container" onSubmit={handleSubmit}>
        {/* <div className="form-section"></div> */}

        {errorMessage && <Message message={errorMessage} isSuccess={false} />}

        <div className="home-section">
          <h2>Define Courses</h2>
          <div className="register-form">
            {courses.map((item, index) => (
              <div key={index}>
                <FormInput
                  inputOptions={{
                    id: `item${index}`,
                    type: "text",
                    class: "form-field",
                    placeholder: "Course eg. CSC5030Z",
                    value: item,
                    onChange: (e) => handleCourseChange(index, e.target.value),
                  }}
                />
                {index > 0 && (
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveCourse(index)}>
                    <FaTimesCircle />
                  </button>
                )}
              </div>
            ))}

            <AddButton title={"Add Course"} onClick={handleAddCourse} />
          </div>
        </div>

        <div className="home-section">
          <h2>Define Rooms</h2>
          <div className="register-form">
            {rooms.map((item, index) => (
              <div key={index}>
                <FormInput
                  inputOptions={{
                    id: `item${index}`,
                    type: "text",
                    class: "form-field",
                    placeholder: "Room eg. CS203",
                    value: item,
                    onChange: (e) => handleRoomChange(index, e.target.value),
                  }}
                />
                {index > 0 && (
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveRoom(index)}>
                    <FaTimesCircle />
                  </button>
                )}
              </div>
            ))}

            <AddButton title={"Add Room"} onClick={handleAddRoom} />
          </div>
        </div>

        <div className="home-section">
          <h2>Define Teachers</h2>
          <div className="register-form">
            {teachers.map((item, index) => (
              <div key={index}>
                <FormInput
                  inputOptions={{
                    id: `item${index}`,
                    type: "text",
                    class: "form-field",
                    placeholder: "Teacher first name eg. Jesse",
                    value: item,
                    onChange: (e) => handleTeacherChange(index, e.target.value),
                  }}
                />
                {index > 0 && (
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveTeacher(index)}>
                    <FaTimesCircle />
                  </button>
                )}
              </div>
            ))}

            <AddButton title={"Add Teacher"} onClick={handleAddTeacher} />
          </div>
        </div>

        <div className="home-section">
          <h2>Define Time Slots</h2>
          <div className="register-form">
            {timeSlots.map((item, index) => (
              <div key={index}>
                <FormInput
                  inputOptions={{
                    id: `item${index}`,
                    type: "text",
                    class: "form-field",
                    placeholder: "Time Slot eg 9:00 AM",
                    value: item,
                    onChange: (e) =>
                      handleTimeSlotChange(index, e.target.value),
                  }}
                />
                {index > 0 && (
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveTimeSlot(index)}>
                    <FaTimesCircle />
                  </button>
                )}
              </div>
            ))}

            <AddButton title={"Add Time Slot"} onClick={handleAddTimeSlot} />
          </div>
        </div>

        <div className="remove-button-container">
          <FormButton title="Generate" />
        </div>
      </form>
    </>
  );
};

export default Home;
