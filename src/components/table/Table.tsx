import React from "react";

export const Tab = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            NrCrt
          </th>
          <th scope="col" className="px-6 py-3">
            FIRST NAME
          </th>
          <th scope="col" className="px-6 py-3">
            LAST NAME
          </th>
          <th scope="col" className="px-6 py-3">
            AGE
          </th>
          <th scope="col" className="px-6 py-3">
            E-MAIL
          </th>
          <th scope="col" className="px-6 py-3">
            TOWN
          </th>
          <th scope="col" className="px-6 py-3">
            DESCRIPTION
          </th>
          <th scope="col" className="px-6 py-3">
            SKILLS
          </th>
          <th scope="col" className="px-6 py-3">
            ADDED
          </th>
          <th scope="col" className="px-6 py-3">
            ACTION
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="px-6 py-4">1</td>
          <td className="px-6 py-4">Zelenschi</td>
          <td className="px-6 py-4">Andrei</td>
          <td className="px-6 py-4">28</td>
          <td className=" px-6 py-4">a.zelenschi@gmail.com</td>
          <td className="px-6 py-4">Chisinau</td>
          <td className="px-6 py-4 break-words ">
            Aplicant la pozitia de web-developer la ICG Engineering S.R.L.
          </td>
          <td className="px-6 py-4">Html,css,js</td>

          <td className="px-6 py-4">23.03.22</td>
          <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
