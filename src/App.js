import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Welcome } from "./screens/welcome";
import { Home } from "./screens/home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />

        {/* Add a default route */}
        <Route index element={<Welcome />} />
      </Routes>
    </>
  );
}
