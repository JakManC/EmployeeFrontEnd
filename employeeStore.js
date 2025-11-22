import { data } from "react-router-dom";
import { create } from "zustand";
import LoginEmployee from "./src/components/LoginEmployee";
import { get } from "react-hook-form";

const useEmployeeStore = create((set, get) => ({
  employeeArray: [],

  currentUser: null,
  error: null,
  addEmpIntoList: (empl) => {
    set((state) => ({
      employeeArray: [...state.employeeArray, empl],
    }));
  },
  deleteEmployeeFromList: (indx) =>
    set((state) => ({
      employeeArray: state.employeeArray.filter(
        (empl, index) => indx !== index
      ),
    })),

  loginEmployee: (fName, sName) => {
    const employees = get().employeeArray;

    const foundEmpl = employees.find(
      (empl) =>
        empl.fName.toLowerCase() === fName.toLowerCase() &&
        empl.surName.toLowerCase() === sName.toLowerCase()
    );

    if (foundEmpl) {
      set({ currentUser: foundEmpl, error: null });
      return alert("Login Successful");
    } else {
      set({ currentUser: null, error: "Invalid Credentials" });
      return "Invalid Credentials...";
    }
  },
}));
export default useEmployeeStore;
