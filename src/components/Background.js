import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Adjust the path as necessary

const Background = () => {
  return (
    <div className="bg-dark-blue text-white min-w-full min-h-screen"></div>
  );
};

export default Background;
