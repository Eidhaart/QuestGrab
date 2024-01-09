import React, { useState, useEffect, useRef } from "react";
import moon from "../../images/icons/moon-icon.png";
import sun from "../../images/icons/sun-icon.png";
import check from "../../images/icons/check-icon.png";
import uncheck from "../../images/icons/uncheck-icon.png";
import Tasks from "../tasks/Tasks";
import DisplayHouseholds from "../DisplayHouseholds";
import quests from "../../images/Quests.png";
import CreateTask from "../tasks/CreateTask";

function Special({ householdId, userId }) {
  const [activeItem, setActiveItem] = useState("");
  const [activeFilterBar, setactiveFilterBar] = useState(false);

  const handleItemClick = (itemName) => () => {
    if (activeItem === itemName) {
      setActiveItem("");
    } else {
      setActiveItem(itemName);
    }
  };

  const toggleFilterBar = () => {
    if (!activeFilterBar) {
      setactiveFilterBar(true);
    } else {
      setactiveFilterBar(false);
    }
  };

  return (
    <div className="flex columns-2 image-background bg-black bg-opacity-20">
      <img
        src={quests}
        className=" h-48 w-auto fixed top-2/4 left-3/4 pl-20 opacity-50"
      />
      <button
        onClick={toggleFilterBar}
        className={
          !activeFilterBar ? "filter-button active " : "filter-button "
        }
      >
        <ion-icon name="filter"></ion-icon>
      </button>
      <div className={activeFilterBar ? "filter-bar active" : "filter-bar"}>
        <ion-icon name="triangle-outline"></ion-icon>
        <div className="item w-12">
          <button
            className={activeItem === "moon" ? "button active" : "button"}
            onClick={handleItemClick("moon")}
          >
            <img src={moon}></img>
          </button>
        </div>
        <ion-icon name="remove"></ion-icon>
        <div className="item ">
          <button
            className={activeItem === "sun" ? "button active" : "button"}
            onClick={handleItemClick("sun")}
          >
            <img src={sun}></img>
          </button>
        </div>
        <ion-icon name="remove"></ion-icon>
        <div className="item w-12 ">
          <button
            className={activeItem === "check" ? "button active" : "button"}
            onClick={handleItemClick("check")}
          >
            <img src={check}></img>
          </button>
        </div>
        <ion-icon name="remove"></ion-icon>
        <div className="item w-12">
          <button
            className={activeItem === "uncheck" ? "button active" : "button"}
            onClick={handleItemClick("uncheck")}
          >
            <img src={uncheck}></img>
          </button>
        </div>
        <div className=" rotate-180">
          <ion-icon name="triangle-outline"></ion-icon>
        </div>
      </div>
      <div className=" w-screen pl-10 pt-10  ">
        <Tasks householdId={householdId} />
        <CreateTask />
      </div>
    </div>
  );
}

export default Special;
