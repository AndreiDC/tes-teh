import React from "react";
import { useState } from "react";

export const Forma = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [eMail, setEMail] = useState("");
  const [Town, setTown] = useState("");
  const [Skills, setSkills] = useState("");
  const [Description, setDescription] = useState("");
  const [Added, setAdded] = useState("");

  let data = [
    { firstName, lastName, Age, eMail, Town, Skills, Description, Added },
  ];
  console.log(data);
  const handleSubmit = (event: { preventDefault: () => void }) => {
    alert(
      `The name you entered was: ${[
        firstName,
        lastName,
        Age,
        eMail,
        Town,
        Skills,
        Description,
        Added,
      ]} `
    );
    // [
    //   { firstName, lastName, age, eMail, Town, Skills, Description, Added },
    // ]
  };
  return (
    <form className="w-full max-w-lg mt-3" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-1">
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            FIRT NAME
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Doe"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>{" "}
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            LAST NAME
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lastName"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="age"
          >
            AGE
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="number"
            placeholder="28"
            value={Age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="e-mail"
          >
            E-MAIL
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="e-mail"
            type="email"
            placeholder="J.Doe@mail.com"
            value={eMail}
            onChange={(e) => setEMail(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="TOWN"
          >
            TOWN
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="TOWN"
              value={Town}
              onChange={(e) => setTown(e.target.value)}
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="skills"
          >
            SKILLS
          </label>
          <div className="grid grid-cols-2 ">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="skills"
                  defaultChecked
                  value={Skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
                <span className="ml-2">Option 1</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  defaultChecked
                />
                <span className="ml-2">Option 2</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  defaultChecked
                />
                <span className="ml-2">Option 3</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  defaultChecked
                />
                <span className="ml-2">Option 4</span>
              </label>
            </div>

            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Option 5</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Option 6</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 ">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="DESCRIPTION"
          >
            DESCRIPTION
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="DESCRIPTION"
            placeholder="Your message"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="flex  w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="ADDED"
          >
            ADDED
          </label>
          <input
            type="date"
            id="ADDED"
            placeholder="dd-mm-yyyy"
            min="1997-01-01"
            max="2030-12-31"
            value={Added}
            onChange={(e) => setAdded(e.target.value)}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </form>
  );
};
