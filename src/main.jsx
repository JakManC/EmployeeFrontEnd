import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterEmployee from "./components/RegisterEmployee.jsx";
import LoginEmployee from "./components/LoginEmployee.jsx";
import ListEmployee from "./components/ListEmployee.jsx";
import HomePageForLogEmpl from "./components/HomePageForLogEmpl.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/registerEmployee", element: <RegisterEmployee /> },
  { path: "/loginEmployee", element: <LoginEmployee /> },
  { path: "/listOfEmployees", element: <ListEmployee /> },
  { path: "/homePage", element: <HomePageForLogEmpl /> },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
