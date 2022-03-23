import React from "react";
import { AddPerson } from "./components/add-person/AddPerson";
import { TableList } from "./components/table-list/TableList";

function App() {
  return (
    <div>
      <TableList />;
      <AddPerson />
    </div>
  );
}

export default App;
