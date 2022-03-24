import React, { useState } from "react";
import { Tab } from "../table/Table";
import { ButtonAddPerson } from "../button-add-person/ButtonAddPerson";
import { AddPerson } from "../add-person/AddPerson";

export const TableList = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Employee list
          </h1>
        </div>

        <div className=" w-full mx-auto overflow-auto">
          <div className=" justify-center overflow-x-auto shadow-md sm:rounded-lg z-50 ">
            <Tab />
            <div className="flex justify-center">
              <AddPerson isShowLogin={isShowLogin} />
            </div>
          </div>
        </div>
        <div className="flex pl-4 mt-4  w-full mx-auto">
          <ButtonAddPerson handleLoginClick={handleLoginClick} />
        </div>
      </div>
    </section>
  );
};
