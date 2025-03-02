import React, { useState } from "react";
import { registerUser } from "../services/api";

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    try {
      const response = await registerUser(username);
      if (response.success) {
        localStorage.setItem("username", username);
        onRegister(username); // Proceed to the game
      } else {
        setError(response.message || "Failed to register. Try again.");
      }
    } catch (err) {
      setError("Error connecting to server.");
      console.error(err);
    }
  };

  return (
      <div className="register-screen">
        <h2>Welcome to Globetrotter! 🌍 </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Start Game</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
  );
};

export default Register;
