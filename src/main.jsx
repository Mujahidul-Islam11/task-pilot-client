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
import TodoList from "./Component/Dashboard/TodoList.jsx";
import DisplaySection from "./Component/DisplaySection/DisplaySection.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoute from "./PrivateRoute.jsx";
import Edit from "./Component/Edit/Edit.jsx";
import Notification from "./Component/Notification/Notification.jsx";
const queryClient = new QueryClient();

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
        path: "/dis",
        element: <DisplaySection></DisplaySection>,
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      
      {
        path: 'todo',
        element: <PrivateRoute><TodoList></TodoList></PrivateRoute>
      },
      {
        path: 'task',
        element: <PrivateRoute><Task></Task></PrivateRoute>
      },
      {
        path: 'notification',
        element: <PrivateRoute><Notification></Notification></PrivateRoute>
      },
    ]
  },
  
  {
    path: '/edit/:id',
    element: <PrivateRoute><Edit></Edit></PrivateRoute>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProvider>
      <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    </AuthProvider>

);
