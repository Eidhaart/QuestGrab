import React from "react";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { app } from "../config/firebase.js"; // Ensure the correct path

const DeleteTask = ({ taskId, householdId }) => {
  const firestore = getFirestore(app);
  const handleDelete = async () => {
    try {
      const taskDocRef = doc(
        firestore,
        `Households/${householdId}/Tasks`,
        taskId
      );
      await deleteDoc(taskDocRef);
      console.log(`Task with id ${taskId} has been deleted`);
      // Optionally update UI or state here
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return <button onClick={handleDelete}>Delete Task</button>;
};

export default DeleteTask;
