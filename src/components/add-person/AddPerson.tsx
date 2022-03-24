import React from "react";
import { Forma } from "../forma/Forma";

export const AddPerson = ({ isShowLogin }: any) => {
  return (
    <div className={` ${isShowLogin ? "block" : "hidden"} `}>
      <Forma />
    </div>
  );
};
