import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { app } from "./config/firebase.js"; // Import the Firebase app instance
import { getFirestore } from "firebase/firestore";

function DisplayHouseholds() {
  const [households, setHouseholds] = useState([]);
  const firestore = getFirestore(app); // Initialize Firestore

  useEffect(() => {
    const fetchHouseholds = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "Households")
        );
        const householdsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHouseholds(householdsList);
      } catch (error) {
        console.error("Error fetching households:", error);
      }
    };

    fetchHouseholds();
  }, []);

  return (
    <div>
      <h1>Households</h1>
      <ul>
        {households.map((household) => (
          <li key={household.id}>
            {household.id} - {household.name}
          </li> // Replace 'name' with the appropriate property if different
        ))}
      </ul>
    </div>
  );
}

export default DisplayHouseholds;
