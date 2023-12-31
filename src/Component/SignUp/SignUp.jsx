/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider.jsx";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data.pass)
        const name = data.name
        const email = data.email
        const pass = data.pass
        createUser(email, pass)
        .then(result =>
        {
            console.log(result.user)
            navigate(result.user && '/dash/todo')
            if(result.user){
              const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "success",
                  title: "Account created successfully"
                });
          }
        }
            )
        .catch(error => {
            console.error(error)
            if(error){
              const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "success",
                  title: "Authentication error"
                });
          }
        })
      }
  return (
    <div className="md:flex max-h-screen items-center justify-center gap-6 py-4 md:block px-4 md:block">
      <div className="md:w-1/2">
        <img
          src="https://i.postimg.cc/7L4y11r1/Premium-Vector-Sign-in-page-concept-illustration.jpg"
          alt=""
        />
      </div>
      <div className=" border card w-full container mx-auto max-w-sm shadow-lg rounded-none">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            Create your account
          </h2>
          <h2 className="mb-3 text-center">
            Have an account?
            <NavLink
              to={"/Login"}
              className="text-blue-500 font-bold cursor-pointer hover:underline underline-offset-4 ml-2"
            >
              LogIn
            </NavLink>
          </h2>
          <div className="form-control mb-3">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control mb-3">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              {...register("pass", { required: true })}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
