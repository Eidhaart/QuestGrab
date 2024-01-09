import React from "react";

function CreateHouseholdModal({ onGoBack }) {
  return (
    <div
      className="flex flex-col gap-10 image-background
     justify-center align-middle modal items-center bg-black bg-opacity-30 w-screen h-screen  fixed p-10 absolute-center backdrop-blur-md backdrop "
    >
      CreateHouseholdModal
      <button className="" onClick={onGoBack}>
        Back to Choices
      </button>
    </div>
  );
}

export default CreateHouseholdModal;
