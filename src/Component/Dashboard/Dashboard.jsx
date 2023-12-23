import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaBell, FaHome, FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import Swal from "sweetalert2";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, LogOut } = useContext(AuthContext);

  
  const handleLogOut = () => {
    LogOut();
    navigate("/");
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Logged out successfully",
    });
  };


  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/dash/todo"}>
          <FaTasks className="text-xl"></FaTasks>
          <span className="hidden md:block">Create Task</span>
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/dash/notification"}>
            <FaBell className="text-xl"></FaBell>
          <span className="hidden md:block">Notification</span>
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/dash/task"}>
          <BiTask className="text-xl"></BiTask>
          <span className="hidden md:block">Tasks</span>
        </NavLink>
      </li>
      <div className="divider"></div>
      <li className="font-semibold">
        <NavLink to={"/"}>
          <FaHome className="text-xl" />
          <span className="hidden md:block">Home</span>
        </NavLink>
      </li>
    </>


  );
  return (
    <div className="flex container mx-auto mt-6">
      <div>
        <div className="rounded-xl bg-[#7C93C3] text-black  mb-4 shadow-xl text-center py-4 px-4">
          <img src={user?.photoURL} className="rounded-full mb-3 mx-auto" />
          <h2 className="mb-3 font-bold">{user?.displayName}</h2>
          <button
            onClick={() => handleLogOut()}
            className="btn btn-primary text-center hover:text-white
           hover:shadow-xl"
          >
            LogOut
          </button>
        </div>
        <div
          className="rounded-xl shadow-xl menu menu-vertical h-full bg-[#7C93C3]
         text-black mx-auto text-center"
        >
          {links}
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
