import React from "react";
import NavBar from "./NavBar";

function ListEmployee() {
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>

      <div>
        <h1 className="bg-green-700 text-white text-center p-2 m-2 rounded-full">
          LIST OF EMPLOYEES ARE AS FOLLOWS..
        </h1>
      </div>
    </div>
  );
}

export default ListEmployee;
