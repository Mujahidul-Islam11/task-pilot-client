import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { HiCog6Tooth } from "react-icons/hi2";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut();
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
      <li className="ml-4">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="ml-4">
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="ml-4">
        <NavLink to={"/dis"}>Audience</NavLink>
      </li>
      <li className="ml-4">
        <NavLink to={"/dash/todo"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#7C93C3]">
      <div className="navbar-start py-5 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">
          <img
            src="https://i.postimg.cc/dVCdWdpW/task-pilot2.png"
            className="w-28 h-12"
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <details className="dropdown dropdown-left">
            <summary className="m-1 btn">
              <HiCog6Tooth className="text-2xl"></HiCog6Tooth>
            </summary>
            <ul className="dropdown-content">
              <button onClick={() => handleLogOut()} className="btn">
                LogOut
              </button>
            </ul>
          </details>
        ) : (
          <NavLink to={"/Login"}>
            <button className="btn btn-primary">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
