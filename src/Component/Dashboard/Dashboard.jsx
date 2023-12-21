import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const links = (
        <>
          <li className="">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="">
            <NavLink to={"/task"}>Task</NavLink>
          </li>
          <li className="">
            <NavLink to={"/dash"}>Dashboard</NavLink>
          </li>
        </>
      );
    return (
        <div className="flex container mx-auto mt-6">
            <div>
                <div className="rounded-xl bg-gray-400 mb-6 border text-center py-4 px-4">
                    <img src={user.photoURL} className="rounded-full mx-auto"/>
                    <h2 className="text-xl font-bold">{user.displayName}</h2>
                </div>
                <div className="rounded-xl menu menu-vertical h-full bg-gray-400 mx-auto border text-center">
                    {links}
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;