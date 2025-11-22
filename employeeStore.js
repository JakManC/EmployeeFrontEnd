import { create } from "zustand";

const useEmployeeStore = create((set) => ({
  employeeArray: [{ id: 1, fName: "abc", fatherName: "def", surName: "xyz" }],
}));
export default useEmployeeStore;
