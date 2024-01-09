import React, { useState } from "react";
import Icon from "../../images/icon.png";
import home from "../../images/icons/home-icon.png";
import leaderboard from "../../images/icons/leaderboard-icon.png";
import settings from "../../images/icons/settings-icon.png";
import shop from "../../images/icons/shop-icon.png";

function NavBar({ onActiveItemChange }) {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    onActiveItemChange(itemName);
  };

  const handleSpecialItemClick = () => {
    handleItemClick("special");
  };

  const list = document.querySelectorAll(".list");
  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));

  return (
    <div className="flex justify-center align-middle items-center min-h-full">
      <div className="navigation">
        <ul>
          <li
            className={`list ${activeItem === "home" ? "active" : ""}`}
            onClick={() => handleItemClick("home")}
          >
            <button>
              <span className="icon">
                <img src={home} />
              </span>
              <span className="text">Home</span>
            </button>
          </li>
          <li
            className={`list ${activeItem === "leaderboard" ? "active" : ""}`}
            onClick={() => handleItemClick("leaderboard")}
          >
            <button>
              <span className="icon">
                <img src={leaderboard} />
              </span>
              <span className="text">Leaderboard</span>
            </button>
          </li>
          <li className="list special-item">
            <button>
              <span className="icon">
                <img></img>
              </span>
              <span className="text"></span>
            </button>
          </li>
          <li
            className={`list ${activeItem === "store" ? "active" : ""}`}
            onClick={() => handleItemClick("store")}
          >
            <button>
              <span className="icon">
                <img src={shop} />
              </span>
              <span className="text">Store</span>
            </button>
          </li>
          <li
            className={`list ${activeItem === "settings" ? "active" : ""}`}
            onClick={() => handleItemClick("settings")}
          >
            <button>
              <span className="icon">
                <img src={settings} />
              </span>
              <span className="text">Settings</span>
            </button>
          </li>

          <div
            className={`indicator ${activeItem === "special" ? "active" : ""}`}
          ></div>
        </ul>
        <div
          className={`special-item ${activeItem === "special" ? "active" : ""}`}
          onClick={handleSpecialItemClick}
        >
          <button>
            <span className="icon">
              <div className="background-image"></div>
            </span>
          </button>
          <p
            className={`quest-text z-50 absolute -bottom-2 left-3 ${
              activeItem === "special" ? "quest-text-active" : ""
            }`}
          >
            quests
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
