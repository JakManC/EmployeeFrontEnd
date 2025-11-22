import React from "react";
import NavBar from "./NavBar";
import { useForm } from "react-hook-form";
import useEmployeeStore from "../../employeeStore";
import { NavLink, useNavigate } from "react-router-dom";

function LoginEmployee() {
  const employeeArray = useEmployeeStore((state) => state.employeeArray);

  const loginEmployee = useEmployeeStore((state) => state.loginEmployee);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Form Submitted............");
    console.log(`FirstName : ${data.fName}`);

    loginEmployee(data.fName, data.sName);
    navigate("/homePage");

    reset();
  };
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>

      <div className="text-center ">
        <h1 className="bg-green-700 text-white text-center p-2 m-2 rounded-full">
          LOGIN EMPLOYEE HERE
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="nameDiv">
            <label htmlFor="fName">
              FirstName :{" "}
              <input
                type="text"
                placeholder="Name : "
                className="
        border-2 border-black p-2 m-2 rounded-full
        "
                {...register("fName")}
              />
            </label>
          </div>

          <div className="surNameDiv">
            <label htmlFor="surName">
              SurName :
              <input
                type="text"
                placeholder="SurName : "
                className="
        border-2 border-black p-2 m-2 rounded-full
        "
                {...register("sName")}
              />
            </label>
          </div>

          <div className="subBtnDiv">
            <button
              className="bg-green-700 text-white p-2 m-2 rounded-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginEmployee;
