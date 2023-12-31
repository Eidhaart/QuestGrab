import React, { useState } from "react";
import Icon from "../images/icon.png";

function NavBar() {
  const [isSpecialActive, setIsSpecialActive] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleSpecialItemClick = () => {
    setActiveItem("special");
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
                <ion-icon name="home"></ion-icon>
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
                <ion-icon name="trophy"></ion-icon>
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
                <ion-icon name="storefront"></ion-icon>
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
                <ion-icon name="settings"></ion-icon>
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
              {/* <img src={Icon}></img> */}
              <div className="background-image"></div>
            </span>
            <span className="text"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
