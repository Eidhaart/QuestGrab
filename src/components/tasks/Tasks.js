import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { app } from "../config/firebase.js"; // Import the Firebase app instance
import { getFirestore } from "firebase/firestore";
import "./Tasks.css";
import moon from "../../images/icons/moon-icon.png";
import sun from "../../images/icons/sun-icon.png";
import check from "../../images/icons/check-icon.png";
import uncheck from "../../images/icons/uncheck-icon.png";
import DeleteTask from "./DeleteTask.js";

function Tasks({ householdId }) {
  const [tasks, setTasks] = useState([]);
  const firestore = getFirestore(app); // Initialize Firestore
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  useEffect(() => {
    // Setting up the query
    const q = query(collection(firestore, `Households/${householdId}/Tasks`));

    // Real-time listener
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const tasksList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksList);
      },
      (error) => {
        console.error("Error fetching tasks:", error);
      }
    );

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [householdId, firestore]);

  function formatDate(timestamp) {
    if (!timestamp || !timestamp.seconds) {
      return "Invalid timestamp";
    }

    const date = new Date(timestamp.seconds * 1000);
    const month = date.getMonth() + 1;
    const day = date.getDate(); // Correct method for day of the month
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year} ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  const toggleTask = (taskId) => {
    setSelectedTaskId(selectedTaskId === taskId ? null : taskId);
  };

  return (
    <div className="pr-20 text-white font-serif p-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="rounded-md border-2 border-[#ce876b] p-3 mb-3 bg-[#11273E] hover:bg-[#204A6D] hover:border-[#F3C88E] transition duration-300 cursor-pointer"
          onClick={() => toggleTask(task.id)}
        >
          <div className="flex flex-col items mb-1">
            <h2 className="text-2xl  ml-1  flex flex-row tracking-wider font-draconis font-bold">
              {task.title}

              {task.daytime ? (
                <img className="w-10 absolute right-24" src={sun} />
              ) : (
                <img className="w-10 absolute right-24" src={moon} />
              )}
              {task.complete ? (
                <img className="w-10 absolute right-36" src={check} />
              ) : (
                <img className="w-10 absolute right-36" src={uncheck} />
              )}
            </h2>
            <p className=" text-orange font-draconis italic ml-1 text-sm -mt-1">
              {task.shortDesc}
            </p>
          </div>
          <div
            className={`task-details font-draconis font-normal bg-black bg-opacity-20 px-4   rounded-md   ${
              selectedTaskId === task.id ? "task-details-expanded " : ""
            }`}
          >
            <p>{task.assignedTo}</p>
            <div className="">
              <p className=" text-left text-sm opacity-60 italic">
                {" "}
                {formatDate(task.added)}
              </p>
              <br></br>
              <p className=" tracking-wide">{task.description}</p>
              <br></br>
            </div>

            <p className="text-right"> {task.reward} p</p>
            <p className="text-right text-sm opacity-60 ">
              {" "}
              {formatDate(task.due)}
            </p>
            <DeleteTask taskId={task.id} householdId={householdId} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
