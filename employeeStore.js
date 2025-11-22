import { data } from "react-router-dom";
import { create } from "zustand";

const useEmployeeStore = create((set) => ({
  employeeArray: [],
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
}));
export default useEmployeeStore;
