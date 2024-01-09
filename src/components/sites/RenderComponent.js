import React from "react";
import Special from "./Special";
import Home from "./Home";
import Settings from "./Settings";
import Store from "./Store";
import Leaderboard from "./Leaderboard";

const HomeScreen = ({ activeComponent }) => {
  const renderComponent = (activeComponent) => {
    switch (activeComponent) {
      case "home":
        return <Home householdId={"Q6OHvtSnE5GjDmXaEHLj"} />;
      case "special":
        return <Special householdId={"Q6OHvtSnE5GjDmXaEHLj"} />;
      case "settings":
        return <Settings />;
      case "store":
        return <Store />;
      case "leaderboard":
        return <Leaderboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="   w-screen h-screen">
      {renderComponent(activeComponent)}
    </div>
  );
};

export default HomeScreen;
