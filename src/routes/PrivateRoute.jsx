import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    if (loading) {
        return <div className="flex justify-center items-center mt-48 md:mt-80">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }}></Navigate>
    }


    return children;
};

export default PrivateRoute;