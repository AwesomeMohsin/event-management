import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {

    const { loginUser, googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Logged in Successfully')
                navigate( location?.state ? location.state : '/' )
            })
            .catch(error => {
                console.log(error);
            })

    }

    // login with google
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Logged in Successfully')
                navigate( location?.state ? location.state : '/' )
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center pb-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* form */}

                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Login</button>
                        </div>
                        <p className="pt-2">Do not have an account? <Link
                            to='/register'
                            className="text-blue-500 font-semibold"
                        >Register</Link> </p>

                    </form>

                    <hr className="w-2/3 mx-auto" />
                    <p className="mx-auto">Or</p>
                    <hr className="w-2/3 mx-auto" />


                    <div className="mx-auto p-6">
                        <button onClick={handleGoogleLogin} className="flex btn btn-outline">
                            <img className="h-5 pr-1" src="/icons/google.png" alt="" />
                            Continue with Google
                        </button>
                    </div>

                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;