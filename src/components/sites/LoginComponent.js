import React, { useState } from "react";
import stamp from "../../images/icons/stamp.png";
// Make sure to create a corresponding CSS file

const LoginComponent = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log("Username submitted:", username);
  };

  return (
    <div className="login-container w-screen h-screen overflow-hidden">
      <hr className="border-darker"></hr>
      <br />
      <hr className="border-darker"></hr>
      <br />
      <hr className="border-darker"></hr>
      <br />
      <hr className="border-darker"></hr>
      <br />
      <hr className="border-darker"></hr>
      <br />
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input">
          <p className=" text-6xl"></p>
        </div>
        <div className="flex flex-row  align-middle">
          <div className=" translate-y-6 -translate-x-3 text-5xl">-</div>
          <input
            type="text"
            placeholder="Name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>

        <br />
        <button type="submit" className="login-button">
          <img src={stamp}></img>
        </button>
      </form>
      <br />
      <hr className="border-darker"></hr>
      <br />
      <hr className="border-darker"></hr>
      <br />
      <hr className="border-darker"></hr>
      <br />
    </div>
  );
};

export default LoginComponent;
