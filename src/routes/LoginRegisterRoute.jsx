import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const LoginRegisterRoute = ({children}) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    return children;
};

export default LoginRegisterRoute;