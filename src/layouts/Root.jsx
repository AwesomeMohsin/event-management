import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/Home/Footer";

const Root = () => {
    return (
        <div className="bg-[#EDF3F8]">

            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>


            <Toaster />
        </div>
    );
};

export default Root;