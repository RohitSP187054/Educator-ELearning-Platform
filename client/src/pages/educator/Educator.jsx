import React from "react";
import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <div className="flex text-center justify-center items-center">
      <h1 className=" mt-[50%]">Sorry page is On working</h1>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Educator;
