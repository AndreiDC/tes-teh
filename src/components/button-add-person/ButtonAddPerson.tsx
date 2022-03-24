import React from "react";

export const ButtonAddPerson = ({ handleLoginClick }: any) => {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <button
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
      type="button"
      onClick={handleClick}
    >
      Add person
    </button>
  );
};
