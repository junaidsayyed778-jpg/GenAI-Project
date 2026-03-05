import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/pages/Login"
import Register from "./auth/pages/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Welcome to the App</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
