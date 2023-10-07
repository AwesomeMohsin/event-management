import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext)

    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // password validation
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters', {
                duration: 5000,
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least 1 UPPERCASE character', {
                duration: 5000,
            });
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error('Password must contain at least 1 special character', {
                duration: 5000,
            });
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                })
                toast.success('Registration success, Please Login')
                navigate('/login')

            })
            .catch(error => {
                console.error(error.message);
                // if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).')
                // {
                //     toast.error('Password should be at least 6 characters', {
                //         duration: 5000,
                //     });
                // }
                if (error.message === 'Firebase: Error (auth/email-already-in-use).')
                {
                    toast.error('Already registered with this email', {
                        duration: 5000,
                    });
                }
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