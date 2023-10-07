import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className="flex justify-center items-center mt-48 md:mt-80">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;