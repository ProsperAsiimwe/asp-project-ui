import React, { createContext, useState, useContext } from "react";

const AppStateContext = createContext();

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [courses, setCourses] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  const handleSetUserEmail = (data) => {
    setUserEmail(data);
  };

  const handleSetCourses = (newCourses) => {
    setCourses(newCourses);
  };

  const handleSetRooms = (newRooms) => {
    setRooms(newRooms);
  };

  const handleSetTeachers = (newTeachers) => {
    setTeachers(newTeachers);
  };

  const handleSetTimeSlots = (newTimeSlots) => {
    setTimeSlots(newTimeSlots);
  };

  return (
    <AppStateContext.Provider
      value={{
        userEmail,
        handleSetUserEmail,
        courses,
        handleSetCourses,
        rooms,
        handleSetRooms,
        teachers,
        handleSetTeachers,
        timeSlots,
        handleSetTimeSlots,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};
