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

        <table className="border border-black w-full mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-2">ID</th>
              <th className="border border-black p-2">FirstName</th>
              <th className="border border-black p-2">FatherName</th>
              <th className="border border-black p-2">SurName</th>
            </tr>
          </thead>

          <tbody>
            {employeeArray.map((employee, index) => (
              <tr key={index}>
                <td className="border border-black p-2">{index + 1}</td>
                <td className="border border-black p-2">{employee.fName}</td>
                <td className="border border-black p-2">
                  {employee.fatherName}
                </td>
                <td className="border border-black p-2">{employee.surName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployee;
