import React from "react";
import NavBar from "./NavBar";

function RegisterEmployee() {
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>
      <div className="regDiv">
        <h1 className="bg-green-700 text-white text-center p-2 m-2 rounded-full">
          REGISTER EMPLOYEE HERE
        </h1>
      </div>
    </div>
  );
}

export default RegisterEmployee;
