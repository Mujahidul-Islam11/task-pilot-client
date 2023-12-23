/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const navigate = useNavigate()

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
       return children
    }
    
    return navigate('/Login')
};

export default PrivateRoute;