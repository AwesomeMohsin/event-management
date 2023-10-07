import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext)
    
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Account Created Successfully, Please Login')
                navigate('/login')
                
            })
            .catch(error => {
                console.error(error)
            })
        
    }

    // login with google
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Logged in Successfully')
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center pb-10">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* form */}

                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Register</button>
                        </div>
                        <p className="pt-2 mx-auto">Already have an account? <Link
                            to='/login'
                            className="text-blue-500 font-semibold"
                        >Login</Link> </p>

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

export default Register;