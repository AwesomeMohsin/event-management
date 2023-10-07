import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const NavBar = () => {

    const { user, logoutUser } = useContext(AuthContext)



    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("Logged out Successfully")
            })
            .catch(error => console.log(error))
    }


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 flex flex-col-reverse md:flex-row md:container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost px-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Events</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {/* <div className="navbar-end"> */}
                {
                    user ?
                        <div className="md:navbar-end flex flex-row gap-2 items-center">
                            <p className="font-semibold">{user.displayName}</p>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user.photoURL !== null ? <img src={user.photoURL} /> : <img src="/icons/user.png" />
                                    }
                                </div>
                            </label>
                            <button
                                onClick={handleLogout}
                                className="btn btn-outline">Log Out</button>
                        </div>

                        :
                        
                        <div className="navbar-end flex flex-row gap-2 items-center">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/icons/user.png" />
                                </div>
                            </label>
                            <Link to='/login' className="btn btn-outline">Login</Link>
                        </div>


                }

            {/* </div> */}
        </div>
    );
};

export default NavBar;