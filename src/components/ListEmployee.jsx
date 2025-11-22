import React from "react";
import NavBar from "./NavBar";
import useEmployeeStore from "../../employeeStore";

function ListEmployee() {
  const deleteEmployeeFromList = useEmployeeStore(
    (state) => state.deleteEmployeeFromList
  );
  const employeeArray = useEmployeeStore((state) => state.employeeArray);
  const handleDelete = (indx) => {
    console.log("Deleted Employee Index Is : ", indx);
    deleteEmployeeFromList(indx);
  };
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>
      {employeeArray.length > 0 ? (
        <h1 className="bg-green-700 text-white text-center p-2 m-2 rounded-full">
          LIST OF EMPLOYEES ARE AS FOLLOWS..
        </h1>
      ) : (
        <h1 className="bg-red-700 text-white text-center p-2 m-2 rounded-full">
          No Eployee Present In List...
        </h1>
      )}
      <div>
        {employeeArray.length > 0 && (
          <table className="border border-black w-full mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2">ID</th>
                <th className="border border-black p-2">First Name</th>
                <th className="border border-black p-2">Father Name</th>
                <th className="border border-black p-2">Surname</th>
                <th className="border border-black p-2">DELETE</th>
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
                  <td className="border border-black p-2 text-center">
                    {employee.surName}
                  </td>
                  <td className="border border-black p-2 text-center">
                    {" "}
                    <button
                      className="bg-red-700 text-white p-2 m-2 justify-center items-center rounded-full "
                      onClick={() => handleDelete(index)}
                    >
                      Dlt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ListEmployee;
