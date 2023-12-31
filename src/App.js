import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import LoadingScreen from "./components/LoadingScreen";
import Background from "./components/Background";
import NavBar from "./components/NavBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-blue ease-in-out transition-all duration-75">
      <NavBar />
      {isLoading ? <LoadingScreen /> : <HomeScreen />}
      <Background />
    </div>
  );
}

export default App;
