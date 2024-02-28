import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.style.css";
import { useAppState } from "../../store/AppStateContext";
import { FormInput } from "../../components/form";
import { AddButton, FormButton } from "../../components/button";
import { FaTimesCircle } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [employers, setEmployers] = useState([""]);

  const { userEmail } = useAppState();

  useEffect(() => {
    if (userEmail.length === 0) {
      navigate("/");
    }
  });

  const handleAddEmployer = () => {
    setEmployers([...employers, ""]);
  };

  const handleRemoveEmployer = (index) => {
    const updatedEmployers = [...employers];
    updatedEmployers.splice(index, 1);
    setEmployers(updatedEmployers);
  };

  const handleEmployerChange = (index, value) => {
    const updatedEmployers = [...employers];
    updatedEmployers[index] = value;
    setEmployers(updatedEmployers);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const email = formData.get("email");
  };

  return (
    <form className="home-container" onSubmit={handleSubmit}>
      <div className="home-section">
        <h2>Personal Details</h2>
        {/* Form for personal details */}
      </div>
      <div className="home-section">
        <h2>Financial Details</h2>
        {/* Form for financial details */}
      </div>
      <div className="home-section">
        <h2>Employment Details</h2>
        {/* Form for employment details */}

        {employers.map((employer, index) => (
          <div className="form-section">
            <div key={index}>
              <FormInput
                inputOptions={{
                  id: `employer${index}`,
                  type: "text",
                  placeholder: "Employer",
                  value: employer,
                  onChange: (e) => handleEmployerChange(index, e.target.value),
                }}
              />
              {index > 0 && (
                <button
                  className="remove-button"
                  onClick={() => handleRemoveEmployer(index)}>
                  <FaTimesCircle />
                </button>
              )}
            </div>
          </div>
        ))}

        <AddButton title={"Add Employer"} onClick={handleAddEmployer} />
      </div>
      <div className="home-section">
        <h2>Education Details</h2>
        {/* Form for education details */}
      </div>

      <FormButton title="Generate" />
    </form>
  );
};

export default Home;
