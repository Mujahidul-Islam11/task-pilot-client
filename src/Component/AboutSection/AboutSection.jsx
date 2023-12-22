/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
  return (
    <section className="bg-[#7C93C3] rounded-lg py-16 px-4 border my-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About TaskPilot</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Welcome to TaskPilot, where efficiency meets simplicity in task
          management. We've crafted a seamless experience powered by ReactJS and
          styled with the elegance of Tailwind CSS.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4">
          Our mission is to empower individuals and teams to achieve more by
          providing a streamlined and intuitive platform for task organization
          and collaboration. We believe that effective task management is the
          key to unlocking productivity and success in any endeavor.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4">
          TaskPilot goes beyond individual task management. It's a hub for
          seamless collaboration, allowing teams to work together effortlessly
          on projects of any scale. We're committed to staying at the forefront
          of productivity innovation, evolving with the latest technologies and
          user feedback to enhance your task management experience continually.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-8">
          Join us on this journey to enhance your productivity, achieve your
          goals, and make task management a breeze with TaskPilot.
        </p>
        <button onClick={()=> navigate(!user ? '/Login': '/dash')} className="rounded-full btn btn-primary mt-7">
          Let's Explore
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
