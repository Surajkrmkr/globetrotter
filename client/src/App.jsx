import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import GameBoard from "./components/GameBoard";
import Register from "./components/Register";

const App = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  return (
    <div className="centered-container">
      <div className="globetrotter">
        <h1>🌍 Globetrotter Game</h1>
        {username ? (
          <GameBoard username={username} />
        ) : (
          <Register onRegister={setUsername} />
        )}
      </div>
    </div>
  );
};

export default App;
