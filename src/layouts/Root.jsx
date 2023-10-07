import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/Home/Footer";

const Root = () => {
    return (
        <div>

            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>


            <Toaster />
        </div>
    );
};

export default Root;