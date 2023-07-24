import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PraviteRoute = ({children}) => {
    const {user} = useContext(authContext)
    const location = useLocation()
    if(user){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PraviteRoute;