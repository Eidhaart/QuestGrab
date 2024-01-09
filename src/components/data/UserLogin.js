import React, { useState, useEffect } from "react";

function UserLogin() {
  const [userId, setUserId] = useState("");

  // Load userId from local storage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userId", userId);
    // Additional actions after saving to localStorage
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userId} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{userId}</p>
    </div>
  );
}

export default UserLogin;
