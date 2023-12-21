import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./Main/LayOut.jsx";
import Home from "./Component/Home/Home.jsx";
import Login from "./Component/Login/Login.jsx";
import SignUp from "./Component/SignUp/SignUp.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import AboutSection from "./Component/AboutSection/AboutSection.jsx";
import Task from "./Component/Task/Task.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>,
      },
      {
        path: "/task",
        element: <Task></Task>,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/SignUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dash",
    element: <Dashboard></Dashboard>,
    children: [
      {
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
