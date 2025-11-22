import React from "react";
import NavBar from "./NavBar";

function LoginEmployee() {
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>

      <div>
        <h1 className="bg-green-700 text-white text-center p-2 m-2 rounded-full">
          LOGIN EMPLOYEE HERE
        </h1>
      </div>
    </div>
  );
}

export default LoginEmployee;
