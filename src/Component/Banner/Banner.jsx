import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

  return (
    <div className="hero min-h-screen bg-[#7C93C3] rounded-lg my-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6">
        <img
          src="https://i.postimg.cc/RVtWgzxM/Free-Vector-Man-holding-a-clock-time-management-concept-removebg-preview.png"
          className="md:max-w-sm md:w-1/2"
        />
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">
            TaskPilot: Streamline Your Work, Master Your Tasks
          </h1>
          <p className="py-6">
            Elevate your productivity with TaskForge, your all-in-one task
            management platform. Effortlessly organize, prioritize, and
            collaborate on tasks. Experience a seamless workflow with intuitive
            features and real-time updates. Let's conquer tasks together!
          </p>
      <button onClick={()=> navigate(!user && '/Login')} className="btn btn-primary">Let’s Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
