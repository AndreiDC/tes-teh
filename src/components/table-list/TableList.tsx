import React from "react";
import { Tab } from "../table/Table";

export const TableList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Employee list
          </h1>
        </div>
        <div className=" w-full mx-auto overflow-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Tab />
          </div>
        </div>
        <div className="flex pl-4 mt-4  w-full mx-auto">
          <button
            className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            type="button"
            data-modal-toggle="authentication-modal"
          >
            Add person
          </button>
        </div>
      </div>
    </section>
  );
};
