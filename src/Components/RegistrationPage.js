import React, { useState } from "react";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
    status: "",
    purpose: "",
    adharPhoto: null,
    IdCardPhoto: null,
    currentPhoto: null,
    location: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Handle file inputs separately
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Assuming single file upload, adjust as needed
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., API calls, state updates, etc.
    console.log("Registration submitted:", formData);
    // Reset the form or navigate to another page after registration
  };

  return (
    <div className="register-form">
      <h2>Bike Rental Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            {" "}
            <option value="" disabled selected>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Status:
          <select
            name="status"
            value={formData.staus}
            onChange={handleChange}
            required
          >
            {" "}
            <option value="" disabled selected>
              Select Status
            </option>
            <option value="bachelor">Bachelor</option>
            <option value="family">Family</option>
          </select>
        </label>
        <br />
        <label>
          Purpose:
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          >
            {" "}
            <option value="" disabled selected>
              Select Purpose
            </option>
            <option value="studies">Studies</option>
            <option value="Work">Work</option>
            <option value="family-stay">Family Stay</option>
          </select>
        </label>
        <br />
        <label>
          Aadhar Card Photo:
          <input
            type="file"
            name="adharPhoto"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </label>
        <br />
        <label>
          DriverLisence photo:
          <input
            type="file"
            name="licensePhoto"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </label>
        <br />
        <label>
          Current Photo:
          <input
            type="file"
            name="currentPhoto"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegistrationPage;
