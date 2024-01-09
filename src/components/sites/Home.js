import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import CreateTask from "../tasks/CreateTask";
import ChoiceModal from "../modals/ChoiceModal";
import CreateHouseholdModal from "../modals/CreateHouseholdModal";
import JoinHouseholdModal from "../modals/JoinHouseholdModal";
import "../modals/Modal.css";
import UserLogin from "../data/UserLogin";

function Home() {
  const [activeModal, setActiveModal] = useState("choice");

  const handleChooseCreate = () => {
    setActiveModal("create");
  };

  const handleChooseJoin = () => {
    setActiveModal("join");
  };

  const handleGoBackToChoice = () => {
    setActiveModal("choice");
  };

  return (
    <div>
      <div>
        {activeModal === "choice" && (
          <ChoiceModal
            onChooseCreate={handleChooseCreate}
            onChooseJoin={handleChooseJoin}
          />
        )}
        {activeModal === "create" && (
          <CreateHouseholdModal onGoBack={handleGoBackToChoice} />
        )}
        {activeModal === "join" && (
          <JoinHouseholdModal onGoBack={handleGoBackToChoice} />
        )}
      </div>
    </div>
  );
}

export default Home;
