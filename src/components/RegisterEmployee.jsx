import React from "react";
import NavBar from "./NavBar";
import { useForm } from "react-hook-form";
import useEmployeeStore from "../../employeeStore";

function RegisterEmployee() {
  const addEmpIntoList = useEmployeeStore((state) => state.addEmpIntoList);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(`Name : ${data.fName} ${data.fatherName} ${data.surName}`);
    addEmpIntoList(data);
    reset();
  };
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>
      <div className="regDiv">
        <h1 className="bg-green-700 text-white text-center p-2 m-2 rounded-full">
          REGISTER EMPLOYEE HERE
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <table className="border border-gray-500 w-full text-left">
            <tbody>
              {/* First Name */}
              <tr className="border-b">
                <td className="p-2 font-semibold">First Name:</td>
                <td className="p-2">
                  <input
                    type="text"
                    {...register("fName")}
                    placeholder="First Name"
                    className="border border-black p-2 rounded-md w-full"
                  />
                </td>
              </tr>

              {/* Father Name */}
              <tr className="border-b">
                <td className="p-2 font-semibold">Father Name:</td>
                <td className="p-2">
                  <input
                    type="text"
                    {...register("fatherName")}
                    placeholder="Father Name"
                    className="border border-black p-2 rounded-md w-full"
                  />
                </td>
              </tr>

              {/* Surname */}
              <tr className="border-b">
                <td className="p-2 font-semibold">Surname:</td>
                <td className="p-2">
                  <input
                    type="text"
                    {...register("surName")}
                    placeholder="Surname"
                    className="border border-black p-2 rounded-md w-full"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white p-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterEmployee;
