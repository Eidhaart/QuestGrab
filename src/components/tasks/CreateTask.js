import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
} from "firebase/firestore";
import { app } from "../config/firebase.js"; // Import the Firebase app instance

function CreateTask({ householdId }) {
  const initialDueDate = new Date().toISOString().substring(0, 16); // Initialize with a valid datetime-local format

  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    complete: false,
    daytime: false,
    reward: "",
    added: new Date(),
    due: initialDueDate, // Initialize due with the current date and time
    shortDesc: "",
  });
  const firestore = getFirestore(app);

  const household = "Q6OHvtSnE5GjDmXaEHLj";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollectionRef = collection(
          firestore,
          `Households/${household}/Users`
        );
        const usersQuery = query(usersCollectionRef);
        const querySnapshot = await getDocs(usersQuery);

        const fetchedUsers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    if (household) {
      fetchUsers();
    }
  }, [household]);

  const handleDateChange = (e) => {
    setNewTask({
      ...newTask,
      due: e.target.value, // Update due date
    });
  };

  const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the due time is before or after 17:00
    const dueDate = new Date(newTask.due);
    const dueHours = dueDate.getHours();
    const isDaytime = dueHours < 17; // Check if the time is before 17:00

    try {
      const tasksCollectionRef = collection(
        firestore,
        `Households/${household}/Tasks`
      );
      await addDoc(tasksCollectionRef, {
        ...newTask,
        added: new Date(), // Set the added date to the current date/time
        daytime: isDaytime, // Set daytime based on the due time
      });

      // Reset the form or provide feedback here
      setNewTask({
        title: "",
        description: "",
        assignedTo: "",
        complete: false,
        daytime: false,
        reward: "",
        added: new Date(),
        due: new Date(),
        shortDesc: "",
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTask({
      ...newTask,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      {modal ? (
        <div className="">
          <div className=" flex flex-col  justify-center absolute-center w-screen h-screen bg-black bg-opacity-20 backdrop-blur-sm">
            <button
              className=" w-10 rounded-md fixed top-56 right-96  z-10 text-xl bg-cream p-2"
              onClick={toggleModal}
            >
              X
            </button>
            {/* Add relative positioning here */}
            <form
              className=" gap-2 absolute-center w-96  flex flex-col border-2 border-cream rounded-md p-2 bg-orange"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-cream rounded-sm border-none text-md font-semibold pl-2"
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleChange}
                placeholder="Task Title"
              />
              <input
                className="bg-cream rounded-sm border-none text-md font-semibold pl-2"
                type="text"
                name="shortDesc"
                value={newTask.shortDesc}
                onChange={handleChange}
                placeholder="Short Description"
              />

              <textarea
                className="bg-cream rounded-sm border-none text-md  pl-2 h-20"
                type="text"
                name="description"
                value={newTask.description}
                onChange={handleChange}
                placeholder="long description"
              />
              <input
                className="bg-cream rounded-sm border-none text-md font-semibold pl-2 "
                type="number"
                name="reward"
                value={newTask.reward}
                onChange={handleChange}
                placeholder="Reward"
              />
              {/* Additional inputs for description, reward */}
              <select
                className="bg-cream rounded-sm border-none text-md font-semibold pl-1"
                name="assignedTo"
                value={newTask.assignedTo}
                onChange={handleChange}
              >
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              <input
                className="bg-cream rounded-sm border-none text-md font-semibold pl-1"
                type="datetime-local"
                name="due"
                value={newTask.due}
                onChange={handleDateChange}
              />

              {/* Date pickers for added and due dates */}
              <button
                className="bg-pink rounded-md w-fit self-center px-2 mt-2 text-cream font-draconis text-2xl"
                type="submit"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={toggleModal}>
            <p>Add Task</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateTask;
