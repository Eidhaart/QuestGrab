import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"; // Adjust the path as necessary

const Background = () => {
  return (
    <div>
      <div className="image-background-alt w-screen h-screen overflow-hidden"></div>
    </div>
  );
};

export default Background;
