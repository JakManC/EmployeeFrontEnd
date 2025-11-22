import React from "react";
import NavBar from "./NavBar";
import useEmployeeStore from "../../employeeStore";

function ListEmployee() {
  const employeeArray = useEmployeeStore((state) => state.employeeArray);
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>

      <div>
        <h1 className="bg-green-700 text-white text-center p-2 m-2 rounded-full">
          LIST OF EMPLOYEES ARE AS FOLLOWS..
        </h1>

        <ul>
          {employeeArray.map((employee) => (
            <li key={employee.id}>
              Name :{employee.fName} {employee.fatherName} {employee.surName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListEmployee;
