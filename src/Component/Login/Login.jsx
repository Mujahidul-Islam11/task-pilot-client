import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
    const {SignIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
      } = useForm()
    
      const onSubmit = (data) => {
        const email = data.email
        const pass = data.pass
        SignIn(email, pass)
        .then(result =>
        {
            console.log(result.user)
            navigate(result.user && '/')
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
                  title: "Signed in successfully"
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
                  title: "Invalid authentication request"
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
      <div className="card container mx-auto max-w-sm shadow-lg rounded-none border">
      <div className="card-body mb-[-40px]">
      <h2 className=" text-xl md:text-2xl font-bold text-center">Login to your account</h2>
        <h2 className="mb-3 text-center">
          Don't have an account?
          <NavLink to={'/SignUp'} className="text-blue-500 font-bold cursor-pointer hover:underline underline-offset-4 ml-2">SignUp</NavLink>
        </h2>
        <SocialLogin></SocialLogin>
      </div>
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
