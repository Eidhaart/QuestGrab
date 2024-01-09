import React from "react";

function ChoiceModal({ onChooseCreate, onChooseJoin }) {
  return (
    <div
      className="flex flex-col gap-10 image-background
     justify-center align-middle modal items-center bg-black bg-opacity-30 w-screen h-screen  fixed p-10 absolute-center backdrop-blur-md backdrop "
    >
      <div className="flex flex-col gap-10 justify-center align-middle w-3/5 ">
        <button
          className="bg-orange hover:bg-cream hover:border-orange transition-all duration-300 rounded-md p-2 border-2 border-cream  "
          onClick={onChooseCreate}
        >
          Create a New Household
        </button>
        <button
          className="bg-orange hover:bg-cream hover:border-orange transition-all duration-300 rounded-md p-2 border-2 border-cream  "
          onClick={onChooseJoin}
        >
          Join Existing Household
        </button>
      </div>
    </div>
  );
}

export default ChoiceModal;
