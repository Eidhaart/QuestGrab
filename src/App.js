import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./components/sites/RenderComponent";
import LoadingScreen from "./components/sites/LoadingScreen";
import Background from "./components/misc/Background";
import NavBar from "./components/components/NavBar";
import "./Tailwind.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeItem, setActiveItem] = useState("");

  const handleActiveItemChange = (newActiveItem) => {
    setActiveItem(newActiveItem);
    // Additional actions can be performed here
  };

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
      {isLoading ? (
        <div>
          <LoadingScreen />
          <Background />
        </div>
      ) : (
        <div>
          <HomeScreen activeComponent={activeItem} />
          <NavBar onActiveItemChange={handleActiveItemChange} />
        </div>
      )}
    </div>
  );
}

export default App;
