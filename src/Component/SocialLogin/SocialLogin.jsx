import { TiSocialGooglePlus } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {GoogleSignIn, GithubSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGSignIn = () =>{
        GoogleSignIn()
        .then(result =>{
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
        })
        .catch(error =>{
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
    const handleGitSignIn = () =>{
        GithubSignIn()
        .then(result =>{
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
        })
        .catch(error =>{
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
    <div>
      <div className="flex justify-center items-center gap-6">
        <button onClick={()=> handleGSignIn()} className="btn text-white btn-error bg-red-600 ">
          <TiSocialGooglePlus className="text-2xl"></TiSocialGooglePlus>
        </button>
        <button onClick={()=> handleGitSignIn()} className="btn text-white btn-primary bg-blue-800">
          <FaGithub className="text-xl"></FaGithub>
        </button>
      </div>
      <div className="divider">OR</div>
    </div>
  );
};

export default SocialLogin;
