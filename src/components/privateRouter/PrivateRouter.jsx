import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({children}) => {

    const {user, loding} = useContext(AuthContext)

    if(loding){
        return <p>Loding...</p>
    }

    if(user){
        return children;
    }

    return (
            <Navigate to='/login'></Navigate>
    );
};

export default PrivateRouter;