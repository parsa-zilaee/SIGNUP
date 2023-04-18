import React, { useState } from "react";
import "./App.css";

const TutorSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [subjects, setSubjects] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [availableHours, setAvailableHours] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="TutorSignUp">
      <h1>Sign Up as a Tutor</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <label htmlFor="subjects">Subjects (comma-separated)</label>
        <input
          type="text"
          id="subjects"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          required
        />

        <label htmlFor="aboutMe">About Me</label>
        <textarea
          id="aboutMe"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          required
        />

        <label htmlFor="availableHours">Available Hours</label>
        <input
          type="text"
          id="availableHours"
          value={availableHours}
          onChange={(e) => setAvailableHours(e.target.value)}
          required
        />

        <label htmlFor="profilePicture">Profile Picture</label>
        <input
          type="file"
          id="profilePicture"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default TutorSignUp;